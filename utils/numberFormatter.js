"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export function useNumberFormatter() {
  const { locale } = useLanguage()

  const formatNumber = (number, options = {}) => {
    return new Intl.NumberFormat(locale, options).format(number)
  }

  const formatCurrency = (number, currency = "USD", options = {}) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      ...options,
    }).format(number)
  }

  const formatPercentage = (number, options = {}) => {
    return new Intl.NumberFormat(locale, {
      style: "percent",
      ...options,
    }).format(number / 100)
  }

  return {
    formatNumber,
    formatCurrency,
    formatPercentage,
  }
}
