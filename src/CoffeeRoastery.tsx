import { Link } from 'react-router-dom'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import { Divider } from 'primereact/divider'
import 'primereact/resources/themes/lara-dark-amber/theme.css'
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './CoffeeRoastery.css'

const BEANS = [
  {
    name: 'Ethiopia Yirgacheffe',
    roast: 'Light',
    notes: ['Floral', 'Bergamot', 'Lemon zest'],
    altitude: '2,200m',
    process: 'Natural',
    region: 'Southern Ethiopia',
  },
  {
    name: 'Colombia Huila',
    roast: 'Medium',
    notes: ['Brown sugar', 'Red apple', 'Almond'],
    altitude: '1,800m',
    process: 'Washed',
    region: 'Huila Department',
  },
  {
    name: 'Guatemala Antigua',
    roast: 'Dark',
    notes: ['Dark chocolate', 'Cedar', 'Molasses'],
    altitude: '1,500m',
    process: 'Pulped natural',
    region: 'Antigua Valley',
  },
] as const

const STEPS = [
  {
    n: 1,
    title: 'We source directly.',
    body: 'No brokers, no middlemen. Every bean traced to a named farm and a named farmer. We visit origin once a year.',
  },
  {
    n: 2,
    title: 'We roast to order.',
    body: 'Your bag is never pre-roasted. We roast when you buy, so every order leaves at peak flavour.',
  },
  {
    n: 3,
    title: 'We ship within 48 hours.',
    body: 'Coffee stales fast. Your order leaves within 48 hours of the roast — not the purchase date.',
  },
] as const

type Roast = 'Light' | 'Medium' | 'Dark'

function roastSeverity(roast: Roast) {
  if (roast === 'Light') return 'success' as const
  if (roast === 'Medium') return 'warning' as const
  return 'danger' as const
}

export default function CoffeeRoastery() {
  return (
    <div className="cr-page">

      {/* Nav */}
      <nav className="cr-nav flex align-items-center justify-content-between px-5 py-4">
        <span className="cr-brand">Dark Roast Co.</span>
        <div className="flex gap-4 align-items-center">
          <Link to="/brew" className="cr-nav-link">Brew Guide</Link>
          <Link to="/" className="cr-nav-link">← Tasks</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="cr-hero">
        <div className="cr-drum" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="185" stroke="#B8924A" strokeWidth="0.8" strokeDasharray="6 10"/>
            <circle cx="200" cy="200" r="135" stroke="#B8924A" strokeWidth="0.6" strokeDasharray="3 8"/>
            <circle cx="200" cy="200" r="85"  stroke="#B8924A" strokeWidth="0.6"/>
            <line x1="200" y1="15"  x2="200" y2="385" stroke="#B8924A" strokeWidth="0.5"/>
            <line x1="15"  y1="200" x2="385" y2="200" stroke="#B8924A" strokeWidth="0.5"/>
            <line x1="69"  y1="69"  x2="331" y2="331" stroke="#B8924A" strokeWidth="0.5"/>
            <line x1="331" y1="69"  x2="69"  y2="331" stroke="#B8924A" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className="cr-hero-content">
          <h1 className="cr-headline">
            The roast<br />
            changes<br />
            <em className="cr-brass">everything.</em>
          </h1>
          <p className="cr-subline">
            Single-origin beans. Small-batch drum-roasted.<br />
            Shipped within 48 hours of the roast.
          </p>
          <Button
            label="Explore our coffees"
            outlined
            className="cr-cta-btn"
            onClick={() => document.getElementById('coffees')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </section>

      {/* Beans */}
      <section className="cr-beans" id="coffees">
        <p className="cr-section-label">Current offerings</p>
        <div className="grid mt-0">
          {BEANS.map(bean => (
            <div className="col-12 md:col-4" key={bean.name}>
              <Card
                className="cr-bean-card h-full"
                header={
                  <div className="px-4 pt-4">
                    <Tag
                      value={bean.roast}
                      severity={roastSeverity(bean.roast)}
                      className="cr-roast-tag"
                    />
                  </div>
                }
              >
                <h3 className="cr-bean-name mt-0 mb-1">{bean.name}</h3>
                <p className="cr-bean-region mt-0 mb-4">{bean.region}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {bean.notes.map(n => (
                    <span className="cr-note-chip" key={n}>{n}</span>
                  ))}
                </div>
                <div className="flex align-items-center gap-2">
                  <span className="cr-data-item">{bean.altitude}</span>
                  <span className="cr-data-sep">·</span>
                  <span className="cr-data-item">{bean.process}</span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="cr-process">
        <p className="cr-section-label">How we work</p>
        <div className="cr-steps-list">
          {STEPS.map((step, i) => (
            <div key={step.n}>
              {i > 0 && <Divider className="cr-step-divider" />}
              <div className="flex gap-4 py-4">
                <span className="cr-step-n">{step.n}</span>
                <div>
                  <h4 className="cr-step-title mt-0 mb-2">{step.title}</h4>
                  <p className="cr-step-desc mt-0 mb-0">{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="cr-footer flex align-items-center justify-content-between px-5 py-4">
        <span className="cr-footer-brand">Dark Roast Co.</span>
        <span className="cr-footer-copy">Roasted to order · Est. 2019</span>
      </footer>

    </div>
  )
}
