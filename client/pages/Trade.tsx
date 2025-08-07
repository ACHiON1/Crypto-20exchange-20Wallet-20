import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from "react-router-dom";
import type { OrderSide, OrderType } from "../../shared/trade";

interface OrderBookEntry {
  price: number;
  amount: number;
}

export default function TradePage() {
  const navigate = useNavigate();
  const [currentPair] = useState("BTC/USDT");
  const [currentPrice] = useState(30113.80);
  const [priceChange] = useState(2.76);
  const [orderSide, setOrderSide] = useState<OrderSide>("buy");
  const [orderType] = useState<OrderType>("limit");
  const [available] = useState(1000);
  const [priceInput, setPriceInput] = useState("30,113.80");
  const [amountInput, setAmountInput] = useState("0.04014");
  const [totalInput, setTotalInput] = useState("1000");
  const [sliderValue, setSliderValue] = useState([100]);
  const [hideOtherPairs, setHideOtherPairs] = useState(true);

  // Mock order book data
  const sellOrders: OrderBookEntry[] = [
    { price: 30113.84, amount: 1.76676 },
    { price: 30114.84, amount: 2.20046 },
    { price: 30113.97, amount: 9.25320 },
    { price: 30113.87, amount: 6.98019 },
    { price: 30114.71, amount: 6.14111 },
    { price: 30114.22, amount: 2.21189 },
    { price: 30114.41, amount: 3.00018 },
    { price: 30114.36, amount: 9.92881 },
    { price: 30113.89, amount: 1.18708 },
    { price: 30113.88, amount: 4.49994 },
  ];

  const buyOrders: OrderBookEntry[] = [
    { price: 30113.79, amount: 9.70443 },
    { price: 30113.70, amount: 9.29631 },
    { price: 30113.66, amount: 6.28200 },
    { price: 30112.45, amount: 2.18599 },
    { price: 30112.95, amount: 2.74875 },
    { price: 30113.55, amount: 7.14339 },
    { price: 30113.75, amount: 1.93398 },
    { price: 30113.66, amount: 9.43359 },
    { price: 30113.80, amount: 1.16627 },
    { price: 30113.80, amount: 2.93046 },
  ];

  const mockOrders = [
    {
      id: "1",
      pair: "XRP/USDT",
      type: "Sell Limit",
      date: "2022/07/01 08:33:45",
      price: "1.912",
      amount: "55.5",
      filled: "0.00%",
      total: "≈106.116 USDT"
    },
    {
      id: "2",
      pair: "THETA/USDT",
      type: "Sell Limit",
      date: "2022/07/01 08:20:15",
      price: "8.9",
      amount: "83.03",
      filled: "0.00%",
      total: "≈738.967 USDT"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Header */}
      <div className="bg-[#F8F9FC] px-4 py-3">
        {/* Status Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-medium text-[#11183C]">9:41</div>
          <div className="flex items-center space-x-1">
            {/* Signal Icons */}
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z" fill="#11183C"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z" fill="#11183C"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z" fill="#11183C"/>
            </svg>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path d="M8.13295 8.93945C8.77245 8.93945 9.39384 9.1075 9.94135 9.42792L10.1632 9.55775C10.3314 9.65617 10.3609 9.88652 10.2231 10.024L8.32897 11.9129C8.21263 12.0289 8.02401 12.0289 7.90767 11.9129L6.02576 10.0362C5.88847 9.89927 5.91709 9.67009 6.08385 9.57094L6.3032 9.44051C6.85574 9.11198 7.48501 8.93945 8.13295 8.93945Z" fill="#11183C"/>
              <path d="M8.13267 5.46973C9.7235 5.46973 11.2509 5.99747 12.4952 6.97479L12.6711 7.11291C12.8113 7.22303 12.8236 7.43052 12.6974 7.55636L11.5666 8.684C11.462 8.7883 11.2965 8.80028 11.1779 8.71214L11.0401 8.60969C10.1997 7.98511 9.18633 7.65008 8.13267 7.65008C7.07251 7.65008 6.05323 7.98928 5.21005 8.62103L5.07207 8.72441C4.95346 8.81327 4.78737 8.80157 4.68247 8.69696L3.5521 7.56974C3.42618 7.44417 3.43813 7.2372 3.57769 7.12687L3.75254 6.98864C4.99979 6.00261 6.53416 5.46973 8.13267 5.46973Z" fill="#11183C"/>
              <path d="M8.13272 2C10.6574 2 13.0717 2.89057 14.9828 4.52294L15.1459 4.66228C15.2777 4.77488 15.2855 4.97558 15.1627 5.09797L14.0356 6.22195C13.9264 6.33084 13.7519 6.33847 13.6336 6.23952L13.494 6.12283C11.9894 4.86472 10.1035 4.18035 8.13272 4.18035C6.15517 4.18035 4.26327 4.86943 2.75641 6.13541L2.6168 6.2527C2.4985 6.3521 2.32359 6.34466 2.2142 6.23557L1.08726 5.11176C0.964693 4.98954 0.972236 4.78918 1.10365 4.67646L1.26614 4.53708C3.17953 2.89589 5.60056 2 8.13272 2Z" fill="#11183C"/>
            </svg>
            <svg width="25" height="14" viewBox="0 0 25 14" fill="none">
              <path d="M24 5C24.5523 5 25 5.44772 25 6V8C25 8.55228 24.5523 9 24 9V5Z" fill="#696F8C"/>
              <rect x="2" y="3" width="19" height="8" rx="1" fill="#11183C"/>
            </svg>
          </div>
        </div>

        {/* Navigation Header */}
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.5 3L6.5 12L15.5 21" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-lg font-medium text-[#11183C]">Trade</h1>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 4C16.6051 4 18.4077 4 18.9842 4.35689C19.2337 4.51139 19.448 4.70992 19.6148 4.94115C20 5.47527 20 6.2188 20 7.70588V17.7647C20 19.7612 20 20.7595 19.3305 21.3798C18.6611 22 17.5836 22 15.4286 22H8.57143C6.41644 22 5.33894 22 4.66947 21.3798C4 20.7595 4 19.7612 4 17.7647V7.70588C4 6.2188 4 5.47527 4.38521 4.94115C4.55197 4.70992 4.76626 4.51139 5.01584 4.35689C5.59235 4 7.3949 4 9 4" stroke="#696F8C" strokeWidth="1.6"/>
            <path d="M9 4C9 2.89543 9.89543 2 11 2H13C14.1046 2 15 2.89543 15 4C15 5.10457 14.1046 6 13 6H11C9.89543 6 9 5.10457 9 4Z" stroke="#696F8C" strokeWidth="1.6"/>
            <path d="M9 12L15 12" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M9 15L13 15" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Trading Type Tabs */}
      <div className="px-4 mb-4">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button className="flex-1 bg-white rounded-md py-2 px-4 text-sm font-medium text-[#11183C] shadow-sm">
            Spot
          </button>
          <button className="flex-1 py-2 px-4 text-sm font-medium text-[#696F8C]">
            Margin
          </button>
          <button className="flex-1 py-2 px-4 text-sm font-medium text-[#696F8C]">
            Grid
          </button>
          <button className="flex-1 py-2 px-4 text-sm font-medium text-[#696F8C]">
            Fiat
          </button>
        </div>
      </div>

      {/* Trading Pair and Price */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-base font-medium text-[#11183C]">{currentPair}</span>
            <svg width="7" height="6" viewBox="0 0 7 6" fill="none">
              <path d="M3.5 5.5L0.468911 0.25L6.53109 0.25L3.5 5.5Z" fill="#11183C"/>
            </svg>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-auto">
            <path d="M20 6L14.7071 11.2929C14.3166 11.6834 13.6834 11.6834 13.2929 11.2929L11.7071 9.70711C11.3166 9.31658 10.6834 9.31658 10.2929 9.70711L6 14" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 3V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H21" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-base font-medium text-[#098C26]">{currentPrice.toLocaleString()}</span>
          <span className="text-sm text-[#696F8C]">≈${currentPrice.toLocaleString()}</span>
          <span className="text-sm text-[#098C26]">+{priceChange}%</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-20">
        {/* Order Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <div className="text-xs text-[#696F8C]">Order bk No.</div>
            <div className="text-xs text-[#696F8C]">Unit</div>
          </div>
          <div className="flex gap-2">
            <Card className="p-2">
              <div className="flex items-center gap-1">
                <span className="text-sm text-[#11183C]">10</span>
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none">
                  <path d="M3.5 5.5L0.468911 0.25L6.53109 0.25L3.5 5.5Z" fill="#11183C"/>
                </svg>
              </div>
            </Card>
            <Card className="p-2">
              <div className="flex items-center gap-1">
                <span className="text-sm text-[#11183C]">0.00001</span>
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none">
                  <path d="M3.5 5.5L0.468911 0.25L6.53109 0.25L3.5 5.5Z" fill="#11183C"/>
                </svg>
              </div>
            </Card>
          </div>
        </div>

        {/* Order Book and Trading Form Container */}
        <div className="space-y-4">
          {/* Order Book Header */}
          <div className="flex justify-between text-xs text-[#696F8C]">
            <span>Price</span>
            <span>Amount</span>
          </div>

          {/* Sell Orders */}
          <div className="space-y-1">
            {sellOrders.map((order, index) => (
              <div key={index} className="flex justify-between text-xs relative">
                <div 
                  className="absolute right-0 top-0 h-full bg-[#CD0000] opacity-25"
                  style={{ width: `${(order.amount / 10) * 100}%` }}
                />
                <span className="text-[#CD0000] relative z-10">{order.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                <span className="text-[#11183C] relative z-10">{order.amount.toFixed(5)}</span>
              </div>
            ))}
          </div>

          {/* Buy Orders */}
          <div className="space-y-1">
            {buyOrders.map((order, index) => (
              <div key={index} className="flex justify-between text-xs relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-[#098C26] opacity-25"
                  style={{ width: `${(order.amount / 10) * 100}%` }}
                />
                <span className="text-[#098C26] relative z-10">{order.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                <span className="text-[#11183C] relative z-10">{order.amount.toFixed(5)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trading Form */}
        <div className="mt-6 space-y-4">
          {/* Buy/Sell Toggle */}
          <div className="flex bg-white rounded-lg p-1 shadow-sm">
            <button 
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md ${
                orderSide === 'buy' 
                  ? 'bg-[#2F66F6] text-white shadow-sm' 
                  : 'text-[#696F8C]'
              }`}
              onClick={() => setOrderSide('buy')}
            >
              Buy
            </button>
            <button 
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md ${
                orderSide === 'sell' 
                  ? 'bg-[#2F66F6] text-white shadow-sm' 
                  : 'text-[#696F8C]'
              }`}
              onClick={() => setOrderSide('sell')}
            >
              Sell
            </button>
          </div>

          {/* Order Type */}
          <Card className="p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#11183C]">Limit</span>
              <svg width="7" height="6" viewBox="0 0 7 6" fill="none">
                <path d="M3.5 5.5L0.468911 0.25L6.53109 0.25L3.5 5.5Z" fill="#11183C"/>
              </svg>
            </div>
          </Card>

          {/* Available Balance */}
          <div className="text-xs text-[#696F8C]">
            Available: <span className="text-[#11183C]">{available} USDT</span>
          </div>

          {/* Price Input */}
          <Card className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3335 8L2.66683 8" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                <Input 
                  value={priceInput}
                  onChange={(e) => setPriceInput(e.target.value)}
                  className="border-0 p-0 text-sm"
                  placeholder="Price"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#11183C]">USDT</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2.66699L8 13.3337" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M13.3335 8L2.66683 8" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </Card>

          {/* Amount Input */}
          <Card className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3335 8L2.66683 8" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                <Input 
                  value={amountInput}
                  onChange={(e) => setAmountInput(e.target.value)}
                  className="border-0 p-0 text-sm"
                  placeholder="Amount"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#11183C]">BTC</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2.66699L8 13.3337" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M13.3335 8L2.66683 8" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </Card>

          {/* Percentage Slider */}
          <div className="space-y-2">
            <div className="text-sm text-[#11183C]">{sliderValue[0]}%</div>
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={25}
              className="w-full"
            />
          </div>

          {/* Total Input */}
          <Card className="p-3">
            <div className="flex items-center justify-between">
              <Input 
                value={totalInput}
                onChange={(e) => setTotalInput(e.target.value)}
                className="border-0 p-0 text-sm"
                placeholder="Total"
              />
              <span className="text-sm text-[#11183C]">USDT</span>
            </div>
          </Card>

          {/* Place Order Button */}
          <Button 
            className={`w-full h-12 text-base font-medium ${
              orderSide === 'buy' 
                ? 'bg-[#2F66F6] hover:bg-[#2F66F6]/90' 
                : 'bg-[#CD0000] hover:bg-[#CD0000]/90'
            }`}
          >
            {orderSide === 'buy' ? 'Buy BTC' : 'Sell BTC'}
          </Button>
        </div>

        {/* Open Orders Section */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-[#11183C]">Open Orders</h3>
            <Button variant="ghost" className="text-[#2F66F6] p-0 h-auto">
              More
            </Button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" className="text-xs text-[#696F8C] p-2 h-auto bg-white rounded shadow-sm">
              Cancel all
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox 
              checked={hideOtherPairs}
              onCheckedChange={setHideOtherPairs}
              className="data-[state=checked]:bg-[#2F66F6]"
            />
            <span className="text-sm text-[#11183C]">Hide Other Pairs</span>
          </div>

          {!hideOtherPairs && (
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <Card key={order.id} className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-base text-[#11183C]">{order.pair}</span>
                      <span className="text-xs text-[#696F8C]">{order.date}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-base text-[#11183C]">
                        <span className="text-[#CD0000]">Sell</span> Limit
                      </span>
                      <Button variant="ghost" className="text-xs text-[#696F8C] p-2 h-auto bg-white rounded shadow-sm">
                        Cancel
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-[#696F8C]">Price</span>
                          <span className="text-sm text-[#11183C]">{order.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#696F8C]">Amount</span>
                          <span className="text-sm text-[#11183C]">{order.amount}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-[#696F8C]">Filled</span>
                          <span className="text-sm text-[#11183C]">{order.filled}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#696F8C]">Total</span>
                          <span className="text-sm text-[#11183C]">{order.total}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#D7D9E4]">
        <div className="flex">
          <Button
            variant="ghost"
            className="flex-1 flex-col space-y-1 h-16 text-[#696F8C]"
            onClick={() => navigate("/home")}
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M14.9143 23C14.9143 23.4418 15.2725 23.8 15.7143 23.8C16.1561 23.8 16.5143 23.4418 16.5143 23H14.9143ZM8.48571 23C8.48571 23.4418 8.84389 23.8 9.28571 23.8C9.72754 23.8 10.0857 23.4418 10.0857 23H8.48571Z" fill="#696F8C"/>
            </svg>
            <span className="text-xs">Home</span>
          </Button>
          <Button
            variant="ghost"
            className="flex-1 flex-col space-y-1 h-16 text-[#2F66F6]"
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M8.5 6L4.5 10H20.5M16.5 19L20.5 15H3.5" stroke="#2F66F6" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <span className="text-xs">Trade</span>
          </Button>
          <Button
            variant="ghost"
            className="flex-1 flex-col space-y-1 h-16 text-[#696F8C]"
            onClick={() => navigate("/market")}
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M10.3268 12.482L9.6612 12.0382L10.3268 12.482Z" fill="#696F8C"/>
            </svg>
            <span className="text-xs">Market</span>
          </Button>
          <Button
            variant="ghost"
            className="flex-1 flex-col space-y-1 h-16 text-[#696F8C]"
            onClick={() => navigate("/favorites")}
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M10.348 6.34569C11.2599 4.11523 11.7159 3 12.5 3C13.2841 3 13.7401 4.11523 14.652 6.34569L14.6945 6.44955C15.2097 7.70965 15.4673 8.3397 15.9923 8.72265C16.5173 9.1056 17.2065 9.16616 18.5848 9.28726L18.834 9.30916C21.0899 9.50737 22.2178 9.60647 22.4592 10.3105C22.7005 11.0145 21.8629 11.7622 20.1876 13.2576L19.6284 13.7566C18.7804 14.5136 18.3563 14.8921 18.1587 15.3881C18.1218 15.4807 18.0912 15.5755 18.067 15.6719C17.937 16.1891 18.0612 16.7381 18.3096 17.8363L18.3869 18.1781C18.8433 20.1962 19.0715 21.2053 18.673 21.6405C18.5241 21.8032 18.3306 21.9203 18.1157 21.9778C17.5404 22.1318 16.7237 21.4789 15.0902 20.173C14.0176 19.3156 13.4813 18.8868 12.8656 18.7904C12.6234 18.7524 12.3766 18.7524 12.1344 18.7904C11.5187 18.8868 10.9824 19.3156 9.90979 20.173C8.27633 21.4789 7.45961 22.1318 6.88434 21.9778C6.66938 21.9203 6.47587 21.8032 6.32698 21.6405C5.92854 21.2053 6.15674 20.1962 6.61314 18.1781L6.69045 17.8363C6.93879 16.7381 7.06296 16.1891 6.93305 15.6719C6.90881 15.5755 6.87817 15.4807 6.8413 15.3881C6.64366 14.8921 6.21963 14.5136 5.37156 13.7566L4.81243 13.2576C3.13713 11.7622 2.29948 11.0145 2.54083 10.3105C2.78218 9.60647 3.91011 9.50737 6.16598 9.30916L6.41516 9.28726C7.79352 9.16616 8.4827 9.1056 9.00771 8.72265C9.53272 8.3397 9.79032 7.70965 10.3055 6.44955L10.348 6.34569Z" stroke="#696F8C" strokeWidth="1.6"/>
            </svg>
            <span className="text-xs">Favorites</span>
          </Button>
          <Button
            variant="ghost"
            className="flex-1 flex-col space-y-1 h-16 text-[#696F8C]"
            onClick={() => navigate("/wallet")}
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.5 6.4V6.4C3.5 5.07452 4.57452 4 5.9 4L19.6143 4C19.7871 4 19.8735 4 19.9438 4.02112C20.1047 4.06944 20.2306 4.19531 20.2789 4.3562C20.3 4.42655 20.3 4.51294 20.3 4.68571V4.68571C20.3 5.72238 20.3 6.24071 20.1733 6.6628C19.8834 7.62813 19.1281 8.38338 18.1628 8.67325C17.7407 8.8 17.2224 8.8 16.1857 8.8H16.1M3.5 6.4V6.4C3.5 7.72548 4.57452 8.8 5.9 8.8L19.5 8.8C20.4428 8.8 20.9142 8.8 21.2071 9.09289C21.5 9.38579 21.5 9.85719 21.5 10.8L21.5 13.6M3.5 6.4L3.5 18C3.5 19.8856 3.5 20.8284 4.08579 21.4142C4.67157 22 5.61438 22 7.5 22L19.5 22C20.4428 22 20.9142 22 21.2071 21.7071C21.5 21.4142 21.5 20.9428 21.5 20V18.4M21.5 18.4H18.7C17.7572 18.4 17.2858 18.4 16.9929 18.1071C16.7 17.8142 16.7 17.3428 16.7 16.4V15.6C16.7 14.6572 16.7 14.1858 16.9929 13.8929C17.2858 13.6 17.7572 13.6 18.7 13.6H21.5M21.5 18.4V13.6" stroke="#696F8C" strokeWidth="1.3"/>
            </svg>
            <span className="text-xs">Wallet</span>
          </Button>
        </div>

        {/* Home Indicator */}
        <div className="flex items-center justify-center h-[34px]">
          <div className="w-[134px] h-[5px] bg-[#11183C] rounded-[10px]"></div>
        </div>
      </div>
    </div>
  );
}
