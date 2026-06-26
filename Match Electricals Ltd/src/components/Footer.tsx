import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="me-footer">
      <div className="me-footer__top">
        <div className="container">
          <div className="me-footer__grid">
            {/* Brand */}
            <div className="me-footer__col">
              <img src={logo} alt="Match Electricals" className="me-footer__logo" />
              <p>
                Match Electricals Ltd — a leading electro-mechanical contractor and supplier,
                delivering top-notch services for commercial, industrial, private and public institutions.
              </p>
            </div>

            {/* Contact */}
            <div className="me-footer__col">
              <h3>Contact Us</h3>
              <p>📍 Thika Factory Office, P.O BOX 6086-1000<br />Munene Light Industrial Area, Kenyatta Highway</p>
              <p>📞 +254 721 732 586<br />+254 704 337 881<br />+254 792 588 488</p>
              <p>✉️ info@matchelectricals.co.ke<br />sales@matchelectricals.co.ke</p>
            </div>

            {/* Links */}
            <div className="me-footer__col">
              <h3>Explore</h3>
              <ul className="me-footer__links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services/outdoor-public-lighting">Services</Link></li>
                <li><Link to="/projects/timeline">Projects</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/learn-more">Get to Know</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="me-footer__bottom">
        <div className="me-footer__social">
          <a href="https://web.facebook.com/matchelectricals" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook" /></a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter" /></a>
          <a href="https://www.linkedin.com/company/101311534" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
          <a href="https://wa.me/+254704337881" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
        </div>
        <p>© {new Date().getFullYear()} Match Electricals Ltd — Kenya</p>
      </div>
    </footer>
  )
}
