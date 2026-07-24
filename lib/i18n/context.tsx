"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import { type Locale, getTranslation, languages, locales } from "./translations"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  languages: typeof languages
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children, defaultLocale }: { children: ReactNode; defaultLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return defaultLocale ?? "en"
    const storedLocale = localStorage.getItem("fxfirebird-locale") as Locale | null
    if (storedLocale && locales.includes(storedLocale)) return storedLocale
    const browserLocale = (navigator.language || navigator.userLanguage || "en").split("-")[0] as Locale
    if (locales.includes(browserLocale)) return browserLocale
    return defaultLocale ?? "en"
  })

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const storedLocale = localStorage.getItem("fxfirebird-locale") as Locale | null
    if (storedLocale && locales.includes(storedLocale)) {
      setLocaleState(storedLocale)
      return
    }

    const browserLocale = (navigator.language || navigator.userLanguage || defaultLocale).split("-")[0] as Locale
    if (locales.includes(browserLocale)) {
      setLocaleState(browserLocale)
    }
  }, [defaultLocale])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("fxfirebird-locale", newLocale)
    }
  }, [])

  const t = useCallback((key: string) => {
    return getTranslation(locale, key)
  }, [locale])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, languages }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

export function useTranslation() {
  const { t, locale } = useI18n()
  return { t, locale }
}
