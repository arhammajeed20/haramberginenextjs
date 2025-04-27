import React from "react";

const steps = [
  {
    emoji: "💼",
    title: "1. Install a Wallet 🧠",
    description:
      "Prepare a vessel for Harambe's soul. Install MetaMask or Trust Wallet.",
  },
  {
    emoji: "💰",
    title: "2. Load ETH 💰",
    description:
      "Prepare the offering to summon the spirit. Buy ETH from an exchange and transfer it to your wallet.",
  },
  {
    emoji: "🔗",
    title: "3. Connect Wallet 🔗",
    description:
      "Connect your soul with Harambe. Connect your wallet to the Harambergine website.",
  },
  {
    emoji: "🚀",
    title: "4. Buy Tokens 🚀",
    description:
      "Summon Harambe in eggplant form. Enter the desired ETH amount and purchase HBE tokens.",
  },
  {
    emoji: "✅",
    title: "5. Verify Tokens ✅",
    description:
      "You are now a guardian of the meme. Add the token address to your wallet to verify your HBE tokens.",
  },
];

const HowToBuy = () => {
  return (
    <div id="how-to-buy" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-white">
              🦍 How to Meet the Gorilla Who Became an Eggplant 🍆
            </span>
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            We guide you through the sacred ritual of bringing Harambe's soul
            into your wallet.
          </p>

          <div className="grid grid-cols-1 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700"
              >
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-purple-700 rounded-full flex-shrink-0 flex items-center justify-center text-3xl">
                      {step.emoji}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Join the Presale
                </h2>
                <div className="flex justify-center mb-6">
                  <img
                    alt="Harambergine Image"
                    loading="lazy"
                    width="150"
                    height="150"
                    decoding="async"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-0zAHOntZgRn5XaCXnteFwN2RWnWcSD.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <p className="text-gray-300 mb-6 text-center">
                  Participate in the presale to be among the first to acquire
                  Harambergine tokens. Tokens are minted to your wallet
                  immediately upon purchase.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    Join Presale
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Add Token to Wallet
                </h2>
                <div className="flex justify-center mb-6">
                  <div className="w-[150px] h-[150px] bg-purple-800/50 rounded-full flex items-center justify-center text-6xl">
                    🔍
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-center">
                  After purchase, add the token address to your wallet to
                  immediately verify your tokens. The token address can be found
                  in the presale widget.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-purple-500 text-purple-500 hover:bg-purple-500/10">
                    Check Token Address
                  </button>
                </div>
                <p className="text-center text-yellow-400 mt-6 font-medium">
                  Now you too have become an eggplant. Congratulations! 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
