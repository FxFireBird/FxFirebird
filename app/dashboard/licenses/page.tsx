import Link from "next/link"
import { supabaseServer } from "@/lib/supabase-server"

type LicenseRecord = {
  id: number
  transaction_id: string
  selected_plan: string
  selected_payment: string
  proof_url: string
  created_at: string
}

export default async function LicensesPage() {
  const { data, error } = await supabaseServer
    .from("license_verifications")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    return (
      <div className="min-h-screen bg-background dark:bg-black px-6 py-10">
        <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-8">
          <h1 className="text-3xl font-semibold text-foreground mb-4">Admin Payment Proofs</h1>
          <p className="text-destructive">Erreur Supabase : {error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background dark:bg-black px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">Payment proofs</h1>
            <p className="text-sm text-muted-foreground">Voir toutes les transactions envoyées par les utilisateurs.</p>
          </div>
          <Link href="/dashboard" className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground hover:bg-muted transition">
            Retour au dashboard
          </Link>
        </div>

        <div className="grid gap-6">
          {data?.length ? (
            data.map((record) => (
              <div key={record.id} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Transaction hash</p>
                    <p className="break-words text-lg font-semibold text-foreground">{record.transaction_id}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span className="rounded-full bg-muted px-3 py-1">Plan : {record.selected_plan}</span>
                    <span className="rounded-full bg-muted px-3 py-1">Paiement : {record.selected_payment}</span>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-[1fr_220px] md:items-start">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Preuve de paiement</p>
                    <div className="overflow-hidden rounded-3xl border border-border bg-[#111214]">
                      <img src={record.proof_url} alt={`Proof ${record.transaction_id}`} className="h-full w-full object-contain" />
                    </div>
                  </div>
                  <div className="space-y-3 rounded-3xl border border-border bg-[#090a0b] p-4">
                    <p className="text-sm text-muted-foreground">Enregistré le</p>
                    <p className="text-foreground">{new Date(record.created_at).toLocaleString()}</p>
                    <Link
                      href={record.proof_url}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-xl bg-[#FF6B00] px-4 py-2 text-sm font-medium text-white hover:bg-[#cc5500]"
                    >
                      Ouvrir l’image
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-3xl border border-border bg-card p-8 text-center">
              <p className="text-foreground text-lg font-medium">Aucune preuve de paiement reçue pour l’instant.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


