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

export default function Home() {
  return (
    <main className="bg-[#1D1D24] w-full min-h-screen relative">
      <Navbar />
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
    </main>
    // <Test />
  );
}
