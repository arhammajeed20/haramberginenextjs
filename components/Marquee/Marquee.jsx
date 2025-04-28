import { default as FastMarquee } from "react-fast-marquee";

// Partner logos array

export default function MarqueeUi() {
  return (
    <div className="h-fit w-full py-2 border-y-2 border-white bg-purple-500">
      <FastMarquee
        className="h-fit w-full"
        speed={200}
        autoFill
        gradient={false}
      >
        <span className="text-lg text-white drop-shadow-[0_0_6px_white]">
          🚀 Harambergine to the moon!!! 🚀 TO THE MOON!!! 🚀
          Gorilla+Eggplant=Epic 🚀
        </span>
      </FastMarquee>
    </div>
  );
}
