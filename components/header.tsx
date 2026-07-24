"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, ChevronDown, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { locale, setLocale, t, languages } = useI18n()

  const currentLang = languages.find(l => l.code === locale) || languages[0]

  const navLinks = [
    { href: "#features", label: t("nav.bagayoda") },
    { href: "#tools", label: t("nav.freeTools") },
    { href: "#downloads", label: t("nav.downloads") },
    { href: "#faq", label: t("nav.faq") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Always links to homepage */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center">
  <img
    src="/logo.png"
    alt="FxFirebird"
    className="h-10 w-10 object-contain"
  />
</div>
            <span className="text-xl font-semibold text-foreground tracking-tight">FxFirebird</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                <span className="text-base">{currentLang.flag}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-border bg-card shadow-lg overflow-hidden"
                  >
                    <div className="max-h-64 overflow-y-auto py-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLocale(lang.code)
                            setIsLangOpen(false)
                          }}
                          className={`flex w-full items-center gap-3 px-4 py-2 text-sm transition-colors ${
                            locale === lang.code
                              ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                              : "text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 block dark:hidden" />
            </button>

            {/* Login */}
            <Link
              href="/login"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nav.login")}
            </Link>

            {/* CTA */}
            <Link href="/license">
              <Button className="h-10 px-5 bg-[#FF6B00] text-white font-medium hover:bg-[#CC5500] transition-colors rounded-lg">
                {t("nav.getLicense")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 block dark:hidden" />
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border/50 bg-background lg:hidden"
          >
            <div className="space-y-1 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.login")}
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-border/50 mt-4">
                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {t("nav.language")}
                </p>
                <div className="grid grid-cols-5 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLocale(lang.code)}
                      className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
                        locale === lang.code
                          ? "bg-[#FF6B00]/10 ring-1 ring-[#FF6B00]/50"
                          : "hover:bg-muted/50"
                      }`}
                      title={lang.name}
                    >
                      <span className="text-lg">{lang.flag}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Link href="/license" onClick={() => setIsMenuOpen(false)} className="block pt-4">
                <Button className="w-full h-12 bg-[#FF6B00] text-white font-medium hover:bg-[#CC5500] rounded-lg">
                  {t("nav.getLicense")}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
