"use client"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

const Features = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: "🔒",
      title: t("features.feature1.title"),
      description: t("features.feature1.description"),
    },
    {
      icon: "🚀",
      title: t("features.feature2.title"),
      description: t("features.feature2.description"),
    },
    {
      icon: "💰",
      title: t("features.feature3.title"),
      description: t("features.feature3.description"),
    },
  ]

  return (
    <div>
      <div className="text-center py-10">
        <div className="text-4xl font-bold py-5">{t("features.title")}</div>
        <div className="text-xl">{t("features.subtitle")}</div>
      </div>
      <div className="mx-auto max-w-7xl py-10 px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-[#581c8733] border border-[#581c87] rounded-lg hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_10px_rgba(170,0,255,0.7)] mb-4">
                {feature.icon}
              </div>
              <div className="text-2xl text-center font-bold mb-2">{feature.title}</div>
              <div className="text-center text-lg text-gray-300">{feature.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
