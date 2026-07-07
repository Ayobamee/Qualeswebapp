import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import qualLogo from '../assets/qualeslogo.svg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={qualLogo} alt='Quales' className={styles.logoImg} />
          </div>
          <p className={styles.tagline}>
            Building Africa's next generation of world-class tech talents.
          </p>
          <p className={styles.location}>Lagos, Nigeria.</p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h4>For Talents</h4>
            <Link to='/talents#courses'>Training Courses</Link>
            <Link to='/talents#timetable'>Cohort Timetable</Link>
            <Link to='/talents#testimonials'>Success Stories</Link>
            <Link to='/talents#register'>Apply Now</Link>
          </div>
          <div className={styles.col}>
            <h4>For Companies</h4>
            <Link to='/companies#pool'>Talent Pool</Link>
            <Link to='/companies#process'>Our Process</Link>
            <Link to='/companies#clients'>Trusted By</Link>
            <Link to='/companies#contact'>Hire Talent</Link>
          </div>

          <div className={styles.col}>
            <h4>QA Agents</h4>
            <Link to='/qa-agents#test-case-generator'>Test Case Generator</Link>
            <Link to='/qa-agents#self-healer'>Self-Healing Reporter</Link>
            <Link to='/qa-agents#coverage-gap-detector'>
              Coverage Gap Detector
            </Link>
            <a href='mailto:hello@quales.tech?subject=Book%20a%20demo%20-%20QA%20Agent%20Suite'>
              Book a Demo
            </a>
          </div>
          <div className={styles.col}>
            <h4>Company</h4>
            <Link to='/about'>About Quales</Link>
            <a href='#'>Blog</a>
            <a href='#'>Careers</a>
            <a href='mailto:info@quales.tech'>Contact</a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Quales. All rights reserved. </p>
        <p> Powered by T.B.L</p>
      </div>
    </footer>
  )
}
