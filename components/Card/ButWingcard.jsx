"use client";
import CountdownTimer from "@/components/Countdown/CountdownTimer";

export default function BuyWingTokenCard() {
  return (
    <div className="md:w-1/2">
      <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] border-purple-700 bg-black/60 backdrop-blur-sm w-full">
        <div className="flex flex-col space-y-1.5 p-6 pb-4">
          <h3 className="font-semibold tracking-tight text-white neon-text text-center text-2xl">
            <span className="text-yellow-500">BUY $wing TOKENS NOW</span>
          </h3>

          <div className="bg-purple-900/30 text-left py-2 rounded-md mb-4">
            UNTIL PRICE RISE
          </div>

          {/* Timer */}
          <CountdownTimer />

          {/* Round Info */}
          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <div>Current Round 5</div>
            <div>Next Round Price: $0.0000027991</div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="relative">
              <div
                role="progressbar"
                aria-valuemax="100"
                aria-valuemin="0"
                className="relative w-full overflow-hidden rounded-full bg-purple-900/20 h-3"
              >
                <div
                  className="h-full w-full flex-1 bg-gradient-to-r from-purple-600 to-yellow-500 transition-all"
                  style={{ transform: "translateX(-99%)" }}
                />
              </div>
            </div>
          </div>

          {/* Purchase Info */}
          <div className="bg-purple-900/30 p-3 rounded-md mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">YOUR PURCHASED $wing</span>
              <span className="text-sm text-yellow-400">
                Connect your wallet!
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="text-center border-t border-b border-purple-800 py-3 mb-4">
            1 wing = $0.0000025446058
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-6 pt-0">
          <div dir="ltr" className="w-full mb-6">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="h-10 items-center justify-center rounded-md bg-purple-900/20 p-1 text-muted-foreground grid w-full grid-cols-2 mb-6"
            >
              {/* ETH Tab */}
              <button
                type="button"
                role="tab"
                aria-selected="true"
                className="whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium flex items-center justify-center data-[state=active]:bg-purple-700 data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                <div className="bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                  <span className="text-xs">Ξ</span>
                </div>
                ETH
              </button>

              {/* USDT Tab */}
              <button
                type="button"
                role="tab"
                aria-selected="false"
                className="whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium flex items-center justify-center"
              >
                <div className="bg-green-500 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                  <span className="text-xs">T</span>
                </div>
                USDT
              </button>
            </div>

            {/* ETH Tab Content */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Pay with ETH */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Pay with ETH
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

                {/* Get $wing */}
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
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-2">
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
