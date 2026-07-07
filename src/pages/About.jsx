import { Link } from 'react-router-dom'
import styles from './About.module.css'

const values = [
  {
    title: 'Practical over theoretical',
    desc: 'Every lesson maps to a real task a QA engineer or Scrum Master does on the job. We build practitioners, not exam-passers.',
  },
  {
    title: 'African talent is world-class',
    desc: 'We reject the idea that African engineers need to prove themselves. We prove it for them — through placement.',
  },
  {
    title: 'Continuous support',
    desc: 'We stay involved after placement. Engineers get ongoing mentorship; companies get a dedicated partner.',
  },
  {
    title: 'Quality over volume',
    desc: 'We cap cohort sizes and keep our vetting standards high. We prefer to place fewer exceptional engineers than many average ones.',
  },
]

const team = [
  {
    name: 'Ayo Elutade',
    role: 'Co-founder & President',
    initials: 'AO',
    bio: 'Former Software Engineering lead with 14+ years in various industries. Built Quales to solve the talent gap he experienced first-hand.',
  },
  {
    name: 'Bob Oghumah',
    role: 'Co-Founder & Head of Talent Operations ',
    initials: 'BO',
    bio: 'Expeirenced QA professional who handles the end to end talent and client operations.',
  },
  {
    name: 'Elizabeth Joshua',
    role: 'Head of Strategy',
    initials: 'EJ',
    bio: "Chief Strategy Officer at Quales, driving the company's growth and expansion initiatives.",
  },
]

const milestones = [
  {
    year: '2020',
    event: 'Quales founded in Lagos with the first cohort of 3 students.',
  },
  {
    year: '2021',
    event:
      'First partnership with Seamfix. about 20+ graduates placed in 12 months.',
  },
  {
    year: '2022',
    event:
      'Launched automation track (Playwright & Cypress). 50+ total graduates.',
  },
  {
    year: '2023',
    event: 'Expanded to launch the Scrum Mastery program. 8 partner companies.',
  },
  {
    year: '2024',
    event: '500+ graduates. 10+ partner companies. 80% placement rate.',
  },
  {
    year: '2025',
    event:
      'Launched Quales Certified badge programme, recognised industry-wide.',
  },
]

export default function About() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className='container'>
          <div className={styles.badge}>Our story</div>
          <h1 className={styles.heroTitle}>
            We exist because the
            <br />
            <em>talent gap is real.</em>
          </h1>
          <p className={styles.heroSub}>
            Quales Consulting is an engineering and talent placement firm
            building Africa's quality assurance future. We partner with
            fintechs, gaming operators, infrastructure providers and technology
            companies to help them build faster, release with confidence and
            scale without quality becoming a bottleneck.
          </p>

          <p className={styles.heroSub}>
            Through our consulting arm, we embed senior quality engineers into
            delivery teams, build AI- powered automation infrastructure and
            transform QA operating models across some of Africa's most critical
            technology platforms.
          </p>

          <p className={styles.heroSub}>
            Through Quales Academy, we develop the next generation of QA
            professionals with the automation expertise, AI fluency and
            consulting readiness the industry demands. "Building Africa into the
            world's home of software quality, powered by talent, driven by
            innovation, and defined by excellence."
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className={styles.missionSection}>
        <div className='container'>
          <div className={styles.missionGrid}>
            <div className={styles.missionLeft}>
              <div className='greensection-label'>Our mission</div>
              <h2>Train the best. Place them at the best.</h2>
            </div>
            <div className={styles.missionRight}>
              <p>
                We train QA engineers & Scrum Masters through cohort-based
                programmes built around real fintech workflows — not textbooks.
                Then we connect them directly with the companies that need them
                most.
              </p>
              <p>
                For talent, we're a launchpad. For companies, we're a trusted
                pipeline. For the ecosystem, we're proof that African tech
                talent is world-class when given the right foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={`${styles.section} ${styles.bgGray}`}>
        <div className='container'>
          <div className='greensection-label'>What we believe</div>
          <h2 className={styles.sectionTitle}>Our values</h2>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={styles.section}>
        <div className='container'>
          <div className='greensection-label'>Our journey</div>
          <h2 className={styles.sectionTitle}>Five years, 500+ careers.</h2>
          <div className={styles.timeline}>
            {milestones.map((m) => (
              <div key={m.year} className={styles.milestone}>
                <div className={styles.milestoneYear}>{m.year}</div>
                <div className={styles.milestoneDot} />
                <div className={styles.milestoneText}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={`${styles.section} ${styles.bgGray}`}>
        <div className='container'>
          <div className='greensection-label'>The team</div>
          <h2 className={styles.sectionTitle}>Built by practitioners.</h2>
          <div className={styles.teamGrid}>
            {team.map((t) => (
              <div key={t.name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{t.initials}</div>
                <div className={styles.teamInfo}>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                  <p>{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className='container'>
          <div className={styles.ctaBox}>
            <h2>Which side of the table are you on?</h2>
            <p>We've built something for both. </p>
            <div className={styles.ctaBtns}>
              <Link
                to='/talents'
                className='btn btn-talent'
                style={{ background: '#0071E3' }}
              >
                I want to get trained →
              </Link>
              <Link
                to='/companies'
                className='btn btn-company'
                style={{ background: '#0071E3' }}
              >
                I want to hire talent →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
