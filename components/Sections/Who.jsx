"use client";

import React from "react";

const Who = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-white">Who is </span>
          <span className="text-yellow-500">Harambergine?</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-500/50 blur-2xl animate-pulse" />
              <div className="relative z-10">
                <img
                  alt="Harambergine Image"
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  className="mx-auto animate-[bounce_6s_ease-in-out_infinite]"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0-dxs5zsUH9gTo6NsuLhfKyj4BI2s7Yi.png"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Birth of a Meme</h3>
                <p className="text-gray-300 mb-4">
                  Harambergine is the fusion of a 'sacrificed hero' and the
                  'essence of memes'. In 2016, Harambe left this world, but
                  never left our memories.
                </p>
                <p className="text-gray-300">
                  He wandered the spiritual realm of the internet until finding
                  the most inappropriate vessel - an eggplant (🍆). He produces
                  nothing, only laughter and confusion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Harambe's Legacy</h3>
              <p className="text-gray-300">
                "Die in a zoo, resurrect as a meme." Harambe was a gorilla who
                died unjustly in 2016, creating a massive impact on internet
                culture and spawning countless memes. Harambergine carries on
                this internet legacy in a new form.
              </p>
            </div>
          </div>

          <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                Symbolism of the Eggplant
              </h3>
              <p className="text-gray-300">
                The eggplant emoji has various meanings in internet culture. In
                Harambergine, the eggplant represents the vessel containing
                Harambe's soul and symbolizes the resurrection of the meme. It
                may seem inappropriate and useless, but that's the essence of a
                zoo gorilla.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700 mb-12">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Harambergine's Mission
            </h3>
            <p className="text-gray-300 text-center mb-6">
              Harambergine aims to go beyond a simple meme coin to honor
              Harambe's spirit and preserve the essence of internet culture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-purple-800/30 rounded-lg">
                <h4 className="font-bold mb-2">Guardian of Memes</h4>
                <p className="text-sm text-gray-300">
                  Preserving internet culture and the spirit of memes
                </p>
              </div>

              <div className="p-4 bg-purple-800/30 rounded-lg">
                <h4 className="font-bold mb-2">Practicality</h4>
                <p className="text-sm text-gray-300">
                  Most zoos have the same practicality as memes.
                </p>
              </div>

              <div className="p-4 bg-purple-800/30 rounded-lg">
                <h4 className="font-bold mb-2">Soul Resurrection</h4>
                <p className="text-sm text-gray-300">
                  Eternally remembering Harambe's soul in an eggplant
                </p>
              </div>
            </div>

            <p className="text-center text-yellow-400 mt-6 italic font-medium">
              "He became an eggplant, and we are his seeds."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
