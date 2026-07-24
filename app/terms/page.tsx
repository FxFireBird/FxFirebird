"use client"

import { useTranslation } from "@/lib/i18n"
import Link from "next/link"

export default function TermsPage() {
  const { t } = useTranslation()

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">{t("terms.title")}</h1>
          <p className="text-base text-muted-foreground max-w-3xl">
            {t("terms.intro")}
          </p>
        </div>

        <section className="space-y-3 rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">{t("terms.useOfService.title")}</h2>
          <p className="text-sm leading-7 text-muted-foreground">
            {t("terms.useOfService.desc")}
          </p>
        </section>

        <section className="space-y-3 rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">{t("terms.userResponsibilities.title")}</h2>
          <p className="text-sm leading-7 text-muted-foreground">
            {t("terms.userResponsibilities.desc")}
          </p>
        </section>

        <section className="space-y-3 rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">{t("terms.liability.title")}</h2>
          <p className="text-sm leading-7 text-muted-foreground">
            {t("terms.liability.desc")}
          </p>
        </section>

        <Link href="/" className="text-sm text-[#FF6B00] hover:underline">
          {t("terms.backHome")}
        </Link>
      </div>
    </main>
  )
}
