import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ContextProvider from "@/context";

// Import translations directly from our translations directory
import enTranslations from "@/translations/en.json";
import esTranslations from "@/translations/es.json";
import arTranslations from "@/translations/ar.json";

const translations = {
  en: {
    common: enTranslations,
  },
  es: {
    common: esTranslations,
  },
  ar: {
    common: arTranslations,
  },
};

export const metadata = {
  title: "Harambergine",
  description: "HaramBergine - Meme Coin with a Purpose",
  icons: {
    icon: "./heroimage.png",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LanguageProvider translations={translations} defaultLocale="en">
        <body className="bg-[#1D1D24] text-white overflow-x-hidden">
          <ContextProvider cookies={null}>{children}</ContextProvider>
        </body>
      </LanguageProvider>
    </html>
  );
}
