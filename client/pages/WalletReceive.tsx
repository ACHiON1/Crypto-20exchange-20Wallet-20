import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Copy, Share2, QrCode, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WalletBalance, ReceiveMoneyData } from "@shared/wallet";

export default function WalletReceivePage() {
  const navigate = useNavigate();
  const [balances, setBalances] = useState<WalletBalance[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [requestAmount, setRequestAmount] = useState("");
  const [receiveData, setReceiveData] = useState<ReceiveMoneyData | null>(null);

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

  useEffect(() => {
    if (selectedCurrency) {
      // Generate wallet address and QR code for selected currency
      // Mock data - replace with actual API call
      const mockReceiveData: ReceiveMoneyData = {
        walletAddress: selectedCurrency === "BTC" 
          ? "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
          : selectedCurrency === "ETH"
          ? "0x742A4c2e7c1c4a8c4e2b2f2a2a2a2a2a2a2a2a2a"
          : "user@wallet.com",
        qrCode: `data:image/svg+xml,${encodeURIComponent(`
          <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="white"/>
            <rect x="10" y="10" width="180" height="180" fill="none" stroke="black" stroke-width="2"/>
            <text x="100" y="100" text-anchor="middle" font-family="monospace" font-size="12">QR Code</text>
            <text x="100" y="120" text-anchor="middle" font-family="monospace" font-size="8">${selectedCurrency}</text>
          </svg>
        `)}`,
        shareableLink: `https://wallet.app/receive/${selectedCurrency.toLowerCase()}/user123`
      };
      setReceiveData(mockReceiveData);
    }
  }, [selectedCurrency]);

  const selectedBalance = balances.find(b => b.currency === selectedCurrency);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy manually",
        variant: "destructive",
      });
    }
  };

  const shareReceiveLink = async () => {
    if (!receiveData) return;

    const shareData = {
      title: `Send me ${selectedCurrency}`,
      text: requestAmount 
        ? `Please send me ${requestAmount} ${selectedCurrency}`
        : `Send me ${selectedCurrency}`,
      url: receiveData.shareableLink,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await copyToClipboard(receiveData.shareableLink, "Receive link");
      }
    } catch (err) {
      console.error("Failed to share:", err);
    }
  };

  const downloadQRCode = () => {
    if (!receiveData) return;
    
    const link = document.createElement('a');
    link.href = receiveData.qrCode;
    link.download = `${selectedCurrency}-wallet-qr.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatCurrency = (amount: number, currency: string, symbol: string) => {
    if (currency === "BTC") {
      return `${symbol}${amount.toFixed(6)}`;
    }
    return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="min-h-screen bg-background p-4 max-w-2xl mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" onClick={() => navigate('/wallet')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Receive Money</h1>
            <p className="text-muted-foreground">Share your wallet address to receive funds</p>
          </div>
        </div>

        {/* Currency Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Select Currency</CardTitle>
            <CardDescription>Choose which currency you want to receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
            </div>

            {/* Optional Amount Request */}
            <div className="space-y-2">
              <Label htmlFor="amount">Request Amount (Optional)</Label>
              <div className="relative">
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={requestAmount}
                  onChange={(e) => setRequestAmount(e.target.value)}
                  className="pr-12"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  {selectedCurrency}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Optional: Specify an amount you'd like to receive
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Receive Details */}
        {receiveData && selectedBalance && (
          <div className="space-y-4">
            {/* QR Code */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <QrCode className="h-5 w-5" />
                    <span>QR Code</span>
                  </span>
                  <Badge variant="secondary">{selectedCurrency}</Badge>
                </CardTitle>
                <CardDescription>Scan to send {selectedCurrency} to your wallet</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-white rounded-lg border">
                    <img 
                      src={receiveData.qrCode} 
                      alt={`${selectedCurrency} QR Code`}
                      className="w-48 h-48"
                    />
                  </div>
                </div>
                {requestAmount && (
                  <div className="text-center">
                    <p className="text-lg font-semibold">
                      Requesting: {selectedBalance.symbol}{requestAmount}
                    </p>
                  </div>
                )}
                <Button variant="outline" onClick={downloadQRCode} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download QR Code
                </Button>
              </CardContent>
            </Card>

            {/* Wallet Address */}
            <Card>
              <CardHeader>
                <CardTitle>Wallet Address</CardTitle>
                <CardDescription>Share this address to receive {selectedCurrency}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input 
                    value={receiveData.walletAddress} 
                    readOnly 
                    className="font-mono text-sm"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => copyToClipboard(receiveData.walletAddress, "Wallet address")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {selectedCurrency === "BTC" ? "Bitcoin" : selectedCurrency === "ETH" ? "Ethereum" : "Email"} address
                </p>
              </CardContent>
            </Card>

            {/* Shareable Link */}
            <Card>
              <CardHeader>
                <CardTitle>Shareable Link</CardTitle>
                <CardDescription>Send this link to request payment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input 
                    value={receiveData.shareableLink} 
                    readOnly 
                    className="text-sm"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => copyToClipboard(receiveData.shareableLink, "Shareable link")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="default" onClick={shareReceiveLink} className="w-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Payment Request
                </Button>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>How to Receive</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <p>Share your wallet address or QR code with the sender</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <p>The sender scans the QR code or copies your wallet address</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <p>Funds will appear in your wallet once the transaction is confirmed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
