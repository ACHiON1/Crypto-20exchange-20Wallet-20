import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Eye,
  EyeOff,
  Send,
  ArrowDownToLine,
  Plus,
  TrendingUp,
  TrendingDown,
  ArrowLeft,
  ScanLine,
  Search,
  Filter,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wallet,
  Transaction,
  WalletPortfolio,
  CryptoAsset,
  PortfolioAllocation,
} from "@shared/wallet";

// Portfolio Chart Component
function PortfolioChart({
  allocations,
  totalBalance,
  totalChange,
}: {
  allocations: PortfolioAllocation[];
  totalBalance: number;
  totalChange: number;
}) {
  const circumference = 2 * Math.PI * 100;
  let currentAngle = 0;

  return (
    <div className="relative w-56 h-56 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 240 240">
        {allocations.map((allocation, index) => {
          const strokeDasharray = (allocation.percentage / 100) * circumference;
          const strokeDashoffset = circumference - currentAngle;
          currentAngle += strokeDasharray;

          return (
            <circle
              key={allocation.symbol}
              cx="120"
              cy="120"
              r="100"
              fill="none"
              stroke={allocation.color}
              strokeWidth="20"
              strokeDasharray={`${strokeDasharray} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Eye className="w-6 h-6 text-gray-500 mb-2" />
        <h3 className="text-base font-medium text-gray-900 mb-1">My Balance</h3>
        <p className="text-base font-medium text-gray-900">
          ${totalBalance.toLocaleString()}
        </p>
        <p
          className={`text-sm font-medium ${totalChange >= 0 ? "text-green-600" : "text-red-600"}`}
        >
          {totalChange >= 0 ? "+" : ""}
          {totalChange.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

// Asset Item Component
function AssetItem({ asset }: { asset: CryptoAsset }) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <img
            src={asset.icon}
            alt={asset.name}
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).nextElementSibling!.className =
                "flex";
            }}
          />
          <div className="hidden w-10 h-10 rounded-full bg-gray-200 items-center justify-center">
            <span className="text-xs font-medium">{asset.symbol}</span>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{asset.symbol}</h4>
          <p
            className={`text-sm ${asset.isPositive ? "text-green-600" : "text-red-600"}`}
          >
            ${asset.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Mini chart placeholder */}
      <div className="flex flex-col items-center justify-center w-20 h-9">
        <svg className="w-20 h-6" viewBox="0 0 80 24">
          <path
            d="M2 22 L10 18 L18 12 L26 8 L34 14 L42 6 L50 10 L58 4 L66 8 L74 2"
            fill="none"
            stroke={asset.isPositive ? "#2563eb" : "#f97316"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p
          className={`text-xs ${asset.isPositive ? "text-green-600" : "text-red-600"}`}
        >
          {asset.isPositive ? "+" : ""}
          {asset.change24h.toFixed(2)}%
        </p>
      </div>

      <div className="text-right">
        <p className="font-medium text-gray-900">{asset.balance.toFixed(6)}</p>
        <p
          className={`text-sm ${asset.isPositive ? "text-green-600" : "text-red-600"}`}
        >
          ${asset.value.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default function WalletPage() {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(true);
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [portfolio, setPortfolio] = useState<WalletPortfolio | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>(
    [],
  );
  const [activeTab, setActiveTab] = useState("portfolio");

  useEffect(() => {
    // Mock portfolio data
    const mockPortfolio: WalletPortfolio = {
      id: "1",
      name: "My Wallet",
      balances: [
        { currency: "USD", amount: 2450.75, symbol: "$" },
        { currency: "EUR", amount: 1890.2, symbol: "€" },
        { currency: "BTC", amount: 0.05423, symbol: "₿" },
      ],
      totalBalanceUSD: 2760.23,
      portfolio: {
        totalBalance: 2760.23,
        totalChange24h: 2.6,
        isPositiveChange: true,
        assets: [
          {
            id: "btc",
            symbol: "BTC",
            name: "Bitcoin",
            icon: "https://api.builder.io/api/v1/image/assets/TEMP/91fe24354d47308debd898ad2f9bb7e7aa95f34b?width=80",
            balance: 0.042148,
            price: 30113.8,
            value: 1270.1,
            change24h: 2.76,
            isPositive: true,
          },
          {
            id: "eth",
            symbol: "ETH",
            name: "Ethereum",
            icon: "https://api.builder.io/api/v1/image/assets/TEMP/a19b2c6b9ec5bcbfa301372d4fb8139f3d026e2f?width=80",
            balance: 0.014914,
            price: 1801.1,
            value: 270.1,
            change24h: -1.02,
            isPositive: false,
          },
          {
            id: "atom",
            symbol: "ATOM",
            name: "Cosmos",
            icon: "https://api.builder.io/api/v1/image/assets/TEMP/2438814c6b5d6925c34a48e1e9c2594e0a122f0a?width=80",
            balance: 108.427,
            price: 8.87,
            value: 961.75,
            change24h: 2.05,
            isPositive: true,
          },
          {
            id: "cro",
            symbol: "CRO",
            name: "Cronos",
            icon: "https://api.builder.io/api/v1/image/assets/TEMP/40282d83e973bdcfe31f011feb494fcbd379d074?width=80",
            balance: 1616.914,
            price: 0.11765,
            value: 190.23,
            change24h: 2.38,
            isPositive: true,
          },
          {
            id: "ada1",
            symbol: "ADA",
            name: "Cardano",
            icon: "https://api.builder.io/api/v1/image/assets/TEMP/6f98a84b320ef6c371ce0838dd841d66072dabf4?width=80",
            balance: 138.8775,
            price: 0.49,
            value: 68.05,
            change24h: -1.24,
            isPositive: false,
          },
          {
            id: "ada2",
            symbol: "ADA",
            name: "Cardano",
            icon: "https://api.builder.io/api/v1/image/assets/TEMP/4dc4ae109254fcad6a861a5bd006ed0b7cf9a93a?width=80",
            balance: 1,
            price: 1.02,
            value: 1.02,
            change24h: 0.01,
            isPositive: true,
          },
        ],
        allocations: [
          { symbol: "BTC", percentage: 46, color: "#FFC457" },
          { symbol: "ATOM", percentage: 35, color: "#1DC198" },
          { symbol: "ETH", percentage: 10, color: "#0091C0" },
          { symbol: "CRO", percentage: 7, color: "#745DE8" },
          { symbol: "ADA", percentage: 2, color: "#FF58A1" },
        ],
      },
    };

    setPortfolio(mockPortfolio);
    setWallet(mockPortfolio);

    setRecentTransactions([
      {
        id: "1",
        type: "receive",
        amount: 250.0,
        currency: "USD",
        description: "Payment from John Doe",
        sender: "john.doe@email.com",
        date: "2024-01-15T10:30:00Z",
        status: "completed",
      },
      {
        id: "2",
        type: "send",
        amount: 89.5,
        currency: "USD",
        description: "Coffee & Groceries",
        recipient: "merchant@store.com",
        date: "2024-01-14T15:45:00Z",
        status: "completed",
        fee: 1.5,
      },
      {
        id: "3",
        type: "deposit",
        amount: 1000.0,
        currency: "USD",
        description: "Bank Transfer",
        date: "2024-01-12T09:15:00Z",
        status: "pending",
      },
    ]);
  }, []);

  const formatCurrency = (amount: number, currency: string, symbol: string) => {
    if (currency === "BTC") {
      return `${symbol}${amount.toFixed(6)}`;
    }
    return `${symbol}${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "receive":
      case "deposit":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "send":
      case "withdrawal":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <TrendingUp className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTransactionAmount = (transaction: Transaction) => {
    const prefix =
      transaction.type === "receive" || transaction.type === "deposit"
        ? "+"
        : "-";
    const symbol =
      transaction.currency === "USD"
        ? "$"
        : transaction.currency === "EUR"
          ? "€"
          : "₿";
    return `${prefix}${formatCurrency(transaction.amount, transaction.currency, symbol)}`;
  };

  if (!wallet || !portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b">
        <button className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-lg font-medium text-gray-900">Wallet</h1>
        <button className="p-2">
          <ScanLine className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="px-4 py-6">
        {/* Cards/Portfolio Toggle */}
        <div className="bg-gray-200 rounded-lg p-1 mb-6">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => setActiveTab("cards")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "cards"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "portfolio"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Portfolio
            </button>
          </div>
        </div>

        {activeTab === "portfolio" ? (
          <>
            {/* Portfolio Allocation Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {portfolio.portfolio.allocations.map((allocation) => (
                <div
                  key={allocation.symbol}
                  className="px-3 py-1 rounded-lg text-white text-sm font-medium"
                  style={{ backgroundColor: allocation.color }}
                >
                  {allocation.symbol} {allocation.percentage}%
                </div>
              ))}
            </div>

            {/* Portfolio Chart */}
            <div className="mb-8">
              <PortfolioChart
                allocations={portfolio.portfolio.allocations}
                totalBalance={portfolio.portfolio.totalBalance}
                totalChange={portfolio.portfolio.totalChange24h}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6 mb-8">
              <div className="flex flex-col items-center">
                <button className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                  <Plus className="w-5 h-5 text-white" />
                </button>
                <span className="text-sm text-gray-900">Deposit</span>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-white" />
                </button>
                <span className="text-sm text-gray-900">Send</span>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                  <TrendingDown className="w-5 h-5 text-white" />
                </button>
                <span className="text-sm text-gray-900">Receive</span>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                  <ArrowDownToLine className="w-5 h-5 text-white" />
                </button>
                <span className="text-sm text-gray-900">Withdraw</span>
              </div>
            </div>

            {/* Assets List */}
            <div className="bg-white rounded-t-3xl shadow-sm">
              <div className="w-10 h-1 bg-gray-900 rounded-full mx-auto mt-2 mb-4"></div>

              {/* Assets Header */}
              <div className="flex items-center justify-between px-4 mb-4">
                <h2 className="text-base font-medium text-gray-900">
                  My Assets
                </h2>
                <div className="flex items-center gap-2">
                  <Search className="w-6 h-6 text-gray-900" />
                  <Filter className="w-6 h-6 text-gray-900" />
                </div>
              </div>

              {/* Assets List */}
              <div className="divide-y divide-gray-100">
                {portfolio.portfolio.assets.map((asset, index) => (
                  <AssetItem key={`${asset.id}-${index}`} asset={asset} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Cards View - Original wallet content */}
            <Card className="border-2 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Total Balance
                  <Badge variant="secondary">USD</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-foreground mb-4">
                  {showBalance
                    ? `$${wallet.totalBalanceUSD.toLocaleString("en-US", { minimumFractionDigits: 2 })}`
                    : "••••••"}
                </div>
                <div className="flex gap-3">
                  <Button
                    className="flex-1"
                    onClick={() => navigate("/wallet/send")}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => navigate("/wallet/receive")}
                  >
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {wallet.balances.map((balance, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {balance.currency}
                      </span>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">
                          {balance.currency.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="text-2xl font-bold">
                      {showBalance
                        ? formatCurrency(
                            balance.amount,
                            balance.currency,
                            balance.symbol,
                          )
                        : "••••"}
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
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate("/wallet/transactions")}
                  >
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
                          <p className="font-medium">
                            {transaction.description}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(transaction.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-semibold ${
                            transaction.type === "receive" ||
                            transaction.type === "deposit"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {getTransactionAmount(transaction)}
                        </p>
                        <Badge
                          variant={
                            transaction.status === "completed"
                              ? "default"
                              : transaction.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                          className="text-xs"
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                    {index < recentTransactions.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          <div className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 text-gray-500 mb-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xs text-gray-500">Home</span>
          </div>
          <div className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 text-gray-500 mb-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M8 6l4 4 4-4m-8 13l4-4 4 4" />
              </svg>
            </div>
            <span className="text-xs text-gray-500">Trade</span>
          </div>
          <div className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 text-gray-500 mb-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 19c-5 0-8-3-8-8s3-8 8-8 8 3 8 8-3 8-8 8z" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <span className="text-xs text-gray-500">Market</span>
          </div>
          <div className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 text-gray-500 mb-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5L12 2z" />
              </svg>
            </div>
            <span className="text-xs text-gray-500">Favorites</span>
          </div>
          <div className="flex flex-col items-center py-2 px-4">
            <div className="w-6 h-6 text-blue-600 mb-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 6.4V6.4C3.5 5.07 4.57 4 5.9 4h13.7c.18 0 .26 0 .33.02a.5.5 0 01.35.33c.02.07.02.16.02.33V5.68c0 1.04 0 1.56-.13 1.98a2.5 2.5 0 01-1.15 1.15c-.42.13-.94.13-1.98.13H16M3 6.4V6.4C3.5 7.73 4.57 8.8 5.9 8.8h13.6c.94 0 1.41 0 1.71.29.29.29.29.77.29 1.71v2.8M3 6.4v11.6c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59h12c.94 0 1.41 0 1.71-.29.29-.29.29-.77.29-1.71v-1.6M21.5 18.4h-2.8c-.94 0-1.41 0-1.71-.29-.29-.29-.29-.77-.29-1.71v-.8c0-.94 0-1.41.29-1.71.29-.29.77-.29 1.71-.29h2.8m0 4.8v-4.8" />
              </svg>
            </div>
            <span className="text-xs text-blue-600 font-medium">Wallet</span>
          </div>
        </div>
        <div className="h-5 bg-white flex justify-center">
          <div className="w-32 h-1 bg-gray-900 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}
