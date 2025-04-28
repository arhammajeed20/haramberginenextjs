"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import Cookies from "js-cookie"
import { detectBrowserLanguage } from "@/utils/languageDetector"

type LanguageContextType = {
  locale: string
  changeLanguage: (locale: string) => void
  t: (key: string, namespace?: string) => string
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

type LanguageProviderProps = {
  children: ReactNode
  translations: Record<string, Record<string, Record<string, any>>>
  defaultLocale: string
}

export const LanguageProvider = ({ children, translations, defaultLocale }: LanguageProviderProps) => {
  const [locale, setLocale] = useState(defaultLocale)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get language from cookie or use browser language or default
    const savedLocale = Cookies.get("NEXT_LOCALE")
    const browserLocale = detectBrowserLanguage(defaultLocale, Object.keys(translations))
    const initialLocale = savedLocale || browserLocale

    // Only set if it's one of our supported locales
    if (Object.keys(translations).includes(initialLocale)) {
      setLocale(initialLocale)
    }

    setIsLoading(false)
  }, [defaultLocale, translations])

  const changeLanguage = (newLocale: string) => {
    if (newLocale !== locale && Object.keys(translations).includes(newLocale)) {
      Cookies.set("NEXT_LOCALE", newLocale, { expires: 365 })
      setLocale(newLocale)
    }
  }

  const t = (key: string, namespace = "common") => {
    try {
      const keys = key.split(".")
      let translation = translations[locale]?.[namespace]

      for (const k of keys) {
        if (!translation?.[k]) {
          console.warn(`Translation missing: ${namespace}:${key} for locale ${locale}`)
          return key
        }
        translation = translation[k]
      }

      return translation as string
    } catch (error) {
      console.error(`Error getting translation for ${key}:`, error)
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, t, isLoading }}>{children}</LanguageContext.Provider>
  )
}
