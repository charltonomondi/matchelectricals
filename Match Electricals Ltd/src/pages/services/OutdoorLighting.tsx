import { Link } from 'react-router-dom'

export default function OutdoorLighting() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/lighting3.jpeg)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>Outdoor &amp; Public Lighting</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / <Link to="/services/outdoor-public-lighting">Services</Link> / Outdoor Lighting</div>
      <section className="me-section container">
        <div className="me-split">
          <div className="me-split__image">
            <img src="/assets/custom/images/match/highmast-500x500.webp" alt="High Mast Lighting" />
          </div>
          <div className="me-split__text">
            <h2>Security &amp; Public Lighting Solutions</h2>
            <p>Match Electricals Ltd has positioned itself as a provider of quality security lighting solutions to meet the ever growing demand for outdoor and public lighting.</p>
            <ul className="me-checklist">
              <li>High mast floodlight design, supply &amp; installation</li>
              <li>Street lighting systems</li>
              <li>Security &amp; perimeter lighting</li>
              <li>Solar-powered outdoor lighting</li>
              <li>LED retrofit and upgrades</li>
              <li>Maintenance &amp; performance contracts</li>
            </ul>
            <Link to="/contact" className="me-btn me-btn--primary mt-3">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
