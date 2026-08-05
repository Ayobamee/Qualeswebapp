import { useState } from 'react'
import styles from './Companies.module.css'
import Ticker from '../components/Ticker'

const skills = [
  {
    category: 'Full stack QA Engineers',
    items: [
      'Test case design',
      'Automated testing',
      'Testing with A.I',
      'Bug reporting',
    ],
  },
  {
    category: 'Frontend Engineers',
    items: ['React', 'Vue', 'Angular', 'JavaScript'],
  },
  { category: 'Backend Engineers', items: ['Node.js', 'Python', 'Java', 'Go'] },
  {
    category: 'Site Reliability Engineers',
    items: ['Prometheus', 'Grafana', 'Logstash', 'Stackstorm'],
  },
  {
    category: 'Mobile Engineers',
    items: ['React Native', 'Flutter', 'Xamarin', 'Swift'],
  },
  {
    category: 'Scrum Masters',
    items: [
      'Agile methodologies',
      'Sprint planning',
      'Retrospectives',
      'Team facilitation',
    ],
  },
]

const clients = [
  'Qore',
  'Zone',
  'Choplife Gaming',
  'Cartolinks',
  'S.M.E Capital',
  'Signature Bank',
  'Andela',
  'CSL Capital UK',
  'Seamfix',
  'Deel',
  'RosellReid LLC',
  'Paystack',
  'Flutterwave',
  'Kuda Bank',
]

const process = [
  {
    n: '01',
    title: 'Tell us what you need',
    desc: "Share your team size, stack, timeline, and the Tech expertise you're looking for.",
  },
  {
    n: '02',
    title: 'We match you',
    desc: 'We handpick candidates from our certified talent pool based on your exact requirements.',
  },
  {
    n: '03',
    title: 'Interview & select',
    desc: 'Meet 2–3 pre-vetted candidates. You choose who fits your team culture and needs.',
  },
  {
    n: '04',
    title: 'They join your team',
    desc: 'Talent onboards with ongoing support from Quales. We stay involved to ensure quality.',
  },
]

const testimonials = [
  {
    name: 'Nnanna Madu',
    role: 'Head of Engineering, Seamfix',
    quote:
      "Quales has become our go-to source for QA talent. Every engineer they've placed has been exceptional — prepared, professional, and passionate.",
    initials: 'NM',
  },
  {
    name: 'Adedapo Ajibade',
    role: 'CEO, RosellReid LLC',
    quote:
      'We scaled our S.R.E team from 2 to 8 in under 6 weeks through Quales. The quality of candidates is consistently impressive.',
    initials: 'AA',
  },
  {
    name: 'Bamidele Alegbe',
    role: 'CTO, ChopLife Gaming',
    quote:
      "What sets Quales apart is the ongoing support. They don't just place talent — they partner with you to make sure they thrive.",
    initials: 'BA',
  },
]

const caseStudies = [
  {
    client: 'Zone',
    industry: 'Agency Banking',
    initials: 'ZN',
    need: 'Long regression cycles and manual testing were slowing down development and increasing risk of production bugs.',
    delivered: 'A full regression suite for the Agency Banking V2 application.',
    outcome:
      'Streamlined transactions and stronger fraud management across the platform.',
    tag: 'QA Automation',
  },
  {
    client: 'Qore',
    industry: 'Lending',
    initials: 'QR',
    need: 'Buggy experience in the full lending process with Recova.',
    delivered: 'Improved quality of the Recova lending application.',
    outcome:
      'Automated the full lending process with Recova, improving development speed.',
    tag: 'QA Automation',
  },
  {
    client: 'ChopLife Gaming',
    industry: 'Gaming',
    initials: 'CL',
    need: 'Lack of QA engineers to support expansion of gaming platforms into Uganda and Tanzania.',
    delivered:
      'End-to-end testing services ensuring bugs were caught prior to expansion.',
    outcome:
      'Seamless launch into new African markets with zero critical production issues.',
    tag: 'Talent Outsourcing',
  },
]

const initialForm = {
  company: '',
  name: '',
  email: '',
  teamSize: '',
  needs: '',
  timeline: '',
}

export default function Companies() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const submit = async (e) => {
    e.preventDefault()
    const body = new URLSearchParams({
      'form-name': 'company-request',
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
              <div className={styles.badge}>For Companies</div>
              <h1 className={styles.heroTitle}>
                Hire Tech talents
                <br />
                <em>you can trust.</em>
              </h1>
              <p className={styles.heroSub}>
                We work alongside fintech and gaming organisations across
                Africa. We understand what quality failures look like across
                banking infrastructure, payment rails and gaming platforms
                operating at scale.
              </p>

              <p className={styles.heroSub}>
                Every company has access to the same AI tools. The difference
                lies in the expertise behind them. Our approach is built from
                years of production experience across some of Africa's most
                critical technology platforms.
              </p>

              <p className={styles.heroSub}>
                Through Quales Academy, we are developing the next generation of
                QA professionals with deep automation expertise and AI fluency,
                ready for where the industry is going.
              </p>
              <div className={styles.heroPills}>
                <span>Pre-vetted talent</span>
                <span>Fast placement</span>
                <span>Ongoing support</span>
              </div>
              <div className={styles.heroActions}>
                <a
                  href='#contact'
                  className='btn btn-company'
                  style={{ background: '#0071E3' }}
                >
                  Request talent →
                </a>
                <a
                  href='#process'
                  className='btn btn-outline'
                  style={{ color: '#4a7080' }}
                >
                  See how it works
                </a>
              </div>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.heroCardLabel}>
                Talents currently available
              </div>
              {[
                {
                  name: 'Patrick Asuquo',
                  role: 'Automation QA',
                  exp: '6 yrs',
                  skills: ['Playwright', 'CI/CD'],
                },
                {
                  name: 'Moses Ayankoya',
                  role: 'Android Mobile Engineer',
                  exp: '5 yrs',
                  skills: ['React Native', 'Flutter'],
                },
                {
                  name: 'Wale Habeeb',
                  role: 'Data Analyst',
                  exp: '7 yrs',
                  skills: ['Python', 'Analytics'],
                },
              ].map((t) => (
                <div key={t.name} className={styles.talentRow}>
                  <div className={styles.talentAvatar}>{t.name[0]}</div>
                  <div className={styles.talentInfo}>
                    <strong>{t.name}</strong>
                    <span>
                      {t.role} · {t.exp} exp
                    </span>
                  </div>
                  <div className={styles.talentTags}>
                    {t.skills.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
              <a href='#contact' className={styles.heroCardCta}>
                View full pool →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS - Scrolling ticker */}
      <section className={styles.clientsBar}>
        <div className='container'>
          <p className={styles.clientsLabel}>
            Companies that trust Quales talent
          </p>
        </div>
        <Ticker items={clients} speed={30} />
      </section>

      {/* TALENT POOL */}
      <section id='pool' className={styles.section}>
        <div className='container'>
          <div className={styles.badge}>Our talent pool</div>
          <h2 className={styles.sectionTitle}>
            Skills across every Tech discipline
          </h2>
          <p className={styles.sectionSub}>
            All talent in our pool is Quales-certified and has completed
            real-world project training.
          </p>
          <div className={styles.skillsGrid}>
            {skills.map((s) => (
              <div key={s.category} className={styles.skillCard}>
                <h3>{s.category}</h3>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id='process' className={`${styles.section} ${styles.bgGray}`}>
        <div className='container'>
          <div className='greensection-label'>How it works</div>
          <h2 className={styles.sectionTitle}>
            From request to onboarded, fast.
          </h2>
          <p className={styles.sectionSub}>
            Most companies have talent onboarded within 2–3 weeks of their first
            conversation with us.
          </p>
          <div className={styles.processSteps}>
            {process.map((p, i) => (
              <div key={p.n} className={styles.processStep}>
                <div className={styles.processNum}>{p.n}</div>
                {i < process.length - 1 && (
                  <div className={styles.processLine} />
                )}
                <div className={styles.processBody}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id='clients' className={styles.section}>
        <div className='container'>
          <div className='greensection-label'>Client testimonials</div>
          <h2 className={styles.sectionTitle}>What our clients say</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.author}>
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

      {/* CASE STUDIES */}
      <section
        id='case-studies'
        className={`${styles.section} ${styles.bgGray}`}
      >
        <div className='container'>
          <div className='greensection-label'>Case studies</div>
          <h2 className={styles.sectionTitle}>Results we have delivered</h2>
          <p className={styles.sectionSub}>
            Real projects. Real outcomes. Here is how we have helped
            organisations across fintech and gaming build with confidence.
          </p>
          <div className={styles.caseGrid}>
            {caseStudies.map((c) => (
              <div key={c.client} className={styles.caseCard}>
                <div className={styles.caseHeader}>
                  <div className={styles.caseAvatar}>{c.initials}</div>
                  <div>
                    <strong className={styles.caseClient}>{c.client}</strong>
                    <span className={styles.caseIndustry}>{c.industry}</span>
                  </div>
                  <span className={styles.caseTag}>{c.tag}</span>
                </div>
                <div className={styles.caseBody}>
                  <div className={styles.caseBlock}>
                    <strong className={styles.caseLabel}>The challenge</strong>
                    <p>{c.need}</p>
                  </div>
                  <div className={styles.caseBlock}>
                    <span className={styles.caseLabel}>What we delivered</span>
                    <p>{c.delivered}</p>
                  </div>
                  <div className={styles.caseOutcome}>
                    <span className={styles.caseOutcomeLabel}>Outcome</span>
                    <p>{c.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id='contact' className={`${styles.section} ${styles.bgGreen}`}>
        <div className='container'>
          <div className={styles.formWrap}>
            <div className={styles.formLeft}>
              <div className={styles.formLabel}>Request talent</div>
              <h2 className={styles.formTitle}>
                Let's find your next Software engineer.
              </h2>
              <p className={styles.formDesc}>
                Tell us what you need and we'll come back to you within one
                business day with matched candidates.
              </p>
              <div className={styles.formStats}>
                <div>
                  <span>2–3 weeks</span>
                  <span>Average time to hire</span>
                </div>
                <div>
                  <span>98%</span>
                  <span>Client satisfaction</span>
                </div>
              </div>
            </div>
            <div className={styles.formRight}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Request received!</h3>
                  <p>
                    Our team will reach out within one business day with matched
                    candidates.
                  </p>
                </div>
              ) : (
                <form
                  name='company-request'
                  onSubmit={submit}
                  className={styles.form}
                  data-netlify='true'
                >
                  <input
                    type='hidden'
                    name='form-name'
                    value='company-request'
                  />
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label>Company name</label>
                      <input
                        name='company'
                        value={form.company}
                        onChange={handle}
                        placeholder='Acme Inc.'
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label>Your name</label>
                      <input
                        name='name'
                        value={form.name}
                        onChange={handle}
                        placeholder='Peter Doe'
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label>Work email</label>
                      <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handle}
                        placeholder='peterdoe@company.com'
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label>Engineers needed</label>
                      <select
                        name='teamSize'
                        value={form.teamSize}
                        onChange={handle}
                        required
                      >
                        <option value=''>Select</option>
                        <option>1 engineer</option>
                        <option>2–3 engineers</option>
                        <option>4–6 engineers</option>
                        <option>7+ engineers</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>What do you need?</label>
                    <textarea
                      name='needs'
                      value={form.needs}
                      onChange={handle}
                      rows={3}
                      placeholder='e.g. Playwright automation engineer, 2+ years experience, fintech background preferred...'
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label>Desired start timeline</label>
                    <select
                      name='timeline'
                      value={form.timeline}
                      onChange={handle}
                      required
                    >
                      <option value=''>Select</option>
                      <option>ASAP (within 2 weeks)</option>
                      <option>1 month</option>
                      <option>1–3 months</option>
                      <option>3+ months, planning ahead</option>
                    </select>
                  </div>
                  <button
                    type='submit'
                    className='btn btn-company'
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '0.9rem',
                      background: '#0071E3',
                    }}
                  >
                    Submit request
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
