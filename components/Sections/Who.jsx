"use client";

import { useLanguage } from "@/context/LanguageContext";

const Who = () => {
  const { t } = useLanguage();

  return (
    <div id="who" className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-white">
            {t("who.title").split("Harambergine")[0]}
          </span>
          <span className="text-yellow-500">Harambergine?</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-500/50 blur-2xl animate-pulse" />
              <div className="relative z-10">
                <img
                  alt="Harambergine Image"
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  className="mx-auto animate-[bounce_6s_ease-in-out_infinite]"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0-dxs5zsUH9gTo6NsuLhfKyj4BI2s7Yi.png"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {t("who.birth.title")}
                </h3>
                <p className="text-gray-300 mb-4">
                  {t("who.birth.description1")}
                </p>
                <p className="text-gray-300">{t("who.birth.description2")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {t("who.legacy.title")}
              </h3>
              <p className="text-gray-300">{t("who.legacy.description")}</p>
            </div>
          </div>

          <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {t("who.symbolism.title")}
              </h3>
              <p className="text-gray-300">{t("who.symbolism.description")}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700 mb-12">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-center">
              {t("who.mission.title")}
            </h3>
            <p className="text-gray-300 text-center mb-6">
              {t("who.mission.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-purple-800/30 rounded-lg">
                <h4 className="font-bold mb-2">{t("who.mission.guardian")}</h4>
                <p className="text-sm text-gray-300">
                  {t("who.mission.guardianDesc")}
                </p>
              </div>

              <div className="p-4 bg-purple-800/30 rounded-lg">
                <h4 className="font-bold mb-2">
                  {t("who.mission.practicality")}
                </h4>
                <p className="text-sm text-gray-300">
                  {t("who.mission.practicalityDesc")}
                </p>
              </div>

              <div className="p-4 bg-purple-800/30 rounded-lg">
                <h4 className="font-bold mb-2">
                  {t("who.mission.resurrection")}
                </h4>
                <p className="text-sm text-gray-300">
                  {t("who.mission.resurrectionDesc")}
                </p>
              </div>
            </div>

            <p className="text-center text-yellow-400 mt-6 italic font-medium">
              {t("who.mission.quote")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
