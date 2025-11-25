import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main className="container hero">
        <div className="left">
          <h1 className="title">Fito Investments</h1>
          <p className="lead">Premium crypto-backed investment contracts — secure, transparent, modern.</p>
          <div className="cta-row">
            <Link href="/invest"><a className="btn primary">Get Started</a></Link>
            <Link href="/dashboard"><a className="btn ghost">Dashboard</a></Link>
          </div>
        </div>
        <div className="right card">
          <h3>Estimated Returns</h3>
          <div className="large neon">7% — 9% APR</div>
          <div className="muted">Terms 1 — 5 years · Min $150 · Max $10,000</div>
        </div>
      </main>
    </div>
  )
}
