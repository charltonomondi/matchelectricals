import { Link } from 'react-router-dom'

export default function ManLifts() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/manlift.jpg)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>Man Lifts &amp; Cranes</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / <Link to="/services/man-lifts-and-cranes">Services</Link> / Man Lifts &amp; Cranes</div>
      <section className="me-section container">
        <div className="me-split">
          <div className="me-split__image">
            <img src="/assets/custom/images/match/manlift.jpg" alt="Man Lift" />
          </div>
          <div className="me-split__text">
            <h2>Elevated Access &amp; Heavy Lifting</h2>
            <p>We supply and operate man lifts and cranes for elevated work, heavy lifting, and installation projects across Kenya.</p>
            <ul className="me-checklist">
              <li>Boom lift and scissor lift hire</li>
              <li>Mobile crane operations</li>
              <li>Tower crane erection &amp; dismantling</li>
              <li>Elevated electrical installation works</li>
              <li>High mast pole erection</li>
            </ul>
            <Link to="/contact" className="me-btn me-btn--primary mt-3">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
