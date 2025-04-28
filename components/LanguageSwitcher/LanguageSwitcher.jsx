"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export default function LanguageSwitcher() {
  const { locale, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center  px-4"
      >
        <img src="/world.png " className="h-5 w-5" alt="" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-black border border-purple-700 rounded-md shadow-lg z-50">
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() => {
                    changeLanguage(language.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-purple-900/30 flex items-center space-x-2 ${
                    locale === language.code ? "bg-purple-900/50" : ""
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
