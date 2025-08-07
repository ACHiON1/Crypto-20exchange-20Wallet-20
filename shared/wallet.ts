export interface WalletBalance {
  currency: string;
  amount: number;
  symbol: string;
}

export interface Transaction {
  id: string;
  type: "send" | "receive" | "deposit" | "withdrawal";
  amount: number;
  currency: string;
  description: string;
  recipient?: string;
  sender?: string;
  date: string;
  status: "pending" | "completed" | "failed";
  fee?: number;
}

export interface Wallet {
  id: string;
  name: string;
  balances: WalletBalance[];
  totalBalanceUSD: number;
}

export interface SendMoneyRequest {
  recipientAddress: string;
  amount: number;
  currency: string;
  message?: string;
}

export interface ReceiveMoneyData {
  walletAddress: string;
  qrCode: string;
  shareableLink: string;
}

// Portfolio interfaces
export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  icon: string;
  balance: number;
  price: number;
  value: number;
  change24h: number;
  isPositive: boolean;
  chartData?: number[];
}

export interface PortfolioAllocation {
  symbol: string;
  percentage: number;
  color: string;
}

export interface Portfolio {
  totalBalance: number;
  totalChange24h: number;
  isPositiveChange: boolean;
  assets: CryptoAsset[];
  allocations: PortfolioAllocation[];
}

export interface WalletPortfolio extends Wallet {
  portfolio: Portfolio;
}
