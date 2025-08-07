import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Send, ArrowDownToLine, Plus, TrendingUp, TrendingDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet, Transaction } from "@shared/wallet";

export default function WalletPage() {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(true);
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Mock data - replace with actual API calls
    setWallet({
      id: "1",
      name: "My Wallet",
      balances: [
        { currency: "USD", amount: 2450.75, symbol: "$" },
        { currency: "EUR", amount: 1890.20, symbol: "€" },
        { currency: "BTC", amount: 0.05423, symbol: "₿" },
      ],
      totalBalanceUSD: 5240.95
    });

    setRecentTransactions([
      {
        id: "1",
        type: "receive",
        amount: 250.00,
        currency: "USD",
        description: "Payment from John Doe",
        sender: "john.doe@email.com",
        date: "2024-01-15T10:30:00Z",
        status: "completed"
      },
      {
        id: "2",
        type: "send",
        amount: 89.50,
        currency: "USD",
        description: "Coffee & Groceries",
        recipient: "merchant@store.com",
        date: "2024-01-14T15:45:00Z",
        status: "completed",
        fee: 1.50
      },
      {
        id: "3",
        type: "deposit",
        amount: 1000.00,
        currency: "USD",
        description: "Bank Transfer",
        date: "2024-01-12T09:15:00Z",
        status: "pending"
      }
    ]);
  }, []);

  const formatCurrency = (amount: number, currency: string, symbol: string) => {
    if (currency === "BTC") {
      return `${symbol}${amount.toFixed(6)}`;
    }
    return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'receive':
      case 'deposit':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'send':
      case 'withdrawal':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <TrendingUp className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTransactionAmount = (transaction: Transaction) => {
    const prefix = transaction.type === 'receive' || transaction.type === 'deposit' ? '+' : '-';
    const symbol = transaction.currency === 'USD' ? '$' : transaction.currency === 'EUR' ? '€' : '₿';
    return `${prefix}${formatCurrency(transaction.amount, transaction.currency, symbol)}`;
  };

  if (!wallet) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-4 max-w-6xl mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Wallet</h1>
            <p className="text-muted-foreground">Manage your finances</p>
          </div>
          <Button variant="outline" size="icon" onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>

        {/* Total Balance Card */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Total Balance
              <Badge variant="secondary">USD</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-foreground mb-4">
              {showBalance ? `$${wallet.totalBalanceUSD.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••••'}
            </div>
            <div className="flex gap-3">
              <Button className="flex-1" onClick={() => navigate('/wallet/send')}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => navigate('/wallet/receive')}>
                <ArrowDownToLine className="h-4 w-4 mr-2" />
                Receive
              </Button>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Balances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wallet.balances.map((balance, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">{balance.currency}</span>
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">{balance.currency.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-2xl font-bold">
                  {showBalance ? formatCurrency(balance.amount, balance.currency, balance.symbol) : '••••'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Transactions
              <Button variant="ghost" size="sm" onClick={() => navigate('/wallet/transactions')}>
                View All
              </Button>
            </CardTitle>
            <CardDescription>Your latest activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <div key={transaction.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getTransactionIcon(transaction.type)}
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(transaction.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === 'receive' || transaction.type === 'deposit' 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {getTransactionAmount(transaction)}
                    </p>
                    <Badge 
                      variant={transaction.status === 'completed' ? 'default' : 
                              transaction.status === 'pending' ? 'secondary' : 'destructive'}
                      className="text-xs"
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
                {index < recentTransactions.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
