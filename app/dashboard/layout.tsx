"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { PortalHeader } from "@/components/portal/portal-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [authorized, setAuthorized] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    const auth = window.localStorage.getItem("fxfirebird-authenticated")
    if (auth === "true") {
      setAuthorized(true)
      return
    }

    router.replace("/login")
  }, [router])

  if (authorized === null) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <div className="rounded-3xl border border-border bg-card p-8 text-center">
          <p className="text-base">Redirecting to the login page...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
