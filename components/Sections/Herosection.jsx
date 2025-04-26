import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Phone } from "lucide-react";
import { heroimage } from "@/lib/images";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative pt-10">
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="z-10 mb-10 lg:mb-0">
            <div className="flex items-center mb-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                🦍 Harambe is dead.
              </h1>
            </div>

            <div className="mt-8 mb-6">
              <div className="flex items-center mb-2">
                <h2 className="text-3xl md:text-5xl font-bold text-yellow-400">
                  🍆 He returned in the <br className="hidden md:block" />
                  form of an eggplant
                </h2>
              </div>
            </div>

            <div className="mt-8">
              <h3
                className="text-2xl md:text-3xl font-bold mb-2 rainbow-glow-text glitch-text"
                data-text="HARAMBERCINE"
              >
                HARAMBERCINE
              </h3>
              <p className="text-xl md:text-2xl font-semibold text-yellow-400">
                He has returned.
              </p>
              <p className="text-lg md:text-xl">
                Once again... because he got another chance
              </p>

              <p className="text-sm mt-6 italic">
                * If you remember, he never dies. *
              </p>

              <p className="mt-8 mb-4">
                The only way to own a gorilla that became an eggplant
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md flex items-center justify-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Join Presale
                </button>
                <button className="bg-transparent hover:bg-yellow-900/30 text-yellow-400 border border-yellow-400 py-3 px-6 rounded-md flex items-center justify-center">
                  🍆 Worship the Returned One
                </button>
              </div>
            </div>

            <p className="text-xs mt-6 text-gray-400">*Absurd but real.</p>
          </div>

          <div className="relative z-10">
            <div className="relative animate-pulse">
              <Image
                src={heroimage}
                alt="Custom hero image"
                width={500}
                height={500}
                className="relative z-10 mx-auto animate-[bounce_6s_ease-in-out_infinite]"
              />
              <div className="absolute top-10 right-10 bg-white text-black p-2 rounded-xl z-20">
                <p className="font-bold">TO THE MOON!!! 🌕</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              backgroundColor: [
                "#FFD700",
                "#FF6B6B",
                "#4ECDC4",
                "#FF9F1C",
                "#7B68EE",
              ][Math.floor(Math.random() * 5)],
              opacity: 0.6,
              transform: `translate(-50%, -50%)`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>
    </main>
  );
}
