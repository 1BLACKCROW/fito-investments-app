import { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

export default function Invest() {
  const [fullName,setFullName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [address,setAddress]=useState('')
  const [password,setPassword]=useState('')
  const [security,setSecurity]=useState('')
  const [promo,setPromo]=useState('')
  const [accepted,setAccepted]=useState(false)

  async function signup(){
    if(!accepted){ alert('Please accept terms'); return }
    try{
      const base = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'
      const r = await axios.post(base + '/api/auth/signup', {
        full_name: fullName, phone, address, email, password, security_phrase: security, promo_code: promo, accept_terms: accepted
      })
      alert('Signed up: ' + (r.data.id || 'OK'))
    }catch(e){
      alert('Error: ' + (e.response?.data?.error || e.message))
    }
  }

  return (
    <div className="page">
      <Navbar />
      <div className="container card form">
        <h2>Create account</h2>
        <input placeholder="Full name" value={fullName} onChange={e=>setFullName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Phone number" value={phone} onChange={e=>setPhone(e.target.value)} />
        <input placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <input placeholder="Security phrase" value={security} onChange={e=>setSecurity(e.target.value)} />
        <input placeholder="Promo code (optional)" value={promo} onChange={e=>setPromo(e.target.value)} />
        <label className="muted"><input type="checkbox" checked={accepted} onChange={e=>setAccepted(e.target.checked)} /> I accept the terms</label>
        <div style={{marginTop:12}}>
          <button className="btn primary" onClick={signup}>Create Account</button>
        </div>
      </div>
    </div>
  )
}
