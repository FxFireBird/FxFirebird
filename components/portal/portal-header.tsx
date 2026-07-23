"use client"

import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Sun, Moon, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortalHeader() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const handleLogout = () => {
    window.localStorage.removeItem("fxfirebird-authenticated")
    window.localStorage.removeItem("fxfirebird-user-email")
    router.replace("/login")
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6B00]">
              <img src="/logo1.png" alt="FxFirebird" className="h-5 w-5 object-contain" />
            </div>
            <span className="text-xl font-semibold text-foreground tracking-tight">FxFirebird</span>
          </button>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 block dark:hidden" />
            </button>

            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
