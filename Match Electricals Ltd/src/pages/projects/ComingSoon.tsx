import { Link } from 'react-router-dom'

export default function ComingSoon() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/field.jpg)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>Up &amp; Coming Projects</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / Projects / Up &amp; Coming</div>
      <section className="me-section container text-center">
        <div className="me-coming-soon">
          <i className="fas fa-hard-hat" />
          <h2>Coming Soon</h2>
          <p>We are working on exciting new projects. Stay tuned for updates.</p>
          <Link to="/contact" className="me-btn me-btn--primary">Get In Touch</Link>
        </div>
      </section>
    </>
  )
}
