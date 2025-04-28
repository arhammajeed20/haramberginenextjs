"use client"

import { useLanguage } from "@/contexts/LanguageContext"

const Roadmap = () => {
  const { t } = useLanguage()

  return (
    <div id="roadmap" className="py-16 bg-gradient-to-b from-black to-purple-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-white">{t("roadmap.title").split("map")[0]}</span>
            <span className="text-yellow-500">map</span>
          </h2>

          {/* Timeline Line */}
          <div className="relative">
            {/* Hidden on small screens, shown on medium and larger */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-300px)] w-1 bg-purple-700 z-0"></div>

            {/* Timeline Phases */}
            {[
              {
                quarter: "2025 Q1",
                phaseTitle: t("roadmap.phase1.title"),
                status: t("roadmap.phase1.status"),
                statusColor: "text-green-500",
                borderColor: "border-green-500",
                bgColor: "bg-green-500",
                items: t("roadmap.phase1.items"),
                side: "left",
              },
              {
                quarter: "2025 Q2",
                phaseTitle: t("roadmap.phase2.title"),
                status: t("roadmap.phase2.status"),
                statusColor: "text-yellow-500",
                borderColor: "border-yellow-500",
                bgColor: "bg-yellow-500",
                items: t("roadmap.phase2.items"),
                side: "right",
              },
              {
                quarter: "2025 Q3",
                phaseTitle: t("roadmap.phase3.title"),
                status: null,
                statusColor: "",
                borderColor: "border-purple-700",
                bgColor: "bg-purple-500",
                items: t("roadmap.phase3.items"),
                side: "left",
              },
              {
                quarter: "2025 Q4",
                phaseTitle: t("roadmap.phase4.title"),
                status: null,
                statusColor: "",
                borderColor: "border-purple-700",
                bgColor: "bg-purple-500",
                items: t("roadmap.phase4.items"),
                side: "right",
              },
              {
                quarter: "2026 Q1",
                phaseTitle: t("roadmap.phase5.title"),
                status: null,
                statusColor: "",
                borderColor: "border-purple-700",
                bgColor: "bg-purple-500",
                items: t("roadmap.phase5.items"),
                side: "left",
              },
            ].map((phase, index) => (
              <div key={index} className="relative mb-16">
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 ${phase.bgColor} ${phase.borderColor} z-10`}
                ></div>

                <div
                  className={`flex flex-col md:flex-row ${
                    phase.side === "right" ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center`}
                >
                  <div className={`${phase.side === "right" ? "text-left pl-8" : "text-right pr-8"} w-full md:w-1/4`}>
                    <div className="bg-purple-900/50 inline-block px-4 py-2 rounded-full">
                      <span className="font-bold text-yellow-500">{phase.quarter}</span>
                    </div>
                  </div>

                  <div className="w-1/4 md:w-1/2"></div>

                  <div className="w-full md:w-1/2">
                    <div
                      className={`rounded-lg text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-2 ${phase.borderColor}`}
                    >
                      <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">
                          {phase.phaseTitle}
                          {phase.status && <span className={`ml-2 ${phase.statusColor}`}>{phase.status}</span>}
                        </h2>
                        <ul className="space-y-2">
                          {phase.items.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span
                                className={`inline-block w-5 h-5 rounded-full mr-2 flex-shrink-0 ${
                                  idx < 2 || phase.statusColor ? phase.bgColor : "bg-gray-700"
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
                    <h2 className="text-2xl font-bold mb-4 text-center">{t("roadmap.spaceConquest.title")}</h2>
                    <p className="text-gray-300 text-center mb-6">{t("roadmap.spaceConquest.description")}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          title: t("roadmap.spaceConquest.guardian"),
                          description: t("roadmap.spaceConquest.guardianDesc"),
                        },
                        {
                          title: t("roadmap.spaceConquest.resurrection"),
                          description: t("roadmap.spaceConquest.resurrectionDesc"),
                        },
                        {
                          title: t("roadmap.spaceConquest.revolution"),
                          description: t("roadmap.spaceConquest.revolutionDesc"),
                        },
                      ].map((card, idx) => (
                        <div key={idx} className="bg-purple-800/30 p-4 rounded-lg text-center">
                          <h3 className="font-bold mb-2">{card.title}</h3>
                          <p className="text-sm text-gray-400">{card.description}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-center text-yellow-400 mt-6 italic">{t("roadmap.spaceConquest.quote")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
