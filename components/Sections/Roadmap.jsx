const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="py-16 bg-gradient-to-b from-black to-purple-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-white">Road</span>
            <span className="text-yellow-500">map</span>
          </h2>

          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-300px)] w-1 bg-purple-700 z-0"></div>

            {/* Timeline Phases */}
            {[
              {
                quarter: "2025 Q1",
                phaseTitle: "Phase 1: Planting the Seed 🌱",
                status: "(Completed)",
                statusColor: "text-green-500",
                borderColor: "border-green-500",
                bgColor: "bg-green-500",
                items: [
                  "Harambe's soul inhabits an eggplant",
                  "Smart contract development and audit",
                  "Website and social media launch",
                  "Community building begins",
                  "Presale preparation and marketing",
                ],
                side: "left",
              },
              {
                quarter: "2025 Q2",
                phaseTitle: "Phase 2: First Sprouts 🌿",
                status: "(In Progress)",
                statusColor: "text-yellow-500",
                borderColor: "border-yellow-500",
                bgColor: "bg-yellow-500",
                items: [
                  "First sprouts with presale",
                  "DEX liquidity pool creation",
                  "Initial marketing campaign",
                  "Community expansion",
                ],
                side: "right",
              },
              {
                quarter: "2025 Q3",
                phaseTitle: "Phase 3: Gorilla Awakening 🦍",
                status: null,
                statusColor: "",
                borderColor: "border-purple-700",
                bgColor: "bg-purple-500",
                items: [
                  "Community expansion and ecosystem building",
                  "DAO governance system construction",
                  "Partnership expansion",
                  "NFT collection launch",
                  "Global marketing campaign",
                ],
                side: "left",
              },
              {
                quarter: "2025 Q4",
                phaseTitle: "Phase 4: Eggplant Invasion 🍆",
                status: null,
                statusColor: "",
                borderColor: "border-purple-700",
                bgColor: "bg-purple-500",
                items: [
                  "Meme coin market domination",
                  "Cross-chain bridge development",
                  "Mobile app launch",
                  "Additional CEX listings",
                  "Large-scale community events",
                ],
                side: "right",
              },
              {
                quarter: "2026 Q1",
                phaseTitle: "Phase 5: Space Conquest 🚀",
                status: null,
                statusColor: "",
                borderColor: "border-purple-700",
                bgColor: "bg-purple-500",
                items: [
                  "CEX listing push",
                  "Harambergine metaverse development",
                  "DeFi service expansion",
                  "Global partnership building",
                  "Ecosystem fund creation",
                ],
                side: "left",
              },
            ].map((phase, index) => (
              <div key={index} className="relative mb-16">
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 ${phase.bgColor} ${phase.borderColor} z-10`}
                ></div>

                <div
                  className={`flex ${
                    phase.side === "right" ? "flex-row-reverse" : "flex-row"
                  } items-center`}
                >
                  <div
                    className={`${
                      phase.side === "right"
                        ? "text-left pl-8"
                        : "text-right pr-8"
                    } w-1/4`}
                  >
                    <div className="bg-purple-900/50 inline-block px-4 py-2 rounded-full">
                      <span className="font-bold text-yellow-500">
                        {phase.quarter}
                      </span>
                    </div>
                  </div>

                  <div className="w-1/4"></div>

                  <div className="w-1/2">
                    <div
                      className={`rounded-lg text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-2 ${phase.borderColor}`}
                    >
                      <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">
                          {phase.phaseTitle}
                          {phase.status && (
                            <span className={`ml-2 ${phase.statusColor}`}>
                              {phase.status}
                            </span>
                          )}
                        </h2>
                        <ul className="space-y-2">
                          {phase.items.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span
                                className={`inline-block w-5 h-5 rounded-full mr-2 flex-shrink-0 ${
                                  idx < 2 || phase.statusColor
                                    ? phase.bgColor
                                    : "bg-gray-700"
                                }`}
                              ></span>
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-16 pt-8 border-t border-purple-700 relative z-10">
              <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700 relative z-10">
                <div className="p-6">
                  <div className="absolute inset-0 bg-black"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                      Space Conquest 🚀
                    </h2>
                    <p className="text-gray-300 text-center mb-6">
                      Haramber gine aims to transcend beyond a simple meme coin
                      to become a transcendent meme entity. Our contract and
                      roadmap are continuously updated based on community
                      feedback and market conditions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          title: "Guardian of Memes",
                          description:
                            "Preserving internet culture and the spirit of memes",
                        },
                        {
                          title: "Soul Resurrection",
                          description: "Eternally remembering Harambe's soul",
                        },
                        {
                          title: "Eggplant Revolution",
                          description:
                            "Who decides the value of Harambe in a zoo?",
                        },
                      ].map((card, idx) => (
                        <div
                          key={idx}
                          className="bg-purple-800/30 p-4 rounded-lg text-center"
                        >
                          <h3 className="font-bold mb-2">{card.title}</h3>
                          <p className="text-sm text-gray-400">
                            {card.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="text-center text-yellow-400 mt-6 italic">
                      "Beyond the fence, nobody knows."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
