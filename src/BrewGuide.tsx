import { Link } from 'react-router-dom'
import './BrewGuide.css'

const METHODS = [
  {
    name: 'Pour Over',
    time: '3–4 min',
    temp: '93°C',
    grind: 'Medium-fine',
    ratio: '1:16',
    note: 'Slow, controlled pour. Reveals clarity and origin character more than any other method.',
  },
  {
    name: 'AeroPress',
    time: '1–2 min',
    temp: '85°C',
    grind: 'Medium-coarse',
    ratio: '1:12',
    note: 'Forgiving and fast. Lower temperature softens bright acidity — good for darker roasts.',
  },
  {
    name: 'French Press',
    time: '4 min',
    temp: '95°C',
    grind: 'Coarse',
    ratio: '1:14',
    note: 'Full immersion, unfiltered. More body and texture. Oils stay in the cup.',
  },
] as const

const VARIABLES = [
  {
    name: 'Grind',
    desc: 'The single biggest lever. Finer = more extraction = more flavour, up to the point of bitterness. Start here when dialling in.',
  },
  {
    name: 'Dose',
    desc: 'Weigh your coffee. Every time. Scoops are inconsistent. 15–18g is a typical starting point for a single cup.',
  },
  {
    name: 'Water',
    desc: 'Filtered tap water, not distilled. Minerals carry flavour. Temperature matters more for espresso than for filter methods.',
  },
  {
    name: 'Time',
    desc: 'The result, not the target. If extraction time is off, adjust grind first. Time follows from everything else.',
  },
] as const

export default function BrewGuide() {
  return (
    <div className="bg-page">
      <nav className="bg-nav">
        <span className="bg-brand">Brew Guide</span>
        <div className="bg-nav-links">
          <Link to="/coffee" className="bg-nav-link">Roastery</Link>
          <Link to="/" className="bg-nav-link">← Tasks</Link>
        </div>
      </nav>

      <section className="bg-hero">
        <div className="bg-hero-inner">
          <p className="bg-eyebrow">coffee : water</p>
          <h1 className="bg-ratio">1:15</h1>
          <p className="bg-hero-sub">
            The ratio everything else hangs from.<br />
            Get this right before you touch anything else.
          </p>
        </div>
      </section>

      <section className="bg-methods">
        <p className="bg-section-label">Methods</p>
        <div className="bg-method-grid">
          {METHODS.map(m => (
            <div className="bg-method-card" key={m.name}>
              <h3 className="bg-method-name">{m.name}</h3>
              <div className="bg-method-meta">
                <span className="bg-meta-item">
                  <span className="bg-meta-label">Grind</span>
                  <span className="bg-meta-val">{m.grind}</span>
                </span>
                <span className="bg-meta-item">
                  <span className="bg-meta-label">Temp</span>
                  <span className="bg-meta-val">{m.temp}</span>
                </span>
                <span className="bg-meta-item">
                  <span className="bg-meta-label">Time</span>
                  <span className="bg-meta-val">{m.time}</span>
                </span>
                <span className="bg-meta-item">
                  <span className="bg-meta-label">Ratio</span>
                  <span className="bg-meta-val">{m.ratio}</span>
                </span>
              </div>
              <p className="bg-method-note">{m.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-variables">
        <p className="bg-section-label">The four variables</p>
        <div className="bg-var-list">
          {VARIABLES.map(v => (
            <div className="bg-var-row" key={v.name}>
              <h4 className="bg-var-name">{v.name}</h4>
              <p className="bg-var-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-footer">
        <span className="bg-footer-text">Start with the ratio. Adjust one variable at a time.</span>
      </footer>
    </div>
  )
}
