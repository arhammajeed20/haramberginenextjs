import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Herosection from "@/components/Sections/Herosection";
import Humanity from "@/components/Sections/Humanity";
import Features from "@/components/Sections/Features";
import Who from "@/components/Sections/Who";
import Tokenomics from "@/components/Sections/Tokennomics";
import Roadmap from "@/components/Sections/Roadmap";
import HowtoBuy from "@/components/Sections/HowtoBuy";
import Faq from "@/components/Sections/Faq";
import Banner from "@/components/Banner/Banner";
import Banner2 from "@/components/Banner/Banner2";
import Marquee from "@/components/Marquee/Marquee";

export default function Home() {
  return (
    <main className="bg-[#1D1D24] w-full min-h-screen relative">
      <div>
        <Navbar />
      </div>

      <div className="pt-16">
        <Marquee />
        <Banner />
      </div>

      <div id="introduction">
        <Herosection />
      </div>
      <div>
        <Humanity />
      </div>
      <div>
        <Features />
      </div>
      <div className="py-16 bg-gradient-to-b from-purple-950 to-black">
        <Who />
        <Tokenomics />
      </div>
      <div>
        <Roadmap />
      </div>
      <div>
        <HowtoBuy />
      </div>
      <div>
        <Faq />
      </div>

      <Footer />
      <div className="sticky bottom-0 z-50">
        <Banner2 />
      </div>
    </main>
  );
}
