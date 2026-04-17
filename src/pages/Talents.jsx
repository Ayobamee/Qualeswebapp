import { useState } from 'react'
import styles from './Talents.module.css'

const courses = [
  {
    title: 'Scrum Mastery',
    duration: '4 weeks',
    level: 'Beginner',
    topics: ['Scrum fundamentals', 'Sprint planning', 'Retrospectives', 'Team facilitation'],
    price: '₦85,000',
  },
  {
    title: 'Full Stack QA Engineering',
    duration: '6 weeks',
    level: 'Intermediate',
    topics: ['QA fundamentals', 'Test planning and execution', 'A.P.I Testing', 'Playwright setup', 'Page Object Model', 'CI/CD integration', 'Reporting'],
    price: '₦130,000',
    featured: true,
  },
  {
    title: 'API & Performance Testing',
    duration: '5 weeks',
    level: 'Intermediate',
    topics: ['Postman & Newman', 'REST API testing', 'k6 performance', 'Load testing'],
    price: '₦110,000',
  },
  {
    title: 'QA Engineering Bootcamp',
    duration: '12 weeks',
    level: 'Comprehensive',
    topics: ['Full curriculum', 'Live projects', 'Mentorship', 'Job placement support'],
    price: '₦280,000',
  },
]

const timetable = [
  { cohort: 'Cohort 7', course: 'Scrum Mastery', start: 'May 5, 2025', seats: 12, status: 'Open' },
  { cohort: 'Cohort 8', course: 'Full Stack QA Engineering', start: 'May 19, 2025', seats: 8, status: 'Open' },
  { cohort: 'Cohort 9', course: 'API & Performance Testing', start: 'June 2, 2025', seats: 15, status: 'Open' },
  { cohort: 'Cohort 10', course: 'QA Engineering Bootcamp', start: 'June 16, 2025', seats: 4, status: 'Filling fast' },
]

const testimonials = [
  {
    name: 'Sandra Alutu',
    role: 'Project Manager @ Quales',
    quote: 'Quales gave me the practical skills and confidence I needed. Within 3 months of graduating, I had my first offer.',
    initials: 'AO',
  },
  {
    name: 'Bashiru Alatishe',
    role: 'Automation Tester @ Kuda Bank',
    quote: 'The Playwright course was exactly what I needed to level up. The instructors are practitioners, not just teachers.',
    initials: 'EN',
  },
  {
    name: 'Ayomide Obanewa',
    role: 'QA Lead @ Obanewa Legals',
    quote: 'I came in as a complete beginner. Today I lead a QA team. Quales is the reason.',
    initials: 'FA',
  },
]

const initialForm = { name: '', email: '', phone: '', course: '', experience: '', motivation: '' }

export default function Talents() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    const body = new URLSearchParams({ 'form-name': 'talent-application', ...form }).toString()
    try {
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
    } catch (_) {}
    setSubmitted(true)
  }

  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <div className="section-label">For Talents</div>
              <h1 className={styles.heroTitle}>
                Launch your tech career<br /><em>the right way.</em>
              </h1>
              <p className={styles.heroSub}>
                Practical, cohort-based training in QA engineering & Scrum Mastery. Learn from industry practitioners, work on real projects, and get placed at top fintech companies.
              </p>
              <div className={styles.heroPills}>
                <span>100% practical curriculum</span>
                <span>Industry mentorship</span>
                <span>Placement support</span>
              </div>
              <a href="#register" className={styles.heroApplyBtn}>Apply for next cohort →</a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.statVal}>80%</span>
                <span className={styles.statLbl}>placement rate</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statVal}>500+</span>
                <span className={styles.statLbl}>graduates</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statVal}>4–12</span>
                <span className={styles.statLbl}>week programs</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statVal}>6</span>
                <span className={styles.statLbl}>active cohorts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className={styles.section}>
        <div className="container">
          <div className="section-label">Training courses</div>
          <h2 className={styles.sectionTitle}>What you'll learn</h2>
          <p className={styles.sectionSub}>Choose the program that matches your goals and experience level.</p>
          <div className={styles.courseGrid}>
            {courses.map(c => (
              <div key={c.title} className={`${styles.courseCard} ${c.featured ? styles.featured : ''}`}>
                {c.featured && <div className={styles.featuredBadge}>Most popular</div>}
                <div className={styles.courseHeader}>
                  <h3>{c.title}</h3>
                  <div className={styles.courseMeta}>
                    <span className={styles.level}>{c.level}</span>
                    <span className={styles.duration}>{c.duration}</span>
                  </div>
                </div>
                <ul className={styles.topics}>
                  {c.topics.map(t => <li key={t}>{t}</li>)}
                </ul>
                <div className={styles.courseFooter}>
                  <span className={styles.price}>{c.price}</span>
                  <a href="#register" className={`btn ${c.featured ? 'btn-talent' : 'btn-outline'}`} style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}>
                    Apply now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMETABLE */}
      <section id="timetable" className={`${styles.section} ${styles.bgGray}`}>
        <div className="container">
          <div className="section-label">Upcoming cohorts</div>
          <h2 className={styles.sectionTitle}>Cohort timetable</h2>
          <p className={styles.sectionSub}>Seats fill quickly — reserve yours before the cohort closes.</p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Cohort</th>
                  <th>Course</th>
                  <th>Start date</th>
                  <th>Seats left</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {timetable.map(row => (
                  <tr key={row.cohort}>
                    <td><strong>{row.cohort}</strong></td>
                    <td>{row.course}</td>
                    <td>{row.start}</td>
                    <td>{row.seats}</td>
                    <td>
                      <span className={`${styles.status} ${row.status === 'Filling fast' ? styles.warn : styles.open}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>
                      <a href="#register" className={styles.tableApply}>Apply →</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className={styles.section}>
        <div className="container">
          <div className="section-label">Success stories</div>
          <h2 className={styles.sectionTitle}>Graduates who made it</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map(t => (
              <div key={t.name} className={styles.testimonialCard}>
                <p className={styles.quote}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.avatar}>{t.initials}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER FORM */}
      <section id="register" className={`${styles.section} ${styles.bgGray}`}>
        <div className="container">
          <div className={styles.formWrap}>
            <div className={styles.formLeft}>
              <div className="section-label">Apply now</div>
              <h2 className={styles.sectionTitle}>Ready to start?</h2>
              <p className={styles.formDesc}>
                Fill the form and our team will reach out within 24 hours to confirm your spot and share next steps.
              </p>
              <div className={styles.formPerks}>
                <div className={styles.perk}>✓ No upfront commitment</div>
                <div className={styles.perk}>✓ Instalment payment plans available</div>
                <div className={styles.perk}>✓ Placement support included</div>
              </div>
            </div>

            <div className={styles.formRight}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Application received!</h3>
                  <p>We'll be in touch within 24 hours. Welcome to the Quales community.</p>
                </div>
              ) : (
                <form name="talent-application" onSubmit={submit} className={styles.form} data-netlify="true">
                  <input type="hidden" name="form-name" value="talent-application" />
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label>Full name</label>
                      <input name="name" value={form.name} onChange={handle} placeholder="Ada Okonkwo" required />
                    </div>
                    <div className={styles.field}>
                      <label>Email address</label>
                      <input type="email" name="email" value={form.email} onChange={handle} placeholder="ada@email.com" required />
                    </div>
                  </div>
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label>Phone number</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder="+234 800 000 0000" required />
                    </div>
                    <div className={styles.field}>
                      <label>Course of interest</label>
                      <select name="course" value={form.course} onChange={handle} required>
                        <option value="">Select a course</option>
                        {courses.map(c => <option key={c.title} value={c.title}>{c.title}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>Current experience level</label>
                    <select name="experience" value={form.experience} onChange={handle} required>
                      <option value="">Select one</option>
                      <option>Complete beginner</option>
                      <option>Some knowledge, no job yet</option>
                      <option>Working in tech, want to switch to QA</option>
                      <option>Already in QA, want to upskill</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Why do you want to join? (optional)</label>
                    <textarea name="motivation" value={form.motivation} onChange={handle} rows={3} placeholder="Tell us a bit about your goals..." />
                  </div>
                  <button type="submit" className="btn btn-talent" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}>
                    Submit application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
