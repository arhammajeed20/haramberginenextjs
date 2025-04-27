import BuyWingCard from "../Card/ButWingcard";
import TokenInfoCard from "../Card/TokenInfoCard";

export default function Humanity() {
  return (
    <div
      id="presale"
      className="py-16 bg-gradient-to-b from-black to-purple-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className=" p-6 flex items-center justify-center ">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 inline-block px-4 py-2">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Humanity was not ready.
              </h2>
            </div>
          </div>

          <p className="text-xl text-gray-200 text-shadow-light">
            But the presale has begun.
          </p>
          <div className="mt-4 bg-purple-900/30 p-3 rounded-md max-w-2xl mx-auto">
            <p className="text-yellow-400 font-medium">🍆 Fair warning:</p>
            <p className="text-gray-300 mt-1">
              Presale = Dump?
              <br />
              It might genuinely go up.
              <br />
              Smart contract designed for the inevitable dump
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto w-full" id="presale-widget">
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-none">
            <TokenInfoCard />

            <BuyWingCard />
          </div>
        </div>
      </div>
    </div>
  );
}
