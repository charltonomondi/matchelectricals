import { Link } from 'react-router-dom'

export default function HighLowVoltage() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/voltage.png)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>High &amp; Low Voltage Solutions</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / <Link to="/services/high-low-voltage">Services</Link> / High &amp; Low Voltage</div>
      <section className="me-section container">
        <div className="me-split">
          <div className="me-split__text">
            <h2>Power Distribution &amp; Electrical Works</h2>
            <p>We design and construct power distribution lines, supply, install and service transformers. Our team handles everything from grid connections to solar photovoltaic generation plants.</p>
            <ul className="me-checklist">
              <li>Design &amp; construction of power distribution lines</li>
              <li>Supply, installation &amp; servicing of transformers</li>
              <li>Grid/Solar PV generation plant commissioning</li>
              <li>High &amp; low voltage switchgear installation</li>
              <li>Underground cable laying</li>
              <li>Rural electrification projects</li>
            </ul>
            <Link to="/contact" className="me-btn me-btn--primary mt-3">Get a Quote</Link>
          </div>
          <div className="me-split__image">
            <img src="/assets/custom/images/match/electricalworks.jpg" alt="Electrical Works" />
          </div>
        </div>
      </section>
    </>
  )
}
