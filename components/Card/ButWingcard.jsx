"use client";
import { useState, useEffect, useRef } from "react";

export default function BuyWingTokenCard() {
  const [activeTab, setActiveTab] = useState("ETH");

  // Countdown Timer State
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownDate = useRef(new Date("May 31, 2025 00:00:00").getTime()); // Set your target date here

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = countdownDate.current - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:w-1/2">
      {/* Added h-full to ensure the card takes full height of its container */}
      <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] border-purple-700 bg-black/60 backdrop-blur-sm w-full h-full flex flex-col">
        <div className="flex flex-col space-y-1.5 p-6 pb-4">
          <h3 className="font-semibold tracking-tight text-white neon-text text-center text-2xl">
            <span className="text-yellow-500">BUY $wing TOKENS NOW</span>
          </h3>

          <div className="bg-purple-900/30 text-center py-2 rounded-md mb-4">
            UNTIL PRICE RISE
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-2 mb-4" id="countdown">
            <div className="bg-purple-900/50 rounded-md p-2 text-center">
              <div className="text-2xl font-bold">{timeRemaining.days}</div>
              <div className="text-xs text-gray-300">Days</div>
            </div>
            <div className="bg-purple-900/50 rounded-md p-2 text-center">
              <div className="text-2xl font-bold">{timeRemaining.hours}</div>
              <div className="text-xs text-gray-300">Hours</div>
            </div>
            <div className="bg-purple-900/50 rounded-md p-2 text-center">
              <div className="text-2xl font-bold">{timeRemaining.minutes}</div>
              <div className="text-xs text-gray-300">Minutes</div>
            </div>
            <div className="bg-purple-900/50 rounded-md p-2 text-center">
              <div className="text-2xl font-bold">{timeRemaining.seconds}</div>
              <div className="text-xs text-gray-300">Seconds</div>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <div>Current Round 5</div>
            <div>Next Round Price: $0.0000027991</div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <div
                role="progressbar"
                aria-valuemax="100"
                aria-valuemin="0"
                className="relative w-full overflow-hidden rounded-full bg-purple-900/20 h-3"
              >
                <div
                  className="h-full w-full flex-1 bg-gradient-to-r from-purple-600 to-yellow-500 transition-all duration-1000 ease-in-out"
                  style={{
                    transform: "translateX(-70%)", // Adjust this % as needed
                  }}
                />
              </div>
            </div>
          </div>

          <div className="bg-purple-900/30 p-3 rounded-md mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">YOUR PURCHASED $wing</span>
              <span className="text-sm text-yellow-400">
                Connect your wallet!
              </span>
            </div>
          </div>

          <div className="text-center border-t border-b border-purple-800 py-3 mb-4">
            1 wing = $0.0000025446058
          </div>
        </div>

        {/* Added flex-grow to make this section expand to fill available space */}
        <div className="p-6 pt-0 flex-grow">
          <div dir="ltr" className="w-full mb-6">
            {/* Token Selector Tabs */}
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="h-10 items-center justify-center rounded-md bg-purple-900/20 p-1 text-muted-foreground grid w-full grid-cols-2 mb-6"
            >
              {/* ETH Button */}
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "ETH"}
                onClick={() => setActiveTab("ETH")}
                className={`whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium flex items-center justify-center transition-all duration-300 ${
                  activeTab === "ETH"
                    ? "bg-purple-700 text-white shadow-md"
                    : ""
                }`}
              >
                <div className="bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                  <span className="text-xs">Ξ</span>
                </div>
                ETH
              </button>

              {/* USDT Button */}
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "USDT"}
                onClick={() => setActiveTab("USDT")}
                className={`whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium flex items-center justify-center transition-all duration-300 ${
                  activeTab === "USDT"
                    ? "bg-purple-700 text-white shadow-md"
                    : ""
                }`}
              >
                <div className="bg-green-500 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                  <span className="text-xs">T</span>
                </div>
                USDT
              </button>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Pay with {activeTab}
                  </label>
                  <div className="relative">
                    <input
                      className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm bg-purple-900/20 pr-16 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="0"
                      disabled
                      type="number"
                    />
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center"
                      disabled
                    >
                      <span className="text-sm mr-1">Max</span>
                      <div className="bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-loader-circle h-3 w-3 animate-spin"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    You will get $wing
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm bg-purple-900/20 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="0"
                    readOnly
                    disabled
                    type="text"
                  />
                </div>
              </div>

              {/* Connect Wallet Button */}
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 h-10 px-4 py-2 w-full mt-2">
                Connect Wallet
              </button>

              <div className="text-center text-xs text-gray-400 mt-2">
                * Connect wallet to purchase
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
