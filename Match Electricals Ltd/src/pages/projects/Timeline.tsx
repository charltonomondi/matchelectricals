import { Link } from 'react-router-dom'

const timeline = [
  { year: '2017', items: [
    { img: '/assets/custom/images/match/port-reitz.jpg', title: 'Port Reitz / Moi Airport Road (C110)', desc: 'Design and construction of street lighting works.' },
    { img: '/assets/custom/images/match/mombasa-road.jpg', title: 'Mombasa Road (A104) Street Lighting', desc: 'Performance based contract — Nyayo Stadium to JKIA.' },
    { img: '/assets/custom/images/match/moi-mast.jpeg', title: 'Moi University High Masts', desc: 'Design, supply, erection, testing and commissioning of high mast floodlights.' },
  ]},
  { year: '2018', items: [
    { img: '/assets/custom/images/match/MATCH-181.jpg', title: 'Thika Road Street Lighting', desc: 'Performance based contract for street lighting.' },
    { img: '/assets/custom/images/match/Thika-Road.jpg', title: 'Thika Road Phase 2', desc: 'Continued performance based street lighting works.' },
    { img: '/assets/custom/images/match/field3.jpg', title: 'Field Operations', desc: 'Maintenance and installation works along Thika Road.' },
  ]},
  { year: '2023', items: [
    { img: '/assets/custom/images/match/brt.jpg', title: 'Thika Road Maintenance', desc: 'Performance based contract for maintenance of street lights.' },
    { img: '/assets/custom/images/match/masinde-mast.jpg', title: 'Masinde Muliro University', desc: 'Fabrication, installation and commissioning of high masts.' },
    { img: '/assets/custom/images/match/MATCH-326.jpg', title: 'Nairobi–Thika Super Highway A2', desc: 'Performance based contract for street light maintenance.' },
  ]},
]

export default function Timeline() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/R.jpeg)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>Projects Timeline</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / <Link to="/projects/timeline">Projects</Link> / Timeline</div>
      <section className="me-section container">
        {timeline.map(t => (
          <div key={t.year} className="me-timeline-year">
            <div className="me-timeline-year__label">{t.year}</div>
            <div className="me-projects">
              {t.items.map(item => (
                <div key={item.title} className="me-project-card">
                  <img src={item.img} alt={item.title} />
                  <div className="me-project-card__body">
                    <span className="me-project-card__date">{t.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
