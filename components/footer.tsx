"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { t } = useTranslation()

  const footerLinks = {
    products: [
      { label: t("footer.bagayoda"), href: "#features" },
      { label: t("footer.freeTools"), href: "#tools" },
      { label: t("footer.downloads"), href: "#downloads" },
    ],
    support: [
      { label: t("footer.faq"), href: "#faq" },
      { label: t("footer.contact"), href: "mailto:support@fxfirebird.com" },
    ],
    legal: [
      { label: t("footer.privacy"), href: "/privacy" },
      { label: t("footer.terms"), href: "/terms" },
    ],
  }

  return (
    <footer className="border-t border-border bg-background dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">

          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <img
                src="/logo1.png"
                alt="FxFirebird"
                className="h-18 w-auto"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Professional trading infrastructure for serious traders.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {t("footer.products")}
            </h3>

            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {t("footer.support")}
            </h3>

            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {t("footer.legal")}
            </h3>

            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-border">

          <div className="space-y-3">

            <p className="text-xs text-muted-foreground">
              {new Date().getFullYear()} FxFirebird. {t("footer.rights")}
            </p>

            <p className="text-[11px] text-muted-foreground leading-relaxed">
              {t("footer.riskWarning")}
            </p>

          </div>

        </div>
      </div>
    </footer>
  )
}