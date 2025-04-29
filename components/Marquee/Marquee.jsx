"use client";

import { default as FastMarquee } from "react-fast-marquee";
import { useLanguage } from "@/context/LanguageContext";

export default function MarqueeUi() {
  const { t } = useLanguage();

  return (
    <div className="h-fit w-full py-2 border-y-2 border-white bg-purple-500">
      <FastMarquee
        className="h-fit w-full"
        speed={200}
        autoFill
        gradient={false}
      >
        <span className="text-lg text-white drop-shadow-[0_0_6px_white]">
          {t("marquee")}
        </span>
      </FastMarquee>
    </div>
  );
}
