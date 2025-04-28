"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export function useDateFormatter() {
  const { locale } = useLanguage()

  const formatDate = (date, options = {}) => {
    return new Date(date).toLocaleDateString(locale, options)
  }

  const formatTime = (date, options = {}) => {
    return new Date(date).toLocaleTimeString(locale, options)
  }

  const formatDateTime = (date, options = {}) => {
    return new Date(date).toLocaleString(locale, options)
  }

  const formatRelativeTime = (date) => {
    const now = new Date()
    const diff = now - new Date(date)

    // Convert milliseconds to seconds
    const seconds = Math.floor(diff / 1000)

    if (seconds < 60) {
      return locale === "en" ? "just now" : "ahora mismo"
    }

    // Convert to minutes
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) {
      return locale === "en"
        ? `${minutes} minute${minutes !== 1 ? "s" : ""} ago`
        : `hace ${minutes} minuto${minutes !== 1 ? "s" : ""}`
    }

    // Convert to hours
    const hours = Math.floor(minutes / 60)
    if (hours < 24) {
      return locale === "en"
        ? `${hours} hour${hours !== 1 ? "s" : ""} ago`
        : `hace ${hours} hora${hours !== 1 ? "s" : ""}`
    }

    // Convert to days
    const days = Math.floor(hours / 24)
    if (days < 30) {
      return locale === "en" ? `${days} day${days !== 1 ? "s" : ""} ago` : `hace ${days} día${days !== 1 ? "s" : ""}`
    }

    // Convert to months
    const months = Math.floor(days / 30)
    if (months < 12) {
      return locale === "en"
        ? `${months} month${months !== 1 ? "s" : ""} ago`
        : `hace ${months} mes${months !== 1 ? "es" : ""}`
    }

    // Convert to years
    const years = Math.floor(months / 12)
    return locale === "en" ? `${years} year${years !== 1 ? "s" : ""} ago` : `hace ${years} año${years !== 1 ? "s" : ""}`
  }

  return {
    formatDate,
    formatTime,
    formatDateTime,
    formatRelativeTime,
  }
}
