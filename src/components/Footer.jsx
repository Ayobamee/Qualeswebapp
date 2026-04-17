import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import qualLogo from '../assets/qualeslogo.svg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={qualLogo} alt="Quales" className={styles.logoImg} />
          </div>
          <p className={styles.tagline}>
            Building Africa's next generation of world-class tech talents.
          </p>
          <p className={styles.location}>Lagos, Delaware.</p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h4>For Talents</h4>
            <Link to="/talents#courses">Training Courses</Link>
            <Link to="/talents#timetable">Cohort Timetable</Link>
            <Link to="/talents#testimonials">Success Stories</Link>
            <Link to="/talents#register">Apply Now</Link>
          </div>
          <div className={styles.col}>
            <h4>For Companies</h4>
            <Link to="/companies#pool">Talent Pool</Link>
            <Link to="/companies#process">Our Process</Link>
            <Link to="/companies#clients">Trusted By</Link>
            <Link to="/companies#contact">Hire Talent</Link>
          </div>
          <div className={styles.col}>
            <h4>Company</h4>
            <Link to="/about">About Quales</Link>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="mailto:hello@quales.tech">Contact</a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Quales. All rights reserved.</p>
        <div className={styles.legal}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
