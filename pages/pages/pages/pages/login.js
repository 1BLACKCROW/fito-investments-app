import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

export default function Login(){
  const [email,setEmail]=useState(''), [password,setPassword]=useState('')
  async function doLogin(){
    try{
      const base = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'
      const r = await axios.post(base + '/api/auth/login', { email, password })
      alert('Logged in (demo): token length ' + (r.data.token ? r.data.token.length : '0'))
    }catch(e){ alert('Login failed') }
  }
  return (
    <div className="page">
      <Navbar />
      <div className="container card form">
        <h2>Login</h2>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn primary" onClick={doLogin}>Login</button>
      </div>
    </div>
  )
}
