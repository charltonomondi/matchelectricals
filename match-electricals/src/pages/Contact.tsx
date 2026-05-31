import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/contact6.jpeg)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>Contact Us</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / Contact</div>

      <section className="me-section container">
        <div className="me-contact-grid">
          <div className="me-contact-info">
            <div className="me-contact-block">
              <i className="fas fa-map-marker-alt" />
              <div>
                <h3>Address</h3>
                <p>Thika Factory Office, P.O BOX 6086-1000<br />Munene Light Industrial Area, Kenyatta Highway</p>
              </div>
            </div>
            <div className="me-contact-block">
              <i className="fas fa-phone" />
              <div>
                <h3>Call / WhatsApp</h3>
                <p>+254 721 732 586<br />+254 704 337 881<br />+254 792 588 488</p>
              </div>
            </div>
            <div className="me-contact-block">
              <i className="fas fa-envelope" />
              <div>
                <h3>Email</h3>
                <p>info@matchelectricals.co.ke<br />sales@matchelectricals.co.ke</p>
              </div>
            </div>
          </div>

          <form className="me-contact-form" action="https://formsubmit.co/sales@matchelectricals.co.ke" method="POST">
            <div className="me-form-row">
              <input type="text" name="FirstName" placeholder="First Name" required />
              <input type="text" name="LastName" placeholder="Last Name" required />
            </div>
            <div className="me-form-row">
              <input type="email" name="Email" placeholder="Email Address" required />
              <input type="text" name="Subject" placeholder="Subject" />
            </div>
            <div className="me-form-row">
              <input type="tel" name="Phone" placeholder="Phone Number" />
              <input type="text" name="Address" placeholder="Your Address" />
            </div>
            <textarea name="Message" placeholder="Your Message" rows={5} required />
            <button type="submit" className="me-btn me-btn--primary">Send Message</button>
          </form>
        </div>
      </section>

      <div className="me-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808!2d37.0!3d-1.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zThika!5e0!3m2!1sen!2ske!4v1"
          width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
          title="Match Electricals Location"
        />
      </div>
    </>
  )
}
