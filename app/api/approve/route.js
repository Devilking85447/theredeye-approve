import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function POST(req) {
  try {
    const { email } = await req.json()
    if (!email) {
      return Response.json({ error: 'Email missing' }, { status: 400 })
    }
    const { error } = await supabase
      .from('users')
      .upsert({ email: email, is_premium: true }, { onConflict: 'email' })

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }
    return Response.json({ success: true, message: 'Auto-approved!' })
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 })
  }
}
