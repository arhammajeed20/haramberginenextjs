export default function TokenInfoCard() {
  return (
    <div className="md:w-1/2  ">
      <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] border-purple-700 bg-black/60 backdrop-blur-sm w-full">
        <div className="flex flex-col space-y-1.5 p-6 pb-2">
          <h3 className="font-semibold tracking-tight text-white neon-text text-center text-lg">
            <span className="text-yellow-500">Token Information</span>
          </h3>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div className="bg-purple-900/30 p-3 rounded-md">
              <div className="text-sm font-medium mb-1">Token Symbol</div>
              <div className="font-bold">wing</div>
            </div>
            <div className="bg-purple-900/30 p-3 rounded-md">
              <div className="text-sm font-medium mb-1">Token Address</div>
              <div className="text-xs break-all mb-2">
                0xFFbef7b0Cd76a1cE9cfBCeeBe59CF3b1deaa80dC
              </div>
              <div className="flex gap-2">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full text-xs">
                  <svg
                    className="lucide lucide-copy h-3 w-3 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  Copy
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full text-xs">
                  <svg
                    className="lucide lucide-external-link h-3 w-3 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14L21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                  View
                </button>
              </div>
            </div>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-yellow-500 hover:bg-yellow-600 text-black">
              Add Token to Wallet
            </button>

            <div className="text-xs text-gray-400 text-center mt-2">
              Tokens are minted immediately after purchase.
              <br />
              Add the token to your wallet to verify.
            </div>

            <div className="text-xs text-gray-400 text-center mt-2">
              <p className="font-medium text-yellow-500 mb-1">
                Manually add token:
              </p>
              <ol className="list-decimal list-inside text-left">
                <li>Open MetaMask</li>
                <li>Click 'Import tokens' at the bottom</li>
                <li>Select 'Custom token' tab</li>
                <li>Paste token contract address</li>
                <li>Symbol (wing) and decimals (18) will auto-fill</li>
                <li>Click 'Import' button</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
