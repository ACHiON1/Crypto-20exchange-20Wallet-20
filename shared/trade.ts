export interface MarketData {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  price: number;
  change24h: number;
  changePercent24h: number;
  volume24h: number;
  high24h: number;
  low24h: number;
}

export interface OrderBookEntry {
  price: number;
  amount: number;
}

export interface OrderBook {
  symbol: string;
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
}

export type OrderType = 'market' | 'limit' | 'stop';
export type OrderSide = 'buy' | 'sell';
export type OrderStatus = 'pending' | 'filled' | 'cancelled' | 'partial';

export interface Order {
  id: string;
  symbol: string;
  type: OrderType;
  side: OrderSide;
  amount: number;
  price: number;
  filled: number;
  remaining: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  fee?: number;
  total: number;
}

export interface PlaceOrderRequest {
  symbol: string;
  type: OrderType;
  side: OrderSide;
  amount: number;
  price?: number;
}

export interface TradingPair {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  priceScale: number;
  quantityScale: number;
  minOrderSize: number;
  maxOrderSize: number;
  tickSize: number;
}

export interface UserBalance {
  asset: string;
  available: number;
  locked: number;
  total: number;
}

export interface TradeHistory {
  id: string;
  symbol: string;
  side: OrderSide;
  amount: number;
  price: number;
  fee: number;
  timestamp: string;
}
