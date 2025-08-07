import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Header */}
      <div className="bg-[#F8F9FC] px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          {/* Status Bar */}
          <div className="text-sm font-medium text-[#11183C]">9:41</div>
          <div className="flex items-center space-x-1">
            {/* Signal Icons */}
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z" fill="#11183C"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z" fill="#11183C"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z" fill="#11183C"/>
            </svg>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.13295 8.93945C8.77245 8.93945 9.39384 9.1075 9.94135 9.42792L10.1632 9.55775C10.3314 9.65617 10.3609 9.88652 10.2231 10.024L8.32897 11.9129C8.21263 12.0289 8.02401 12.0289 7.90767 11.9129L6.02576 10.0362C5.88847 9.89927 5.91709 9.67009 6.08385 9.57094L6.3032 9.44051C6.85574 9.11198 7.48501 8.93945 8.13295 8.93945Z" fill="#11183C"/>
              <path d="M8.13267 5.46973C9.7235 5.46973 11.2509 5.99747 12.4952 6.97479L12.6711 7.11291C12.8113 7.22303 12.8236 7.43052 12.6974 7.55636L11.5666 8.684C11.462 8.7883 11.2965 8.80028 11.1779 8.71214L11.0401 8.60969C10.1997 7.98511 9.18633 7.65008 8.13267 7.65008C7.07251 7.65008 6.05323 7.98928 5.21005 8.62103L5.07207 8.72441C4.95346 8.81327 4.78737 8.80157 4.68247 8.69696L3.5521 7.56974C3.42618 7.44417 3.43813 7.2372 3.57769 7.12687L3.75254 6.98864C4.99979 6.00261 6.53416 5.46973 8.13267 5.46973Z" fill="#11183C"/>
              <path d="M8.13272 2C10.6574 2 13.0717 2.89057 14.9828 4.52294L15.1459 4.66228C15.2777 4.77488 15.2855 4.97558 15.1627 5.09797L14.0356 6.22195C13.9264 6.33084 13.7519 6.33847 13.6336 6.23952L13.494 6.12283C11.9894 4.86472 10.1035 4.18035 8.13272 4.18035C6.15517 4.18035 4.26327 4.86943 2.75641 6.13541L2.6168 6.2527C2.4985 6.3521 2.32359 6.34466 2.2142 6.23557L1.08726 5.11176C0.964693 4.98954 0.972236 4.78918 1.10365 4.67646L1.26614 4.53708C3.17953 2.89589 5.60056 2 8.13272 2Z" fill="#11183C"/>
            </svg>
            <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 5C24.5523 5 25 5.44772 25 6V8C25 8.55228 24.5523 9 24 9V5Z" fill="#696F8C"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M3 1H20C21.6569 1 23 2.34315 23 4V10C23 11.6569 21.6569 13 20 13H3C1.34315 13 0 11.6569 0 10V4C0 2.34315 1.34315 1 3 1ZM3 2C1.89543 2 1 2.89543 1 4V10C1 11.1046 1.89543 12 3 12H20C21.1046 12 22 11.1046 22 10V4C22 2.89543 21.1046 2 20 2H3Z" fill="#696F8C"/>
              <rect x="2" y="3" width="19" height="8" rx="1" fill="#11183C"/>
            </svg>
          </div>
        </div>

        {/* App Header */}
        <div className="flex items-center justify-between">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6667 19.451C18.2734 18.2697 17.4069 17.2259 16.2016 16.4814C14.9962 15.7369 13.5193 15.3333 12 15.3333C10.4807 15.3333 9.00379 15.7369 7.79843 16.4814C6.59306 17.2259 5.72657 18.2697 5.33333 19.451M15.3333 9.77778C15.3333 11.6187 13.8409 13.1111 12 13.1111C10.1591 13.1111 8.66667 11.6187 8.66667 9.77778C8.66667 7.93683 10.1591 6.44444 12 6.44444C13.8409 6.44444 15.3333 7.93683 15.3333 9.77778ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          
          <div className="flex items-center gap-2">
            <svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2360_4938)">
                <path fillRule="evenodd" clipRule="evenodd" d="M25 7V21L12.5 28L0 21V7L12.5 0L25 7ZM2.37305 8.39062V19.6084L9.30888 23.493V20.1581L5.53056 18.16L4.89873 17.8261V10.1737L5.53056 9.83973L9.30888 7.84071V4.50669L2.37305 8.39062ZM11.6819 18.7294V24.8221L12.5 25.2803L13.3186 24.8219V18.7296L13.9505 18.3956L17.7288 16.3956V15.5557H20.1018V17.8253L19.47 18.1602L15.6917 20.1583V23.493L22.627 19.6094V8.38965L15.6917 4.50669V7.83991L19.47 9.83991L20.1018 10.1739V12.4444H17.7288V11.6026L13.9505 9.60456L13.3186 9.2696V3.17806L12.5 2.71973L11.6819 3.17783V9.2704L11.0501 9.60438L7.27178 11.6024V16.3964L11.0501 18.3954L11.6819 18.7294Z" fill="#2F66F6"/>
              </g>
              <defs>
                <filter id="filter0_d_2360_4938" x="0" y="0" width="25" height="29" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.184314 0 0 0 0 0.4 0 0 0 0 0.964706 0 0 0 0.3 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2360_4938"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2360_4938" result="shape"/>
                </filter>
              </defs>
            </svg>
            <span className="text-lg font-semibold text-[#2F66F6]">coinmoney</span>
          </div>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="2" stroke="#696F8C" strokeWidth="1.6"/>
            <circle cx="12" cy="12" r="2" stroke="#696F8C" strokeWidth="1.6"/>
            <circle cx="12" cy="18" r="2" stroke="#696F8C" strokeWidth="1.6"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-20">
        {/* Portfolio Balance */}
        <div className="text-center py-4">
          <p className="text-[#11183C] text-base">Portfolio Balance</p>
          <h1 className="text-[#11183C] text-4xl font-bold">$2,760.23</h1>
          <p className="text-[#11183C] text-base">+2.60%</p>
        </div>

        {/* Portfolio Graph */}
        <div className="mb-6">
          <div className="relative h-32 mb-4">
            <svg width="100%" height="128" viewBox="0 0 316 105" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              <path d="M1 46.4188L4.48889 44.9739C7.97778 43.5291 14.9556 40.6394 21.9333 38.3467C28.9111 36.054 35.8889 34.3582 42.8667 36.2313C49.8444 38.1044 56.8222 43.5464 63.8 47.3954C70.7778 51.2444 77.7556 53.5004 84.7333 50.8497C91.7111 48.1991 98.6889 40.6416 105.667 30.3992C112.644 20.1568 119.622 7.22929 126.6 2.92155C133.578 -1.38619 140.556 2.9258 147.533 2.70953C154.511 2.49326 161.489 -2.25127 168.467 5.59655C175.444 13.4444 182.422 33.8845 189.4 37.2549C196.378 40.6253 203.356 26.926 210.333 29.0159C217.311 31.1058 224.289 48.985 231.267 47.9586C238.244 46.9321 245.222 27.0001 252.2 16.4149C259.178 5.82978 266.156 4.59156 273.133 12.2621C280.111 19.9326 287.089 36.5118 294.067 38.0962C301.044 39.6806 308.022 26.2701 311.511 19.5648L315 12.8595" stroke="#2F66F6"/>
              <path opacity="0.2" d="M4.48889 44.7635L1 46.2014V105H315V12.8028L311.511 19.476C308.022 26.1491 301.044 39.4955 294.067 37.9187C287.089 36.3419 280.111 19.842 273.133 12.2082C266.156 4.57438 259.178 5.80667 252.2 16.3412C245.222 26.8757 238.244 46.7123 231.267 47.7339C224.289 48.7554 217.311 30.9617 210.333 28.8818C203.356 26.8019 196.378 40.4357 189.4 37.0815C182.422 33.7272 175.444 13.3848 168.467 5.57455C161.489 -2.23571 154.511 2.48611 147.533 2.70135C140.556 2.91658 133.578 -1.37478 126.6 2.91235C119.622 7.19948 112.644 20.0651 105.667 30.2585C98.6889 40.452 91.7111 47.9732 84.7333 50.6112C77.7556 53.2492 70.7778 51.004 63.8 47.1734C56.8222 43.3428 49.8444 37.9269 42.8667 36.0627C35.8889 34.1986 28.9111 35.8863 21.9333 38.168C14.9556 40.4498 7.97778 43.3256 4.48889 44.7635Z" fill="url(#paint0_linear_2360_653)"/>
              <defs>
                <linearGradient id="paint0_linear_2360_653" x1="158" y1="1" x2="158" y2="105" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2F66F6"/>
                  <stop offset="1" stopColor="#2F66F6" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-2 right-4 w-5 h-5 bg-[#2F66F6] rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <div className="flex justify-between text-xs text-[#11183C] px-8">
            <span>10:00</span>
            <span>12:00</span>
            <span>14:00</span>
            <span>16:00</span>
            <span>18:00</span>
          </div>
        </div>

        {/* Market Movers */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#11183C] text-base font-medium">Market Movers</h2>
            <Button variant="ghost" className="text-[#2F66F6] p-0 h-auto">More</Button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Card className="flex-shrink-0 w-40 shadow-sm">
              <CardContent className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-[#11183C] text-sm">BTC/USD</p>
                    <p className="text-[#11183C] text-sm">30,113.80</p>
                    <p className="text-[#098C26] text-xs">+2.76%</p>
                  </div>
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">₿</span>
                  </div>
                </div>
                <svg width="85" height="36" viewBox="0 0 86 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                  <path d="M0.5 32L1.44053 29.2755C2.38105 26.5511 4.61481 17.8362 6.49586 16.8827C8.37691 15.9292 10.258 15.6021 12.139 16.8827C14.0201 18.1633 15.9011 23.9979 17.7822 20.2558C19.6632 16.5137 21.1916 16.5251 23.0726 15.7123C24.9537 14.8995 27.1874 17.1314 29.0684 17.9002C30.9495 18.6691 32.8306 15.3289 34.7116 15.7123C36.5927 16.0956 39.1791 15.9387 41.0602 16.8827C42.9412 17.8267 44.8223 19.5077 46.7034 15.7123C48.5844 11.9168 49.7601 10.8087 51.6411 11.2978C53.5222 11.7869 55.4032 16.847 57.2843 19.4924C59.1653 22.1379 61.0464 21.0787 62.9274 17.9002C64.8085 14.7218 66.6895 6.81436 68.5706 5.77707C70.4516 4.73978 72.3327 7.96286 74.2138 9.42536C76.0948 10.8879 77.9759 10.5898 79.8569 9.39211C81.738 8.19446 83.619 6.09723 84.5595 5.04861L85.5 4" stroke="#2F66F6"/>
                </svg>
                <div>
                  <p className="text-[#696F8C] text-xs">24H Vol.</p>
                  <p className="text-[#696F8C] text-xs">394 897 432,26</p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-shrink-0 w-40 shadow-sm">
              <CardContent className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-[#11183C] text-sm">Sol/USD</p>
                    <p className="text-[#11183C] text-sm">40,11</p>
                    <p className="text-[#098C26] text-xs">+3.75%</p>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                </div>
                <svg width="85" height="36" viewBox="0 0 86 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                  <path d="M0.5 16.8053L1.44444 18.2114C2.38889 19.6176 4.27778 22.43 6.16667 25.2508C8.05556 28.0717 9.94444 30.9012 11.8333 30.7711C13.7222 30.6409 15.6111 27.5512 17.5 26.368C19.3889 25.1847 21.2778 25.908 23.1667 27.9675C25.0556 30.0271 26.9444 33.423 28.8333 31.3572C30.7222 29.2914 32.6111 21.7639 34.5 16.319C36.3889 10.8741 38.2778 7.51185 40.1667 7.24659C42.0556 6.98134 43.9444 9.81309 45.8333 9.69077C47.7222 9.56845 49.6111 6.49205 51.5 5.18086C53.3889 3.86967 55.2778 4.32369 57.1667 5.26517C59.0556 6.20665 60.9444 7.6356 62.8333 7.75291C64.7222 7.87021 66.6111 6.67588 68.5 5.66599C70.3889 4.6561 72.2778 3.83067 74.1667 4.02987C76.0556 4.22906 77.9444 5.45289 79.8333 5.79429C81.7222 6.1357 83.6111 5.59468 84.5556 5.32417L85.5 5.05366" stroke="#2F66F6"/>
                </svg>
                <div>
                  <p className="text-[#696F8C] text-xs">24H Vol.</p>
                  <p className="text-[#696F8C] text-xs">150 897 992,26</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Portfolio */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#11183C] text-base font-medium">Portfolio</h2>
            <Button variant="ghost" className="text-[#2F66F6] p-0 h-auto">More</Button>
          </div>
          <div className="space-y-3">
            <Card className="shadow-sm">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">₿</span>
                  </div>
                  <div>
                    <p className="text-[#11183C] font-medium">Bitcoin</p>
                    <p className="text-[#696F8C] text-sm">BTC</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#11183C] font-medium">$1,270.10</p>
                  <p className="text-[#098C26] text-sm">+2.76%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">E</span>
                  </div>
                  <div>
                    <p className="text-[#11183C] font-medium">Ethereum</p>
                    <p className="text-[#696F8C] text-sm">ETH</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#11183C] font-medium">$270.10</p>
                  <p className="text-[#CD0000] text-sm">-1.02%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#D7D9E4]">
        <div className="flex">
          <Button 
            variant="ghost" 
            className="flex-1 flex-col space-y-1 h-16 text-[#2F66F6]"
            onClick={() => navigate('/home')}
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9143 23C14.9143 23.4418 15.2725 23.8 15.7143 23.8C16.1561 23.8 16.5143 23.4418 16.5143 23H14.9143ZM8.48571 23C8.48571 23.4418 8.84389 23.8 9.28571 23.8C9.72754 23.8 10.0857 23.4418 10.0857 23H8.48571ZM10.5714 16.3228H14.4286V14.7228H10.5714V16.3228ZM14.9143 16.769V23H16.5143V16.769H14.9143ZM8.48571 16.769V23H10.0857V16.769H8.48571Z" fill="#2F66F6"/>
            </svg>
            <span className="text-xs">Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 flex-col space-y-1 h-16 text-[#696F8C]"
            onClick={() => navigate('/trade')}
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 6L4.5 10H20.5M16.5 19L20.5 15H3.5" stroke="#696F8C" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <span className="text-xs">Trade</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 flex-col space-y-1 h-16 text-[#696F8C]"
            onClick={() => navigate('/market')}
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3268 12.482L9.6612 12.0382L10.3268 12.482Z" fill="#696F8C"/>
            </svg>
            <span className="text-xs">Market</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 flex-col space-y-1 h-16 text-[#696F8C]"
            onClick={() => navigate('/favorites')}
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.348 6.34569C11.2599 4.11523 11.7159 3 12.5 3C13.2841 3 13.7401 4.11523 14.652 6.34569L14.6945 6.44955C15.2097 7.70965 15.4673 8.3397 15.9923 8.72265C16.5173 9.1056 17.2065 9.16616 18.5848 9.28726L18.834 9.30916C21.0899 9.50737 22.2178 9.60647 22.4592 10.3105C22.7005 11.0145 21.8629 11.7622 20.1876 13.2576L19.6284 13.7566C18.7804 14.5136 18.3563 14.8921 18.1587 15.3881C18.1218 15.4807 18.0912 15.5755 18.067 15.6719C17.937 16.1891 18.0612 16.7381 18.3096 17.8363L18.3869 18.1781C18.8433 20.1962 19.0715 21.2053 18.673 21.6405C18.5241 21.8032 18.3306 21.9203 18.1157 21.9778C17.5404 22.1318 16.7237 21.4789 15.0902 20.173C14.0176 19.3156 13.4813 18.8868 12.8656 18.7904C12.6234 18.7524 12.3766 18.7524 12.1344 18.7904C11.5187 18.8868 10.9824 19.3156 9.90979 20.173C8.27633 21.4789 7.45961 22.1318 6.88434 21.9778C6.66938 21.9203 6.47587 21.8032 6.32698 21.6405C5.92854 21.2053 6.15674 20.1962 6.61314 18.1781L6.69045 17.8363C6.93879 16.7381 7.06296 16.1891 6.93305 15.6719C6.90881 15.5755 6.87817 15.4807 6.8413 15.3881C6.64366 14.8921 6.21963 14.5136 5.37156 13.7566L4.81243 13.2576C3.13713 11.7622 2.29948 11.0145 2.54083 10.3105C2.78218 9.60647 3.91011 9.50737 6.16598 9.30916L6.41516 9.28726C7.79352 9.16616 8.4827 9.1056 9.00771 8.72265C9.53272 8.3397 9.79032 7.70965 10.3055 6.44955L10.348 6.34569Z" stroke="#696F8C" strokeWidth="1.6"/>
            </svg>
            <span className="text-xs">Favorites</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 flex-col space-y-1 h-16 text-[#696F8C]"
            onClick={() => navigate('/wallet')}
          >
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
