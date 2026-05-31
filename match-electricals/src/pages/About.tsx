import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/brt.jpg)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>About Us</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / About Us</div>

      <section className="me-section container text-center">
        <span className="me-eyebrow">Our Endeavour</span>
        <h2>Our Mission</h2>
        <p className="me-lead">To continuously deliver innovative, cutting-edge and eco-friendly electro-mechanical solutions to our private and public sector clients.</p>
      </section>

      <div className="me-image-pair">
        <img src="/assets/custom/images/match/field2.jpg" alt="Field work" />
        <img src="/assets/custom/images/match/field.jpg" alt="Field work" />
      </div>

      <section className="me-section container text-center">
        <span className="me-eyebrow">The Future</span>
        <h2>Our Vision</h2>
        <p className="me-lead">To be the leading electro-mechanical solutions provider.</p>
        <div className="me-stats">
          {[['507', 'Satisfied Clients'], ['100', 'Company Members'], ['55', 'Awards Won'], ['20+', 'Years Experience']].map(([n, l]) => (
            <div key={l} className="me-stat"><span className="me-stat__number">{n}</span><span className="me-stat__label">{l}</span></div>
          ))}
        </div>
      </section>

      <section className="me-section container text-center">
        <span className="me-eyebrow">Our Foundation</span>
        <h2>Core Values</h2>
        <div className="me-values">
          {['Uncompromising Quality', 'Customer Focus', 'Environmental Sustainability', 'Reliability', 'Efficiency', 'Social Responsibility'].map(v => (
            <div key={v} className="me-value-chip">{v}</div>
          ))}
        </div>
      </section>

      <section className="me-section me-section--dark">
        <div className="container me-split">
          <div className="me-split__text">
            <h2>We love what we do &amp; we do it with passion!</h2>
            <p>At Match Electricals Ltd, our commitment goes beyond wires and circuits — it's a passion for what we do that sets us apart. We love transforming challenges into solutions, illuminating spaces with creativity, and powering the future with innovation.</p>
            <Link to="/contact" className="me-btn me-btn--outline">Contact Us</Link>
          </div>
          <div className="me-split__image">
            <img src="/assets/custom/images/match/field.jpg" alt="Passion" />
          </div>
        </div>
      </section>
    </>
  )
}
