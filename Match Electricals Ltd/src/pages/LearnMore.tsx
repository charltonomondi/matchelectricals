import { Link } from 'react-router-dom'

export default function LearnMore() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/civil.jpg)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>Get to Know Us</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / Learn More</div>
      <section className="me-section container">
        <div className="me-split">
          <div className="me-split__text">
            <h2>About Match Electricals Ltd</h2>
            <p>Match Electricals Ltd is a well-established Electro-mechanical Contractor and Supplier offering top class service, installation standards and fabrication. We are registered with the National Construction Authority and licensed in the highest category "Class A" and by the Energy Regulatory Board of Kenya NCA1.</p>
            <p>With a commitment to quality, safety, customer focus and innovation, we bring power to your projects, ensuring seamless solutions for commercial, industrial, private and public institutions.</p>
            <Link to="/contact" className="me-btn me-btn--primary mt-3">Contact Us</Link>
          </div>
          <div className="me-split__image">
            <img src="/assets/custom/images/match/match4.jpeg" alt="Match Electricals" />
          </div>
        </div>
      </section>
    </>
  )
}
