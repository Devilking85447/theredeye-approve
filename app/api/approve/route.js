import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://nwimizgdukcyynqdgfzx.supabase.co',
  'sb_publishable_m7FZOWhw93e_X81uKF7YQg_UCu17YBy'
)

export async function POST(req){
  const { email } = await req.json()
  if(!email) return Response.json({ success: false, error: 'email missing' })
  
  const { error } = await supabase
    .from('users')
    .upsert({ email: email.toLowerCase().trim(), is_premium: true }, { onConflict: 'email' })
  
  if(error) return Response.json({ success: false, error: error.message })
  return Response.json({ success: true })
}
