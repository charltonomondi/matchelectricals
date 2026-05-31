import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero Video */}
      <section className="me-hero">
        <video autoPlay muted playsInline loop preload="none" className="me-hero__video">
          <source src="/assets/custom/videos/Match Electricals Ltd.mp4" type="video/mp4" />
        </video>
        <div className="me-hero__overlay" />
        <div className="me-hero__content">
          <h1>Powering Kenya's Infrastructure</h1>
          <p>Leading electro-mechanical contractor &amp; supplier — NCA Class A licensed</p>
          <Link to="/contact" className="me-btn me-btn--primary">Get In Touch</Link>
        </div>
      </section>

      {/* Services */}
      <section className="me-section container">
        <div className="me-section__header text-center">
          <h2>Our Services</h2>
          <p>Registered with the National Construction Authority — licensed Class A &amp; Energy Regulatory Board NCA1.</p>
        </div>
        <div className="me-cards">
          {[
            { icon: 'fas fa-lightbulb', title: 'Outdoor Lighting', desc: 'Quality security and public lighting solutions for growing demand.', to: '/services/outdoor-public-lighting' },
            { icon: 'fa fa-industry', title: 'Steel Structures Fabrication', desc: 'High mast floodlights, streetlights, billboards, monkey ladders and custom steel structures.', to: '/services/steel-structures' },
            { icon: 'fas fa-bolt', title: 'High & Low Voltage Solutions', desc: 'Design, supply, installation and commissioning of Grid/Solar photovoltaic generation plants.', to: '/services/high-low-voltage' },
            { icon: 'fas fa-truck-monster', title: 'Man Lifts & Cranes', desc: 'Supply and operation of man lifts and cranes for elevated work and heavy lifting.', to: '/services/man-lifts-and-cranes' },
          ].map(s => (
            <Link to={s.to} key={s.title} className="me-card">
              <div className="me-card__icon"><i className={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="me-card__cta">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="me-section me-section--alt">
        <div className="container me-split">
          <div className="me-split__text">
            <p className="me-eyebrow">Why</p>
            <h2>Choose <span>Us</span></h2>
            <p>Choosing the right electro-mechanical contractor is crucial for quality, safety, efficiency, and reliability.</p>
            <ul className="me-checklist">
              {['Qualified and Experienced Electricians', 'Cutting-edge Technology and Techniques', 'Timely and Reliable Services', 'Customer Satisfaction Guarantee', 'Commitment to Safety Standards'].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="me-split__cta">
            <div className="me-cta-box">
              <p>Let's Grow</p>
              <h2>Together</h2>
              <p>We work closely with Engineering Consultants, Architects, and Main Contractors. Success is anchored in our qualified team and strong communication channels.</p>
              <Link to="/learn-more" className="me-btn me-btn--primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="me-banner" style={{ backgroundImage: 'url(/assets/custom/images/match/roadwork.webp)' }}>
        <div className="me-banner__overlay" />
        <div className="me-banner__content">
          <h2>We are the best Electro-mechanical Contractor and Supplier!</h2>
          <p>Top class service, installation standards and fabrication.</p>
          <Link to="/contact" className="me-btn me-btn--primary">Contact Us</Link>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="me-section container">
        <h2 className="text-center mb-4">Latest Projects</h2>
        <div className="me-projects">
          {[
            { img: '/assets/custom/images/match/highmast-500x500.webp', title: 'Outdoor Lighting', to: '/services/outdoor-public-lighting', date: 'November 22, 2023' },
            { img: '/assets/custom/images/match/MATCH-213.jpg', title: 'Steel Structures Fabrication', to: '/services/steel-structures', date: 'December 27, 2017' },
            { img: '/assets/custom/images/match/electricalworks.jpg', title: 'High & Low Voltage Solution', to: '/services/high-low-voltage', date: 'December 27, 2017' },
          ].map(p => (
            <div key={p.title} className="me-project-card">
              <Link to={p.to}><img src={p.img} alt={p.title} /></Link>
              <div className="me-project-card__body">
                <span className="me-project-card__date">{p.date}</span>
                <h3><Link to={p.to}>{p.title}</Link></h3>
                <Link to={p.to} className="me-link">Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
