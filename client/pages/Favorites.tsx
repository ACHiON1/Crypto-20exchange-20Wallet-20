import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function FavoritesPage() {
  const navigate = useNavigate();

  const favoriteCoins = [
    { symbol: "BTC/USDT", price: "30,113.80", change: "+2.76%", volume: "394,897,432.26", isPositive: true },
    { symbol: "ETH/USDT", price: "1,892.45", change: "-1.23%", volume: "198,234,567.89", isPositive: false },
    { symbol: "SOL/USDT", price: "40.11", change: "+3.75%", volume: "150,897,992.26", isPositive: true },
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
          <h1 className="text-lg font-medium text-[#11183C]">Favorites</h1>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="2" stroke="#696F8C" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="2" stroke="#696F8C" strokeWidth="1.6" />
            <circle cx="12" cy="18" r="2" stroke="#696F8C" strokeWidth="1.6" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-20">
        {favoriteCoins.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-4 px-2">
              <span className="text-sm text-[#696F8C]">Name</span>
              <span className="text-sm text-[#696F8C]">Last Price</span>
              <span className="text-sm text-[#696F8C]">24h Change</span>
            </div>

            <div className="space-y-2">
              {favoriteCoins.map((item, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M10.348 6.34569C11.2599 4.11523 11.7159 3 12.5 3C13.2841 3 13.7401 4.11523 14.652 6.34569L14.6945 6.44955C15.2097 7.70965 15.4673 8.3397 15.9923 8.72265C16.5173 9.1056 17.2065 9.16616 18.5848 9.28726L18.834 9.30916C21.0899 9.50737 22.2178 9.60647 22.4592 10.3105C22.7005 11.0145 21.8629 11.7622 20.1876 13.2576L19.6284 13.7566C18.7804 14.5136 18.3563 14.8921 18.1587 15.3881C18.1218 15.4807 18.0912 15.5755 18.067 15.6719C17.937 16.1891 18.0612 16.7381 18.3096 17.8363L18.3869 18.1781C18.8433 20.1962 19.0715 21.2053 18.673 21.6405C18.5241 21.8032 18.3306 21.9203 18.1157 21.9778C17.5404 22.1318 16.7237 21.4789 15.0902 20.173C14.0176 19.3156 13.4813 18.8868 12.8656 18.7904C12.6234 18.7524 12.3766 18.7524 12.1344 18.7904C11.5187 18.8868 10.9824 19.3156 9.90979 20.173C8.27633 21.4789 7.45961 22.1318 6.88434 21.9778C6.66938 21.9203 6.47587 21.8032 6.32698 21.6405C5.92854 21.2053 6.15674 20.1962 6.61314 18.1781L6.69045 17.8363C6.93879 16.7381 7.06296 16.1891 6.93305 15.6719C6.90881 15.5755 6.87817 15.4807 6.8413 15.3881C6.64366 14.8921 6.21963 14.5136 5.37156 13.7566L4.81243 13.2576C3.13713 11.7622 2.29948 11.0145 2.54083 10.3105C2.78218 9.60647 3.91011 9.50737 6.16598 9.30916L6.41516 9.28726C7.79352 9.16616 8.4827 9.1056 9.00771 8.72265C9.53272 8.3397 9.79032 7.70965 10.3055 6.44955L10.348 6.34569Z" fill="#2F66F6"/>
                        </svg>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.symbol.includes('BTC') ? 'bg-orange-400' :
                          item.symbol.includes('ETH') ? 'bg-blue-500' :
                          'bg-gradient-to-br from-purple-400 to-blue-500'
                        }`}>
                          <span className="text-white font-bold text-xs">
                            {item.symbol.includes('BTC') ? '₿' :
                             item.symbol.includes('ETH') ? 'E' : 'S'}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#11183C] font-medium">{item.symbol}</p>
                        <p className="text-[#696F8C] text-xs">Vol: {item.volume}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#11183C] font-medium">${item.price}</p>
                      <p className={`text-sm ${item.isPositive ? 'text-[#098C26]' : 'text-[#CD0000]'}`}>
                        {item.change}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4">
              <path d="M10.348 6.34569C11.2599 4.11523 11.7159 3 12.5 3C13.2841 3 13.7401 4.11523 14.652 6.34569L14.6945 6.44955C15.2097 7.70965 15.4673 8.3397 15.9923 8.72265C16.5173 9.1056 17.2065 9.16616 18.5848 9.28726L18.834 9.30916C21.0899 9.50737 22.2178 9.60647 22.4592 10.3105C22.7005 11.0145 21.8629 11.7622 20.1876 13.2576L19.6284 13.7566C18.7804 14.5136 18.3563 14.8921 18.1587 15.3881C18.1218 15.4807 18.0912 15.5755 18.067 15.6719C17.937 16.1891 18.0612 16.7381 18.3096 17.8363L18.3869 18.1781C18.8433 20.1962 19.0715 21.2053 18.673 21.6405C18.5241 21.8032 18.3306 21.9203 18.1157 21.9778C17.5404 22.1318 16.7237 21.4789 15.0902 20.173C14.0176 19.3156 13.4813 18.8868 12.8656 18.7904C12.6234 18.7524 12.3766 18.7524 12.1344 18.7904C11.5187 18.8868 10.9824 19.3156 9.90979 20.173C8.27633 21.4789 7.45961 22.1318 6.88434 21.9778C6.66938 21.9203 6.47587 21.8032 6.32698 21.6405C5.92854 21.2053 6.15674 20.1962 6.61314 18.1781L6.69045 17.8363C6.93879 16.7381 7.06296 16.1891 6.93305 15.6719C6.90881 15.5755 6.87817 15.4807 6.8413 15.3881C6.64366 14.8921 6.21963 14.5136 5.37156 13.7566L4.81243 13.2576C3.13713 11.7622 2.29948 11.0145 2.54083 10.3105C2.78218 9.60647 3.91011 9.50737 6.16598 9.30916L6.41516 9.28726C7.79352 9.16616 8.4827 9.1056 9.00771 8.72265C9.53272 8.3397 9.79032 7.70965 10.3055 6.44955L10.348 6.34569Z" stroke="#D7D9E4" strokeWidth="1.6"/>
            </svg>
            <h3 className="text-lg font-medium text-[#11183C] mb-2">No Favorites Yet</h3>
            <p className="text-[#696F8C] mb-4">Start adding your favorite cryptocurrencies to track them easily</p>
            <Button onClick={() => navigate("/market")} className="bg-[#2F66F6] hover:bg-[#2F66F6]/90">
              Browse Market
            </Button>
          </div>
        )}
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
            className="flex-1 flex-col space-y-1 h-16 text-[#696F8C]"
            onClick={() => navigate("/trade")}
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M8.5 6L4.5 10H20.5M16.5 19L20.5 15H3.5" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
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
            className="flex-1 flex-col space-y-1 h-16 text-[#2F66F6]"
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M10.348 6.34569C11.2599 4.11523 11.7159 3 12.5 3C13.2841 3 13.7401 4.11523 14.652 6.34569L14.6945 6.44955C15.2097 7.70965 15.4673 8.3397 15.9923 8.72265C16.5173 9.1056 17.2065 9.16616 18.5848 9.28726L18.834 9.30916C21.0899 9.50737 22.2178 9.60647 22.4592 10.3105C22.7005 11.0145 21.8629 11.7622 20.1876 13.2576L19.6284 13.7566C18.7804 14.5136 18.3563 14.8921 18.1587 15.3881C18.1218 15.4807 18.0912 15.5755 18.067 15.6719C17.937 16.1891 18.0612 16.7381 18.3096 17.8363L18.3869 18.1781C18.8433 20.1962 19.0715 21.2053 18.673 21.6405C18.5241 21.8032 18.3306 21.9203 18.1157 21.9778C17.5404 22.1318 16.7237 21.4789 15.0902 20.173C14.0176 19.3156 13.4813 18.8868 12.8656 18.7904C12.6234 18.7524 12.3766 18.7524 12.1344 18.7904C11.5187 18.8868 10.9824 19.3156 9.90979 20.173C8.27633 21.4789 7.45961 22.1318 6.88434 21.9778C6.66938 21.9203 6.47587 21.8032 6.32698 21.6405C5.92854 21.2053 6.15674 20.1962 6.61314 18.1781L6.69045 17.8363C6.93879 16.7381 7.06296 16.1891 6.93305 15.6719C6.90881 15.5755 6.87817 15.4807 6.8413 15.3881C6.64366 14.8921 6.21963 14.5136 5.37156 13.7566L4.81243 13.2576C3.13713 11.7622 2.29948 11.0145 2.54083 10.3105C2.78218 9.60647 3.91011 9.50737 6.16598 9.30916L6.41516 9.28726C7.79352 9.16616 8.4827 9.1056 9.00771 8.72265C9.53272 8.3397 9.79032 7.70965 10.3055 6.44955L10.348 6.34569Z" fill="#2F66F6"/>
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
