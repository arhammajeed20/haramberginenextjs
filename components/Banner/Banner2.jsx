"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const GlitchBanner = () => {
  const { t } = useLanguage();
  const texts = t("banner2Texts", "common");
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
  }, [texts.length]);

  return (
    <div className="bg-blue-400 text-black overflow-hidden py-3 border-t-2 border-dotted border-yellow-500">
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
