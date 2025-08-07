import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has completed onboarding
    const onboardingCompleted = localStorage.getItem("onboardingCompleted");

    if (onboardingCompleted === "true") {
      // Redirect to home if onboarding is complete
      navigate("/home");
    } else {
      // Redirect to first onboarding screen
      navigate("/onboarding/1");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FC]">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <svg
            width="25"
            height="29"
            viewBox="0 0 25 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2360_5365)">
              <path
                d="M25 7V21L12.5 28L0 21V7L12.5 0L25 7ZM11.6816 3.17773V9.27051L11.0498 9.60449L7.27148 11.6025V16.3965L11.0498 18.3955L11.6816 18.7295V24.8213L12.5 25.2803L13.3184 24.8213V18.7295L13.9502 18.3955L17.7285 16.3955V15.5557H20.1016V17.8252L19.4697 18.1602L15.6914 20.1582V23.4922L22.627 19.6094V8.38965L15.6914 4.50586V7.83984L19.4697 9.83984L20.1016 10.1738V12.4443H17.7285V11.6025L13.9502 9.60449L13.3184 9.26953V3.17773L12.5 2.71973L11.6816 3.17773ZM2.37305 8.39062V19.6084L9.30859 23.4922V20.1582L5.53027 18.1602L4.89844 17.8262V10.1738L5.53027 9.83984L9.30859 7.84082V4.50684L2.37305 8.39062Z"
                fill="#2F66F6"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2360_5365"
                x="0"
                y="0"
                width="25"
                height="29"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.184314 0 0 0 0 0.4 0 0 0 0 0.964706 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2360_5365"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2360_5365"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-[#11183C] flex items-center justify-center gap-3 mb-4">
          <svg
            className="animate-spin h-6 w-6 text-[#2F66F6]"
            viewBox="0 0 50 50"
          >
            <circle
              className="opacity-30"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
            />
            <circle
              className="text-[#2F66F6]"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset="75"
            />
          </svg>
          Loading...
        </h1>
        <p className="text-[#696F8C]">Setting up your crypto wallet</p>
      </div>
    </div>
  );
}
