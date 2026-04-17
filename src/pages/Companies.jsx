import { useState } from 'react'
import styles from './Companies.module.css'
import Ticker from '../components/Ticker'

const skills = [
  { category: 'Full stack QA Engineers', items: ['Test case design', 'Automated testing', 'Testing with A.I', 'Bug reporting'] },
  { category: 'Frontend Engineers', items: ['React', 'Vue', 'Angular', 'JavaScript'] },
  { category: 'Backend Engineers', items: ['Node.js', 'Python', 'Java', 'Go'] },
  { category: 'Site Reliability Engineers', items: ['Prometheus', 'Grafana', 'Logstash', 'Stackstorm'] },
  { category: 'Mobile Engineers', items: ['React Native', 'Flutter', 'Xamarin', 'Swift'] },
  { category: 'Scrum Masters', items: ['Agile methodologies', 'Sprint planning', 'Retrospectives', 'Team facilitation'] },
]

const clients = ['Paystack', 'Flutterwave', 'Interswitch', 'Kuda Bank', 'Qore', 'Zone', 'S.M.E Capital', 'Seamfix']

const process = [
  {
    n: '01',
    title: 'Tell us what you need',
    desc: 'Share your team size, stack, timeline, and the Tech expertise you\'re looking for.',
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
    quote: 'Quales has become our go-to source for QA talent. Every engineer they\'ve placed has been exceptional — prepared, professional, and passionate.',
    initials: 'NM',
  },
  {
    name: 'Adedapo Ajibade',
    role: 'CEO, RosellReid LLC',
    quote: 'We scaled our S.R.E team from 2 to 8 in under 6 weeks through Quales. The quality of candidates is consistently impressive.',
    initials: 'AA',
  },
  {
    name: 'Bamidele Alegbe',
    role: 'CTO, Chop Life Gaming',
    quote: 'What sets Quales apart is the ongoing support. They don\'t just place talent — they partner with you to make sure they thrive.',
    initials: 'BA',
  },
]

const initialForm = { company: '', name: '', email: '', teamSize: '', needs: '', timeline: '' }

export default function Companies() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = async e => {
    e.preventDefault()
    const body = new URLSearchParams({ 'form-name': 'company-request', ...form }).toString()
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
              <div className="section-label">For Companies</div>
              <h1 className={styles.heroTitle}>
                Hire Tech talents<br /><em>you can trust.</em>
              </h1>
              <p className={styles.heroSub}>
                Access a curated pool of certified, production-ready Tech professionals.
                Trained by Quales, matched to your needs, supported throughout.
              </p>
              <div className={styles.heroPills}>
                <span>Pre-vetted talent</span>
                <span>Fast placement</span>
                <span>Ongoing support</span>
              </div>
              <div className={styles.heroActions}>
                <a href="#contact" className="btn btn-company">Request talent →</a>
                <a href="#process" className="btn btn-outline">See how it works</a>
              </div>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.heroCardLabel}>Talents currently available</div>
              {[
                { name: 'Patrick Asuquo', role: 'Automation QA', exp: '6 yrs', skills: ['Playwright', 'CI/CD'] },
                { name: 'Moses Ayankoya', role: 'Android Mobile Engineer', exp: '5 yrs', skills: ['React Native', 'Flutter'] },
                { name: 'Wale Habeeb', role: 'Data Analyst', exp: '7 yrs', skills: ['Python', 'Analytics'] },
              ].map(t => (
                <div key={t.name} className={styles.talentRow}>
                  <div className={styles.talentAvatar}>{t.name[0]}</div>
                  <div className={styles.talentInfo}>
                    <strong>{t.name}</strong>
                    <span>{t.role} · {t.exp} exp</span>
                  </div>
                  <div className={styles.talentTags}>
                    {t.skills.map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
              <a href="#contact" className={styles.heroCardCta}>View full pool →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS - Scrolling ticker */}
      <section className={styles.clientsBar}>
        <div className="container">
          <p className={styles.clientsLabel}>Companies that trust Quales talent</p>
        </div>
        <Ticker items={clients} speed={30} />
      </section>

      {/* TALENT POOL */}
      <section id="pool" className={styles.section}>
        <div className="container">
          <div className="section-label">Our talent pool</div>
          <h2 className={styles.sectionTitle}>Skills across every Tech discipline</h2>
          <p className={styles.sectionSub}>
            All talent in our pool is Quales-certified and has completed real-world project training.
          </p>
          <div className={styles.skillsGrid}>
            {skills.map(s => (
              <div key={s.category} className={styles.skillCard}>
                <h3>{s.category}</h3>
                <ul>
                  {s.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className={`${styles.section} ${styles.bgGray}`}>
        <div className="container">
          <div className="section-label">How it works</div>
          <h2 className={styles.sectionTitle}>From request to onboarded, fast.</h2>
          <p className={styles.sectionSub}>
            Most companies have talent onboarded within 2–3 weeks of their first conversation with us.
          </p>
          <div className={styles.processSteps}>
            {process.map((p, i) => (
              <div key={p.n} className={styles.processStep}>
                <div className={styles.processNum}>{p.n}</div>
                {i < process.length - 1 && <div className={styles.processLine} />}
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
      <section id="clients" className={styles.section}>
        <div className="container">
          <div className="section-label">Client testimonials</div>
          <h2 className={styles.sectionTitle}>What our clients say</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map(t => (
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

      {/* CONTACT FORM */}
      <section id="contact" className={`${styles.section} ${styles.bgDark}`}>
        <div className="container">
          <div className={styles.formWrap}>
            <div className={styles.formLeft}>
              <div className={styles.formLabel}>Request talent</div>
              <h2 className={styles.formTitle}>Let's find your next QA engineer.</h2>
              <p className={styles.formDesc}>
                Tell us what you need and we'll come back to you within one business day with matched candidates.
              </p>
              <div className={styles.formStats}>
                <div><span>2–3 weeks</span><span>Average time to hire</span></div>
                <div><span>98%</span><span>Client satisfaction</span></div>
              </div>
            </div>
            <div className={styles.formRight}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Request received!</h3>
                  <p>Our team will reach out within one business day with matched candidates.</p>
                </div>
              ) : (
                <form name="company-request" onSubmit={submit} className={styles.form} data-netlify="true">
                  <input type="hidden" name="form-name" value="company-request" />
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label>Company name</label>
                      <input name="company" value={form.company} onChange={handle} placeholder="Acme Inc." required />
                    </div>
                    <div className={styles.field}>
                      <label>Your name</label>
                      <input name="name" value={form.name} onChange={handle} placeholder="Peter Doe" required />
                    </div>
                  </div>
                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label>Work email</label>
                      <input type="email" name="email" value={form.email} onChange={handle} placeholder="peterdoe@company.com" required />
                    </div>
                    <div className={styles.field}>
                      <label>Engineers needed</label>
                      <select name="teamSize" value={form.teamSize} onChange={handle} required>
                        <option value="">Select</option>
                        <option>1 engineer</option>
                        <option>2–3 engineers</option>
                        <option>4–6 engineers</option>
                        <option>7+ engineers</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>What do you need?</label>
                    <textarea name="needs" value={form.needs} onChange={handle} rows={3}
                      placeholder="e.g. Playwright automation engineer, 2+ years experience, fintech background preferred..." required />
                  </div>
                  <div className={styles.field}>
                    <label>Desired start timeline</label>
                    <select name="timeline" value={form.timeline} onChange={handle} required>
                      <option value="">Select</option>
                      <option>ASAP (within 2 weeks)</option>
                      <option>1 month</option>
                      <option>1–3 months</option>
                      <option>3+ months, planning ahead</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-company" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}>
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
