import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Search, Filter, TrendingUp, TrendingDown, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Transaction } from "@shared/wallet";

export default function WalletTransactionsPage() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    // Mock data - replace with actual API calls
    const mockTransactions: Transaction[] = [
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
      },
      {
        id: "4",
        type: "send",
        amount: 150.75,
        currency: "EUR",
        description: "Online Purchase",
        recipient: "shop@example.com",
        date: "2024-01-10T14:20:00Z",
        status: "completed",
        fee: 2.25
      },
      {
        id: "5",
        type: "receive",
        amount: 0.001245,
        currency: "BTC",
        description: "Crypto Exchange",
        sender: "exchange@crypto.com",
        date: "2024-01-08T11:45:00Z",
        status: "completed"
      },
      {
        id: "6",
        type: "withdrawal",
        amount: 500.00,
        currency: "USD",
        description: "ATM Withdrawal",
        date: "2024-01-05T16:30:00Z",
        status: "failed"
      },
      {
        id: "7",
        type: "receive",
        amount: 75.00,
        currency: "USD",
        description: "Refund - Order #12345",
        sender: "support@retailer.com",
        date: "2024-01-03T13:15:00Z",
        status: "completed"
      },
      {
        id: "8",
        type: "send",
        amount: 320.40,
        currency: "EUR",
        description: "Rent Payment",
        recipient: "landlord@property.com",
        date: "2024-01-01T09:00:00Z",
        status: "completed",
        fee: 5.00
      }
    ];
    setTransactions(mockTransactions);
    setFilteredTransactions(mockTransactions);
  }, []);

  useEffect(() => {
    let filtered = transactions;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(transaction => 
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.sender?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.recipient?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by type
    if (filterType !== "all") {
      filtered = filtered.filter(transaction => transaction.type === filterType);
    }

    // Filter by status
    if (filterStatus !== "all") {
      filtered = filtered.filter(transaction => transaction.status === filterStatus);
    }

    setFilteredTransactions(filtered);
  }, [transactions, searchTerm, filterType, filterStatus]);

  const formatCurrency = (amount: number, currency: string) => {
    const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₿';
    if (currency === "BTC") {
      return `${symbol}${amount.toFixed(6)}`;
    }
    return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'receive':
      case 'deposit':
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      case 'send':
      case 'withdrawal':
        return <TrendingDown className="h-5 w-5 text-red-500" />;
      default:
        return <TrendingUp className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTransactionAmount = (transaction: Transaction) => {
    const prefix = transaction.type === 'receive' || transaction.type === 'deposit' ? '+' : '-';
    return `${prefix}${formatCurrency(transaction.amount, transaction.currency)}`;
  };

  const getTypeLabel = (type: Transaction['type']) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="min-h-screen bg-background p-4 max-w-6xl mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" onClick={() => navigate('/wallet')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">Transaction History</h1>
            <p className="text-muted-foreground">View and manage all your transactions</p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="Transaction Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="send">Send</SelectItem>
                  <SelectItem value="receive">Receive</SelectItem>
                  <SelectItem value="deposit">Deposit</SelectItem>
                  <SelectItem value="withdrawal">Withdrawal</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Transactions List */}
        <Card>
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Showing {filteredTransactions.length} of {transactions.length} transactions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {filteredTransactions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No transactions found matching your criteria.
              </div>
            ) : (
              filteredTransactions.map((transaction, index) => (
                <div key={transaction.id}>
                  <div className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="flex items-center space-x-4">
                      {getTransactionIcon(transaction.type)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="font-medium">{transaction.description}</p>
                          <Badge variant="outline" className="text-xs">
                            {getTypeLabel(transaction.type)}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>
                            {new Date(transaction.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                          {transaction.sender && (
                            <span>From: {transaction.sender}</span>
                          )}
                          {transaction.recipient && (
                            <span>To: {transaction.recipient}</span>
                          )}
                          {transaction.fee && (
                            <span>Fee: {formatCurrency(transaction.fee, transaction.currency)}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold text-lg ${
                        transaction.type === 'receive' || transaction.type === 'deposit' 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }`}>
                        {getTransactionAmount(transaction)}
                      </p>
                      <Badge 
                        variant={transaction.status === 'completed' ? 'default' : 
                                transaction.status === 'pending' ? 'secondary' : 'destructive'}
                        className="mt-1"
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                  {index < filteredTransactions.length - 1 && <Separator />}
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
