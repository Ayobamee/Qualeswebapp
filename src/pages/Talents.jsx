import { useState } from 'react'
import styles from './Talents.module.css'

const courses = [
  {
    title: ' Premium Package',
    duration: '8 weeks',
    level: 'Intermediate',
    topics: [
      ' 8-week intensive training',
      ' 2-week employment readiness',
      ' 3-month internship',
      'Admission into the Quales Network of 300+ testers.',
      'Placement support',
      'ISTQB CTFL Certification',
    ],
    price: 'One-time payment ₦858,500(save ₦10,000)',
    additonalInfo: 'Instalment:₦289,500 per month over 3 months ',
    featured: true,
  },

  {
    title: ' Standard Package',
    duration: '8 weeks',
    level: 'Intermediate',
    topics: [
      '  8-week intensive training',
      ' 2-week employment readiness',
      'Admission into the Quales Network of 300+ testers.',
      'Placement support',
      'ISTQB CTFL Certification',
    ],

    price: 'One-time payment ₦590,000(save ₦10,000)',
    additonalInfo: 'Instalment:₦200,000 per month over 3 months ',
    featured: false,
  },

  {
    title: ' Basic Package',
    duration: '8 weeks',
    level: 'Intermediate',
    topics: [
      '  8-week intensive training',
      ' 2-week employment readiness',
      'Admission into the Quales Network of 300+ testers.',
      'Placement support',
    ],

    price: 'One-time payment ₦290,000(save ₦10,000)',
    featured: false,
  },
]

const timetable = [
  {
    cohort: 'Cohort 22',
    course: 'Full Stack QA Engineering',
    start: 'August, 2026',
    seats: 20,
    status: 'Open',
  },
]

const testimonials = [
  {
    name: 'Sandra Alutu',
    role: 'Scrum Master @ Quales',
    quote:
      'My journey with Quales through learning Scrum, taking the exam, and completing an internship has been incredibly rewarding. From the classes to the Exam support to my internship with Quales now, it has been all I hoped for and more. The combination of theoretical learning and practical experience has given me a solid foundation in Scrum, and I am excited to continue applying these skills in my career.',
    initials: 'AO',
  },
  {
    name: 'Bashiru Alatishe',
    role: 'Automation Test Lead @ Kuda Bank',
    quote:
      "It's been a wonderful experience with Quales. After the training and examination with Quales, they always make sure that they keep in touch with their Alumni, even my first job as a Software tester was through Quales, after which I got my job with Interswitch.",
    initials: 'EN',
  },
  {
    name: 'Ayomide Obanewa',
    role: 'QA Lead @ Cartolinks',
    quote:
      'Learning automation testing was one of the most memorable moments at Quales. It was very impressive, especially with the fact that I came from a non-tech background (in Law), having to learn the codes, javascript and more, seeing how simplified by the trainer and right now I got a placement at a Crypto exchange company.',
    initials: 'FA',
  },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  course: '',
  experience: '',
  motivation: '',
}

export default function Talents() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    const body = new URLSearchParams({
      'form-name': 'talent-application',
      ...form,
    }).toString()
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
    } catch (_) {}
    setSubmitted(true)
  }

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className='container'>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <div className={styles.badge}>For Talents</div>
              <h1 className={styles.heroTitle}>
                Launch your tech career
                <br />
                <em>The right way.</em>
              </h1>

              <p className={styles.heroSub}>
                Practical, cohort-based training in QA engineering & Scrum
                Mastery. Learn from industry practitioners, work on real
                projects, and get placed at top fintech companies.
              </p>
              <p className={styles.heroSub}>
                Want to learn more before you commit? Join our free information
                Session on Friday, 18 July 2026. Meet the team, ask your
                questions and get a full walkthrough of our programme.
              </p>
              <div className={styles.heroPills}>
                <span>100% practical curriculum</span>
                <span>Industry mentorship</span>
                <span>Placement support</span>
              </div>
              <a href='#register' className={styles.heroApplyBtn}>
                Reserve Your Spot →
              </a>
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

      {/*Curriculum Overview */}

      <section id='curriculum' className={styles.section}>
        <div className='container'>
          <div className={styles.curriculumLabel}>Curriculum</div>
          <h2 className={styles.trainingCourseTitle}>
            Curriculum : Your 10-Week Journey
          </h2>
          <div className={styles.secondformPerks}>
            <div className={styles.secondperk}>
              ✓ Week 1 : Testing Fundamentals
            </div>
            <div className={styles.secondperk}>✓ Week 2: SDLC and Testing</div>
            <div className={styles.secondperk}>
              ✓ Week 3: Levels of Testing and Test Preparation
            </div>
            <div className={styles.secondperk}>
              ✓ Week 4 and 5: Manual and A.P.I Testing using Postman
            </div>
            <div className={styles.secondperk}>
              ✓ Week 6: Version Control with Git and GitHub
            </div>
            <div className={styles.secondperk}>
              ✓ Week 7 and 8: Automated Testing with Playwright
            </div>
            <div className={styles.secondperk}>
              ✓ Week 9: Career Preparation and Stakeholder Communication
            </div>
            <div className={styles.secondperk}>
              ✓ Week 10: Exam Prep, Mentorship and Internship
            </div>
            <div className={styles.secondperk}>
              ✓ After your 10 weeks, top performers enter a structured 3-month
              internship designed to give you real industry experience.
              <i>
                {' '}
                (Please speak to a Quales representative for more information.)
              </i>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id='courses' className={styles.section}>
        <div className='container'>
          <div className={styles.curriculumLabel}>Plans</div>
          <h2 className={styles.trainingCourseTitle}>
            Choose the right plan for you
          </h2>

          <div className={styles.courseGrid}>
            {courses.map((c) => (
              <div
                key={c.title}
                className={`${styles.courseCard} ${c.featured ? styles.featured : ''}`}
              >
                {c.featured && (
                  <div className={styles.featuredBadge}>Most popular</div>
                )}
                <div className={styles.courseHeader}>
                  <h3>{c.title}</h3>
                  <div className={styles.courseMeta}>
                    <span className={styles.level}>{c.level}</span>
                    <span className={styles.duration}>{c.duration}</span>
                  </div>
                </div>
                <ul className={styles.topics}>
                  {c.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className={styles.courseFooter}>
                  <div className={styles.priceGroup}>
                    <span className={styles.price}>{c.price}</span>
                    <span className={styles.additionalInfo}>
                      {c.additonalInfo}
                    </span>
                  </div>
                  <a
                    href='#register'
                    className={`btn ${c.featured ? 'btn-talent' : 'btn-outline'}`}
                    style={{
                      padding: '0.55rem 1.25rem',
                      fontSize: '0.85rem',
                      color: 'white',
                      background: '#0071E3',
                    }}
                  >
                    Apply now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMETABLE */}
      <section id='timetable' className={`${styles.section} ${styles.bgGreen}`}>
        <div className='container'>
          <div className='section-label'>Upcoming cohorts</div>
          <h2 className={styles.sectionTitle}>Cohort timetable</h2>
          <p className={styles.sectionSub}>
            Seats fill quickly — reserve yours before the cohort closes.
          </p>
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
                {timetable.map((row) => (
                  <tr key={row.cohort}>
                    <td>
                      <strong>{row.cohort}</strong>
                    </td>
                    <td>{row.course}</td>
                    <td>{row.start}</td>
                    <td>{row.seats}</td>
                    <td>
                      <span
                        className={`${styles.status} ${row.status === 'Filling fast' ? styles.warn : styles.open}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td>
                      <a href='#register' className={styles.tableApply}>
                        Apply →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id='testimonials' className={styles.section}>
        <div className='container'>
          <div className={styles.curriculumLabel}>Success stories</div>
          <h2 className={styles.trainingCourseTitle}>Graduates who made it</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t) => (
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
      <section id='register' className={`${styles.section} ${styles.bgGreen}`}>
        <div className='container'>
          <div className={styles.formWrap}>
            <div className={styles.formLeft}>
              <div className='section-label'>Apply now</div>
              <h2 className={styles.sectionTitle}>Ready to start?</h2>
              <p className={styles.formDesc}>
                Fill the form and our team will reach out within 24 hours to
                confirm your spot and share next steps.
              </p>
              <div className={styles.formPerks}>
                <div className={styles.perk}>✓ No upfront commitment</div>
                <div className={styles.perk}>
                  ✓ Instalment payment plans available
                </div>
                <div className={styles.perk}>✓ Placement support included</div>
              </div>
            </div>

            <div className={styles.formRight}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Application received!</h3>
                  <p>
                    We'll be in touch within 24 hours. Welcome to the Quales
                    community.
                  </p>
                </div>
              ) : (
                <form
                  name='talent-application'
                  onSubmit={submit}
                  className={styles.form}
                  data-netlify='true'
                >
                  <input
                    type='hidden'
                    name='form-name'
                    value='talent-application'
                  />
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label>Full name</label>
                      <input
                        name='name'
                        value={form.name}
                        onChange={handle}
                        placeholder='Ada Smith'
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label>Email address</label>
                      <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handle}
                        placeholder='ada@email.com'
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label>Phone number</label>
                      <input
                        name='phone'
                        value={form.phone}
                        onChange={handle}
                        placeholder='+234 800 000 0000'
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label>Plan of interest</label>
                      <select
                        name='course'
                        value={form.course}
                        onChange={handle}
                        required
                      >
                        <option value=''>Select a plan</option>
                        {courses.map((c) => (
                          <option key={c.title} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>Current experience level</label>
                    <select
                      style={{
                        color: form.experience ? 'black' : 'rgba(0, 0, 0, 0.5)',
                      }}
                      name='experience'
                      value={form.experience}
                      onChange={handle}
                      required
                    >
                      <option value=''>Select one</option>
                      <option>Complete beginner</option>
                      <option>Some knowledge, no job yet</option>
                      <option>Working in tech, want to switch to QA</option>
                      <option>Already in QA, want to upskill</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Why do you want to join? (optional)</label>
                    <textarea
                      name='motivation'
                      value={form.motivation}
                      onChange={handle}
                      rows={3}
                      placeholder='Tell us a bit about your goals...'
                    />
                  </div>
                  <button
                    type='submit'
                    className='btn btn-talent'
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '0.9rem',
                      background: '#0071e3',
                    }}
                  >
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
