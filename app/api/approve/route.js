import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(req) {
  try {
    const { email } = await req.json()

    if (!email) {
      return Response.json({ success: false, error: 'email missing' }, { status: 400 })
    }

    const { error } = await supabase
      .from('users')
      .upsert(
        { email: email.toLowerCase().trim(), is_premium: true },
        { onConflict: 'email' }
      )

    if (error) {
      return Response.json({ success: false, error: error.message }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
