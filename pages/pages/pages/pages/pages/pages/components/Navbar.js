import Link from 'next/link'

export default function Navbar(){
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="logo" />
          <Link href="/"><a className="brand-text">Fito Investments</a></Link>
        </div>
        <nav>
          <Link href="/invest"><a>Invest</a></Link>
          <Link href="/dashboard"><a>Dashboard</a></Link>
          <Link href="/terms"><a>Terms</a></Link>
          <Link href="/login"><a className="btn-link">Login</a></Link>
        </nav>
      </div>
    </header>
  )
}
