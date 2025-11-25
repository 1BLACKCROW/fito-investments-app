import Navbar from '../components/Navbar'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Line = dynamic(() => import('react-chartjs-2').then(m=>m.Line), { ssr: false })

export default function Dashboard(){
  const [data] = useState({
    labels: ['Day -3','Day -2','Day -1','Today'],
    datasets: [{ label: 'Daily earnings', data: [2.3,2.5,2.7,3.0], borderColor:'#0ea5ff', backgroundColor:'rgba(14,165,255,0.06)'}]
  })
  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <h2>Dashboard</h2>
        <div className="card glow" style={{padding:18}}>
          <div style={{display:'flex',gap:12}}>
            <div className="card small">
              <h4>Balance</h4>
              <div className="neon large">$1,250.00</div>
            </div>
            <div className="card" style={{flex:1}}>
              <h4>Daily earnings</h4>
              <div style={{height:200}}><Line data={data} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
