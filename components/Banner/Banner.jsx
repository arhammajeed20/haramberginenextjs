"use client";

import React, { useState, useEffect } from "react";

const texts = [
  "🎫💸 Harambergine = Resurrection of the meme 🎫💸",
  "🔥 Harambe's soul is calling you! 🔥",
  "🪙👑 The eggplant revolution begins 👑🪙",
  "💎✊ Worship the soul in the eggplant! 💎✊",
  "🏆🏆 The most noble uselessness in history 🏆🏆",
  "👑🍆 The Meme King is Back - Harambergine 👑🍆",
  "🦍🍆 Embrace Harambe who became an eggplant! 🦍🍆",
];

const GlitchBanner = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true); // Start shake when text changes
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);

      // Stop shaking after animation finishes
      setTimeout(() => {
        setIsShaking(false);
      }, 300); // match the shake animation duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-400 text-black overflow-hidden py-3 border-b-2 border-purple-500">
      <div className="flex justify-center">
        <span
          className={`mx-4 font-bold text-md sm:text-lg md:text-xl lg:text-3xl text-center glitch-text pulse-opacity text-black ${
            isShaking ? "shake" : ""
          }`}
          data-text={texts[currentTextIndex]}
        >
          {texts[currentTextIndex]}
        </span>
      </div>
    </div>
  );
};

export default GlitchBanner;
