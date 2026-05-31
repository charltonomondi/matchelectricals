import { Link } from 'react-router-dom'

const domains = [
  { title: 'High & Low Voltage', img: '/assets/custom/images/match/electricalworks.jpg', to: '/services/high-low-voltage' },
  { title: 'Outdoor Lighting', img: '/assets/custom/images/match/highmast-500x500.webp', to: '/services/outdoor-public-lighting' },
  { title: 'Steel Structures', img: '/assets/custom/images/match/MATCH-213.jpg', to: '/services/steel-structures' },
  { title: 'Man Lifts & Cranes', img: '/assets/custom/images/match/manlift.jpg', to: '/services/man-lifts-and-cranes' },
]

export default function Store() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/pylon.jpg)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>Service Domains</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / Service Domains</div>
      <section className="me-section container">
        <div className="me-section__header text-center">
          <h2>All Service Domains</h2>
          <p>Explore our full range of electro-mechanical services.</p>
        </div>
        <div className="me-cards">
          {domains.map(d => (
            <Link to={d.to} key={d.title} className="me-card me-card--image">
              <img src={d.img} alt={d.title} />
              <div className="me-card__body"><h3>{d.title}</h3><span>Explore →</span></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
