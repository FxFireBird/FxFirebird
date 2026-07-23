import { NextResponse } from "next/server"
import { supabaseServer, storageBucket } from "@/lib/supabase-server"

export async function POST(request: Request) {
  const formData = await request.formData()
  const transactionId = formData.get("transactionId")?.toString().trim()
  const selectedPlan = formData.get("selectedPlan")?.toString().trim()
  const selectedPayment = formData.get("selectedPayment")?.toString().trim()
  const proof = formData.get("proof")

  if (!transactionId || !selectedPlan || !selectedPayment || !proof || !(proof instanceof File)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const filename = proof.name.replace(/[^a-zA-Z0-9_.-]/g, "-")
  const filePath = `proofs/${Date.now()}-${filename}`
  const fileBuffer = Buffer.from(await proof.arrayBuffer())

  const { error: uploadError } = await supabaseServer.storage
    .from(storageBucket)
    .upload(filePath, fileBuffer, {
      contentType: proof.type,
      cacheControl: "3600",
      upsert: false,
    })

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 })
  }

  const { data: urlData, error: urlError } = await supabaseServer.storage
    .from(storageBucket)
    .getPublicUrl(filePath)

  if (urlError || !urlData?.publicUrl) {
    return NextResponse.json({ error: urlError?.message ?? "Unable to create proof URL" }, { status: 500 })
  }

  const { data, error: insertError } = await supabaseServer
    .from("license_verifications")
    .insert([
      {
        transaction_id: transactionId,
        selected_plan: selectedPlan,
        selected_payment: selectedPayment,
        proof_url: urlData.publicUrl,
      },
    ])
    .select("*")
    .single()

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, record: data })
}
