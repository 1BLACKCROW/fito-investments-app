import Navbar from '../components/Navbar'
export default function Terms(){
  return (
    <div className="page">
      <Navbar />
      <div className="container card">
        <h2>Terms & FAQ</h2>
        <p><strong>Fito-Investments is not a bank.</strong> It acts as an intermediary for our financial partners. Fito-Investments cannot be held responsible for capital losses, delays, or blocks.</p>
        <h3>Withdrawal Policy</h3>
        <p>Withdrawals are allowed every 90 days.</p>
        <h3>Referral Program</h3>
        <p>Referrer earns +1% revenue and referred user receives $50 credited to balance.</p>
      </div>
    </div>
  )
}
