export interface WalletBalance {
  currency: string;
  amount: number;
  symbol: string;
}

export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'deposit' | 'withdrawal';
  amount: number;
  currency: string;
  description: string;
  recipient?: string;
  sender?: string;
  date: string;
  status: 'pending' | 'completed' | 'failed';
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
