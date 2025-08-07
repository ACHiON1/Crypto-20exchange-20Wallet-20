import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Send, AlertCircle, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WalletBalance, SendMoneyRequest } from "@shared/wallet";

export default function WalletSendPage() {
  const navigate = useNavigate();
  const [balances, setBalances] = useState<WalletBalance[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Mock data - replace with actual API calls
    const mockBalances: WalletBalance[] = [
      { currency: "USD", amount: 2450.75, symbol: "$" },
      { currency: "EUR", amount: 1890.20, symbol: "€" },
      { currency: "BTC", amount: 0.05423, symbol: "₿" },
    ];
    setBalances(mockBalances);
    setSelectedCurrency("USD");
  }, []);

  const selectedBalance = balances.find(b => b.currency === selectedCurrency);
  const estimatedFee = selectedCurrency === "BTC" ? 0.00001 : parseFloat(amount) * 0.01; // 1% fee for fiat, fixed for BTC

  const handleSend = async () => {
    setError("");
    setIsLoading(true);

    try {
      // Validation
      if (!recipientAddress) {
        throw new Error("Recipient address is required");
      }
      if (!amount || parseFloat(amount) <= 0) {
        throw new Error("Please enter a valid amount");
      }
      if (!selectedBalance) {
        throw new Error("Please select a currency");
      }
      if (parseFloat(amount) + estimatedFee > selectedBalance.amount) {
        throw new Error("Insufficient balance (including fees)");
      }

      const sendRequest: SendMoneyRequest = {
        recipientAddress,
        amount: parseFloat(amount),
        currency: selectedCurrency,
        message: message || undefined
      };

      // Mock API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Sending money:", sendRequest);
      setSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        navigate('/wallet');
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send money");
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (amount: number, currency: string, symbol: string) => {
    if (currency === "BTC") {
      return `${symbol}${amount.toFixed(6)}`;
    }
    return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background p-4 max-w-2xl mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md">
            <CardContent className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Payment Sent!</h2>
              <p className="text-muted-foreground mb-6">
                Your payment of {selectedBalance?.symbol}{amount} has been sent successfully.
              </p>
              <div className="space-y-2">
                <Button className="w-full" onClick={() => navigate('/wallet')}>
                  Back to Wallet
                </Button>
                <Button variant="outline" className="w-full" onClick={() => navigate('/wallet/transactions')}>
                  View Transactions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 max-w-2xl mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" onClick={() => navigate('/wallet')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Send Money</h1>
            <p className="text-muted-foreground">Transfer funds to another wallet</p>
          </div>
        </div>

        {/* Send Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Send className="h-5 w-5" />
              <span>Transfer Details</span>
            </CardTitle>
            <CardDescription>Enter the recipient details and amount</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Currency Selection */}
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {balances.map((balance) => (
                    <SelectItem key={balance.currency} value={balance.currency}>
                      <div className="flex items-center justify-between w-full">
                        <span>{balance.currency}</span>
                        <span className="text-muted-foreground ml-2">
                          {formatCurrency(balance.amount, balance.currency, balance.symbol)}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedBalance && (
                <p className="text-sm text-muted-foreground">
                  Available: {formatCurrency(selectedBalance.amount, selectedBalance.currency, selectedBalance.symbol)}
                </p>
              )}
            </div>

            <Separator />

            {/* Recipient */}
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Address</Label>
              <Input
                id="recipient"
                placeholder="Enter wallet address or email"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
              />
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pr-12"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  {selectedBalance?.currency}
                </span>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Add a note for this transaction"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>

            <Separator />

            {/* Transaction Summary */}
            {amount && selectedBalance && (
              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium">Transaction Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span>{formatCurrency(parseFloat(amount) || 0, selectedBalance.currency, selectedBalance.symbol)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Fee:</span>
                    <span>{formatCurrency(estimatedFee, selectedBalance.currency, selectedBalance.symbol)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>{formatCurrency((parseFloat(amount) || 0) + estimatedFee, selectedBalance.currency, selectedBalance.symbol)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Send Button */}
            <Button 
              className="w-full" 
              onClick={handleSend}
              disabled={isLoading || !recipientAddress || !amount || !selectedCurrency}
            >
              {isLoading ? "Sending..." : `Send ${selectedBalance?.symbol}${amount || "0.00"}`}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
