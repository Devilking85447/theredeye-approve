import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Email chahiye' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from('premium_users')
      .upsert({ email: email.toLowerCase(), is_premium: true });

    if (error) throw error;

    return NextResponse.json({ success: true, message: 'Approved!' });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
