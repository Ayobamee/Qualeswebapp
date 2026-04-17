import { Link } from 'react-router-dom'
import styles from './Landing.module.css'
import Ticker from '../components/Ticker'

const stats = [
  { value: '500+', label: 'Talents trained' },
  { value: '10+', label: 'Partner companies' },
  { value: '80%', label: 'Placement rate' },
  { value: '15', label: 'Active cohorts' },
]

const trustedLogos = [
  'Deel',
  'Andela',
  'Paystack',
  'Flutterwave',
  'Interswitch',
  'Kuda',
  'Qore',
  'Zone',
  'RosellReid LLC',
  'Chop Life Gaming'
]

export default function Landing() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className='container'>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Talent Training & Outsourcing</div>
            <h1 className={styles.heroTitle}>
              Where great tech
              <br />
              <em>careers are built.</em>
            </h1>
            <p className={styles.heroSub}>
              Quales trains world-class QA engineers & Scrum Masters and connects them with
              Africa's leading fintech companies. Whether you want to start your
              career or hire exceptional talent — you're in the right place.
            </p>

            {/* SPLIT CARDS */}
            <div className={styles.splitCards}>
              <Link
                to='/talents'
                className={`${styles.card} ${styles.talentCard}`}
              >
                <div className={styles.cardIcon}>
                  <svg width='28' height='28' fill='none' viewBox='0 0 24 24'>
                    <path
                      d='M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardLabel}>
                    I want to learn & grow
                  </span>
                  <h2>For Talents</h2>
                  <p>
                    Get trained, certified, and placed at top fintech companies.
                  </p>
                  <span className={styles.cardCta}>Explore courses →</span>
                </div>
              </Link>

              <Link
                to='/companies'
                className={`${styles.card} ${styles.companyCard}`}
              >
                <div className={styles.cardIcon}>
                  <svg width='28' height='28' fill='none' viewBox='0 0 24 24'>
                    <path
                      d='M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardLabel}>
                    I want to hire talent
                  </span>
                  <h2>For Companies</h2>
                  <p>Access pre-vetted, job-ready QA engineers on demand.</p>
                  <span className={styles.cardCta}>View talent pool →</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className='container'>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className={styles.trusted}>
        <div className='container'>
          <p className={styles.trustedLabel}>Trusted by leading companies</p>
        </div>
        <Ticker items={trustedLogos} speed={25} />
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.how}>
        <div className='container'>
          <div className={styles.howHeader}>
            <div className='section-label'>Our model</div>
            <h2 className={styles.howTitle}>Train. Certify. Place. Repeat.</h2>
            <p className={styles.howSub}>
              A full-cycle system that turns eager learners into
              production-ready engineers.
            </p>
          </div>
          <div className={styles.howSteps}>
            {[
              {
                n: '01',
                title: 'Intensive training',
                desc: 'Cohort-based programs covering QA & Scrum fundamentals,project management, test automation, and industry tools.',
              },
              {
                n: '02',
                title: 'Real-world practice',
                desc: 'Interns work on live QA & Scrum projects using tools like Playwright, Cypress, and JIRA.',
              },
              {
                n: '03',
                title: 'Certification',
                desc: 'Graduates earn a Quales certification recognised by partner companies.',
              },
              {
                n: '04',
                title: 'Placement',
                desc: 'We connect certified talent directly with vetted employers.',
              },
            ].map((step) => (
              <div key={step.n} className={styles.step}>
                <span className={styles.stepNum}>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.cta}>
        <div className='container'>
          <div className={styles.ctaBox}>
            <h2>Ready to take the next step?</h2>
            <p>Choose your path and let's get started.</p>
            <div className={styles.ctaBtns}>
              <Link to='/talents' className='btn btn-talent'>
                I'm a talent →
              </Link>
              <Link to='/companies' className='btn btn-company'>
                I'm hiring →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
