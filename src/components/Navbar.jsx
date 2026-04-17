import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import qualLogo from '../assets/qualeslogo.svg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const isTalents = location.pathname === '/talents'
  const isCompanies = location.pathname === '/companies'
  const isAbout = location.pathname === '/about'

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <img src={qualLogo} alt="Quales" className={styles.logoImg} />
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <Link to="/talents" className={`${styles.link} ${isTalents ? styles.active : ''}`}>
            For Talents
          </Link>
          <Link to="/companies" className={`${styles.link} ${isCompanies ? styles.active : ''}`}>
            For Companies
          </Link>
          <Link to="/about" className={`${styles.link} ${isAbout ? styles.active : ''}`}>About</Link>
        </div>

        <div className={styles.actions}>
          {isCompanies ? (
            <Link to="/companies#contact" className="btn btn-dark">Hire Talent</Link>
          ) : (
            <Link to="/talents#register" className="btn btn-dark">Apply Now</Link>
          )}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
