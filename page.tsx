import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Herosection from "@/components/Sections/Herosection";
import MarqueeUi from "@/components/Marquee/Marquee";
import Buyinco from "@/components/Sections/Buyinco";
import Whyinco from "@/components/Sections/Whyinco";
import Tokenomics from "@/components/Sections/Tokenomics";
import Empowering from "@/components/Sections/Empowering";
import Initialcoin from "@/components/Sections/Initialcoin";
import Roadmap from "@/components/Sections/Roadmap";
import Whitepaper from "@/components/Sections/Whitepaper";
import Faq from "@/components/Sections/Faq";
import Test from "@/components/Sections/Test";

export default function Home() {
  return (
    <main className="bg-[#1D1D24] w-full min-h-screen relative">
      <Navbar />
      <div id="introduction">
        <Herosection />
      </div>
      <MarqueeUi />
      <div id="services">
        <Buyinco />
        <Whyinco />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="donatenow">
        <Empowering />
      </div>
      <div id="stages">
        <Initialcoin />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="whitepaper">
        <Whitepaper />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </main>
    // <Test />
  );
}
