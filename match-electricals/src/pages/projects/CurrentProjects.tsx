import { Link } from 'react-router-dom'

const projects = [
  { img: '/assets/custom/images/match/brt.jpg', title: 'Thika Road Street Lighting Maintenance', year: '2023' },
  { img: '/assets/custom/images/match/masinde-mast.jpg', title: 'High Masts — Masinde Muliro University', year: '2023' },
  { img: '/assets/custom/images/match/MATCH-326.jpg', title: 'Nairobi–Thika Super Highway A2 Street Lights', year: '2023' },
  { img: '/assets/custom/images/match/MATCH-181.jpg', title: 'Thika Road Street Lighting', year: '2018' },
]

export default function CurrentProjects() {
  return (
    <>
      <div className="me-page-header" style={{ backgroundImage: 'url(/assets/custom/images/match/field.jpg)' }}>
        <div className="me-page-header__overlay" />
        <div className="container"><h1>Current Projects</h1></div>
      </div>
      <div className="me-breadcrumb container"><Link to="/">Home</Link> / <Link to="/projects/current">Projects</Link> / Current</div>
      <section className="me-section container">
        <div className="me-projects">
          {projects.map(p => (
            <div key={p.title} className="me-project-card">
              <img src={p.img} alt={p.title} />
              <div className="me-project-card__body">
                <span className="me-project-card__date">{p.year}</span>
                <h3>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
