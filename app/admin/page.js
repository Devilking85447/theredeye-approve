'use client'
import { useState } from 'react'

export default function Admin() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  async function approve() {
    if(!email) return
    setMsg('Approving...')
    const res = await fetch('/api/approve', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ email })
    })
    const data = await res.json()
    if(data.success) setMsg(`✅ ${email} is now PREMIUM`)
    else setMsg(`❌ Error: ${data.error}`)
  }

  return (
    <div style={{padding:30, fontFamily:'sans-serif'}}>
      <h2>RedEye Admin - Approve Premium</h2>
      <input 
        value={email} 
        onChange={e=>setEmail(e.target.value)} 
        placeholder="user ka email likho" 
        style={{padding:10, width:280, border:'1px solid black'}} 
      />
      <button onClick={approve} style={{padding:'10px 20px', marginLeft:10, background:'black', color:'white', cursor:'pointer'}}>
        APPROVE
      </button>
      <p style={{marginTop:20}}>{msg}</p>
    </div>
  )
}
