import React from "react";

const HeroSection = () => {
  return (
    <div
      id="home"
      className=" relative  emoji-bg bg-black flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        {[
          "🎭",
          "💎",
          "🪙",
          "🔥",
          "🤑",
          "👑",
          "🎨",
          "🎯",
          "🤑",
          "🎯",
          "💎",
          "🎯",
          "🍆",
          "🦍",
          "📈",
          "🎯",
          "🪙",
          "🏆",
          "🎲",
          "🍆",
          "🔥",
          "🎮",
          "👑",
          "🎯",
          "🎮",
          "🍆",
          "📈",
          "🎮",
          "🔥",
          "🎪",
          "🎨",
          "🏆",
          "🎲",
          "🎮",
        ].map((emoji, index) => (
          <div
            key={index}
            className="emoji absolute animate-emoji-up"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 1.5 + 0.5}em`,
              animationDuration: `${Math.random() * 20 + 10}s`, // Randomize the duration
              animationDelay: `${Math.random() * 5}s`, // Delay for variety
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-10 sm:px-20 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              <span className="text-white">
                <span className="flex items-center">
                  <span className="mr-2"></span> 🦍 Harambe is dead.
                </span>
              </span>
              <br />
              <span className="text-yellow-500">
                <span className="flex items-center">
                  <span className="mr-2"></span> 🍆 He returned in the form of
                  an eggplant
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 text-shadow-light">
              <span className="glitch-text" data-text="HARAMBERGINE">
                HARAMBERGINE
              </span>
              <br />
              <span className="text-yellow-400">He has returned.</span>
              <br />
              <span className="text-gray-300">
                Once again... because he got another chance
              </span>
            </p>
            <p className="text-gray-300 mb-8 text-shadow-light">
              * If you remember, he never dies. *
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex flex-col">
                <p className="text-gray-300 mb-2 text-sm">
                  The only way to own a gorilla that became an eggplant
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md px-8 bg-purple-600 hover:bg-purple-700 w-full md:w-auto">
                    🚀 Join Presale
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 w-full md:w-auto">
                    🍆 Worship the Returned One
                  </button>
                </div>

                <p className="text-gray-400 text-xs mt-2 italic">
                  *Absurd but real.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
              <img
                alt="Harambergine Image"
                width="400"
                height="400"
                decoding="async"
                className="animate-[bounce_6s_ease-in-out_infinite]"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-hyperrealistic-illustration-of-an-eggp_H3qTo6e8Rf2P1ClQJTHzYA_6Sw5zzgMQEeplqTy4uyD5Q-removebg-preview-apOenJTXogxulTqOWg3lWtQwcWQZ9p.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute top-0 right-0 bg-white rounded-full px-4 py-2 shadow-lg animate-[pulse_2s_ease-in-out_infinite]">
                <p className="font-bold text-black">TO THE MOON!!! 🌕</p>
                <div className="absolute -bottom-1 left-4 w-4 h-4 bg-white transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
