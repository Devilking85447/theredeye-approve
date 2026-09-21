'use client'
import { useState } from 'react'

export default function Admin() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  async function approve() {
    if (!email) {
      setMsg('Email likh pehle')
      return
    }
    setMsg('Approving...')
    try {
      const res = await fetch('/api/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setMsg(`${email} is now PREMIUM ✓`)
        setEmail('')
      } else {
        setMsg(`Error: ${data.error}`)
      }
    } catch (e) {
      setMsg(`Error: ${e.message}`)
    }
  }

  return (
    <div style={{ padding: 30 }}>
      <h2>RedEye Admin - Approve Premium</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="user ka email likho"
        style={{ padding: 10, width: 300, border: '1px solid #000' }}
      />
      <button onClick={approve} style={{ padding: '10px 20px', marginLeft: 8, cursor: 'pointer' }}>
        APPROVE
      </button>
      <p style={{ marginTop: 20, fontWeight: 'bold' }}>{msg}</p>
    </div>
  )
}
