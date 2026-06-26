import { Link } from 'react-router-dom'

export default function SteelStructures() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/fabrication.jpeg)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>Steel Structures Fabrication</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / <Link to="/services/steel-structures">Services</Link> / Steel Structures</div>
      <section className="me-section container">
        <div className="me-split">
          <div className="me-split__text">
            <h2>Quality Steel Fabrication</h2>
            <p>We pride ourselves in quality fabrication of a wide range of steel structures tailored to client specifications.</p>
            <ul className="me-checklist">
              <li>High mast floodlight poles</li>
              <li>Street light poles</li>
              <li>Billboard masts</li>
              <li>Control pillar enclosures</li>
              <li>Monkey ladders</li>
              <li>Lorry body works</li>
              <li>Customized steel structures</li>
            </ul>
            <Link to="/contact" className="me-btn me-btn--primary mt-3">Get a Quote</Link>
          </div>
          <div className="me-split__image">
            <img src="/assets/custom/images/match/MATCH-213.jpg" alt="Steel Fabrication" />
          </div>
        </div>
      </section>
    </>
  )
}
