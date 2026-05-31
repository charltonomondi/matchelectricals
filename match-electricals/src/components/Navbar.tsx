import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'High & Low Voltage Solutions', to: '/services/high-low-voltage' },
      { label: 'Outdoor & Public Lighting', to: '/services/outdoor-public-lighting' },
      { label: 'Steel Structures Fabrication', to: '/services/steel-structures' },
      { label: 'Man Lifts & Cranes', to: '/services/man-lifts-and-cranes' },
      { label: '★ Service Domains', to: '/services/store', special: true },
    ],
  },
  {
    label: 'Projects',
    children: [
      { label: 'Up & Coming', to: '/projects/coming-soon' },
      { label: 'Current Projects', to: '/projects/current' },
      { label: 'Projects Timeline', to: '/projects/timeline' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDropdown = (label: string) =>
    setOpenDropdown(prev => (prev === label ? null : label))

  return (
    <nav className={`me-navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="me-navbar__inner">
        {/* Logo */}
        <Link to="/" className="me-navbar__brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Match Electricals" className="me-navbar__logo" />
        </Link>

        {/* Hamburger */}
        <button
          className={`me-navbar__toggler${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>

        {/* Links */}
        <ul className={`me-navbar__links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <li
              key={link.label}
              className={`me-navbar__item${link.children ? ' has-dropdown' : ''}`}
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              {link.children ? (
                <>
                  <button
                    className="me-navbar__link me-navbar__link--toggle"
                    onClick={() => toggleDropdown(link.label)}
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label}
                    <span className={`me-navbar__arrow${openDropdown === link.label ? ' up' : ''}`} />
                  </button>
                  <ul className={`me-navbar__dropdown${openDropdown === link.label ? ' open' : ''}`}>
                    {link.children.map(child => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={`me-navbar__dropdown-item${(child as any).special ? ' special' : ''}`}
                          onClick={() => { setMenuOpen(false); setOpenDropdown(null) }}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={link.to!}
                  className={({ isActive }) => `me-navbar__link${isActive ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
