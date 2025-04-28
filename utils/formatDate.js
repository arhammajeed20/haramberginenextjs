import { format, formatRelative, formatDistance } from "date-fns"
import { enUS, es } from "date-fns/locale"

const locales = {
  en: enUS,
  es: es,
}

export function formatDate(date, formatStr, locale = "en") {
  return format(date, formatStr, {
    locale: locales[locale] || enUS,
  })
}

export function formatRelativeDate(date, baseDate, locale = "en") {
  return formatRelative(date, baseDate, {
    locale: locales[locale] || enUS,
  })
}

export function formatDistanceDate(date, baseDate, options = {}, locale = "en") {
  return formatDistance(date, baseDate, {
    locale: locales[locale] || enUS,
    ...options,
  })
}
