const trophyStats = [
  { num: '13', label: 'League Titles' },
  { num: '14', label: 'FA Cups' },
  { num: '2', label: 'League Cups' },
  { num: '1', label: "Cup Winners' Cup" },
]

import arsenalCrest from '../assets/arsenal-crest.png'

export default function Hero() {
  return (
    <div className="hero">
      <img className="cannon-icon" src={arsenalCrest} alt="Arsenal FC crest" />
      <h1>Arsenal FC</h1>
      <p className="sub">139 Years of The Gunners · 1886 — 2025</p>
      <div className="trophy-count">
        {trophyStats.map((stat) => (
          <div className="trophy-stat" key={stat.label}>
            <div className="num">{stat.num}</div>
            <div className="lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
