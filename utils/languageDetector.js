export function detectBrowserLanguage(
  defaultLang = "en",
  supportedLangs = ["en", "es", "ar"]
) {
  if (typeof window === "undefined") {
    return defaultLang;
  }

  try {
    // Try to get from navigator
    const browserLang =
      navigator.language ||
      (navigator.languages && navigator.languages[0]) ||
      defaultLang;

    // Get just the language code (e.g., 'en' from 'en-US')
    const langCode = browserLang.split("-")[0];

    // Check if it's supported
    return supportedLangs.includes(langCode) ? langCode : defaultLang;
  } catch (error) {
    console.error("Error detecting browser language:", error);
    return defaultLang;
  }
}
