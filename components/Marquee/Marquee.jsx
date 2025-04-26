import { default as FastMarquee } from "react-fast-marquee";
import Image from "next/image";
import { coinmarketcap, binance, coingecko } from "@/lib/images";

// Partner logos array
const partnerLogos = [
  { image: coinmarketcap, alt: "CoinMarketCap" },
  { image: binance, alt: "Binance" },
  { image: coingecko, alt: "CoinGecko" },
];

export default function MarqueeUi() {
  return (
    <div className="h-fit w-full py-10 border-y-2 border-black ">
      <FastMarquee
        className="h-fit w-full"
        speed={20}
        autoFill={true}
        gradientWidth={200}
      >
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="px-5 sm:px-10 flex items-center justify-center"
          >
            <Image src={logo.image} alt={logo.alt} className="h-8 w-auto" />
          </div>
        ))}
      </FastMarquee>
    </div>
  );
}
