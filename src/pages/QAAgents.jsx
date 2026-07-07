import { Link } from 'react-router-dom'
import styles from './QAAgents.module.css'

const DEMO_LINK =
  'mailto:info@quales.tech?subject=Book%20a%20demo%20-%20QA%20Agent%20Suite'

const agents = [
  {
    id: 'test-case-generator',
    tag: 'Test design',
    name: 'Jira-to-Test-Case Agent',
    tagline: 'Turn a Jira ticket into a full test case set in seconds.',
    problem:
      'QA teams lose hours translating product requirements and Jira tickets into structured test cases — and coverage gaps slip through when this is done manually under deadline pressure.',
    solution:
      'The agent listens for new or updated Jira tickets via webhook, reads the acceptance criteria, and generates structured test cases — positive, negative, and edge cases — formatted natively in Atlassian Document Format and posted straight back to the ticket.',
    capabilities: [
      'Triggered automatically by Jira webhooks on ticket creation or update',
      'Generates positive, negative, and edge-case test scenarios',
      'Posts test cases directly back to Jira in ADF format, no copy-paste',
      'Understands acceptance criteria written in plain language',
      "Configurable to match your team's existing test case template",
    ],
    metric: { value: '70%', label: 'less time writing test cases' },
  },
  {
    id: 'self-healer',
    tag: 'Test automation',
    name: 'Self-Healing Playwright Reporter',
    tagline: 'Flaky locators stop breaking your test suite.',
    problem:
      'UI changes break automated test locators constantly. Every broken selector means manual debugging, flaky CI pipelines, and engineers spending more time maintaining tests than writing new ones.',
    solution:
      'When a Playwright test fails on a locator, the agent captures a DOM snapshot at the point of failure, sends it for analysis, and returns a corrected selector suggestion — so your suite heals itself instead of going red.',
    capabilities: [
      'Detects locator failures automatically during Playwright test runs',
      'Captures DOM snapshots at the exact point of failure',
      'Returns AI-suggested selector corrections in real time',
      'Reduces flaky CI pipeline failures caused by UI drift',
      'Drop-in npm package, works with your existing Playwright setup',
    ],
    metric: { value: '85%', label: 'fewer flaky test failures' },
  },
  {
    id: 'coverage-gap-detector',
    tag: 'Test strategy',
    name: 'Coverage Gap Detector',
    tagline: 'See exactly where your test suite has blind spots.',
    problem:
      "Most teams don't know where their real test coverage gaps are until something breaks in production. Manually auditing test coverage against a live application is slow and easy to get wrong.",
    solution:
      'The agent crawls your live application, diffs what it finds against your existing Playwright spec files, and classifies every gap by test pyramid layer — unit, integration, or end-to-end — then outputs a clear HTML report with ready-to-use test templates.',
    capabilities: [
      'Crawls your live app to map every user-facing flow',
      'Diffs discovered flows against your existing Playwright specs',
      'Classifies gaps by test pyramid layer for prioritisation',
      'Outputs a clear HTML report your whole team can read',
      'Generates ready-to-use test templates for each identified gap',
    ],
    metric: { value: '3x', label: 'faster coverage audits' },
  },
]

const howItWorks = [
  {
    n: '01',
    title: 'Install the agent',
    desc: 'Add the relevant npm package to your project, or connect via webhook for Jira-based agents.',
  },
  {
    n: '02',
    title: 'Connect your stack',
    desc: 'Point the agent at your Jira instance, Playwright suite, or live application URL.',
  },
  {
    n: '03',
    title: 'Agent runs automatically',
    desc: 'Each agent works in the background — triggered by events, CI runs, or on a schedule.',
  },
  {
    n: '04',
    title: 'Review and ship',
    desc: 'Your team reviews AI-generated output and ships with confidence, faster.',
  },
]

export default function QAAgents() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className='container'>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <div className={styles.badge}>QA Agent Suite</div>
              <h1 className={styles.heroTitle}>
                AI agents that <em>do the QA work</em>
                <br />
                your team doesn't have time for.
              </h1>
              <p className={styles.heroSub}>
                Quales builds AI-powered QA agents that plug directly into your
                existing stack — Jira, Playwright, your live application — and
                handle the repetitive, error-prone parts of quality assurance
                automatically.
              </p>
              <div className={styles.heroPills}>
                <span>Drop-in npm packages</span>
                <span>Works with your existing tools</span>
                <span>Built by practising QA engineers</span>
              </div>
              <div className={styles.heroActions}>
                <a
                  href={DEMO_LINK}
                  className='btn btn-talent'
                  style={{ background: '#0071E3' }}
                >
                  Book a demo →
                </a>
                <a href='#agents' className='btn btn-outline'>
                  See all agents
                </a>
              </div>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.heroCardLabel}>Live in production at</div>
              {agents.map((a) => (
                <div key={a.id} className={styles.heroCardRow}>
                  <div className={styles.heroCardDot} />
                  <div className={styles.heroCardInfo}>
                    <strong>{a.name}</strong>
                    <span>{a.tag}</span>
                  </div>
                  <span className={styles.heroCardMetric}>
                    {a.metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AGENTS - deep sections */}
      <section id='agents' className={styles.agentsSection}>
        <div className='container'>
          <div className='greensection-label'>The suite</div>
          <h2 className={styles.sectionTitle}>
            Three agents. One mission: ship quality faster.
          </h2>
          <p className={styles.sectionSub}>
            Each agent solves a specific, painful QA bottleneck — built to plug
            into the tools your team already uses.
          </p>
        </div>

        {agents.map((agent, i) => (
          <div
            key={agent.id}
            id={agent.id}
            className={`${styles.agentBlock} ${i % 2 === 1 ? styles.agentBlockAlt : ''}`}
          >
            <div className='container'>
              <div className={styles.agentGrid}>
                <div className={styles.agentContent}>
                  <span className={styles.agentTag}>{agent.tag}</span>
                  <h3 className={styles.agentName}>{agent.name}</h3>
                  <p className={styles.agentTagline}>{agent.tagline}</p>

                  <div className={styles.agentTextBlock}>
                    <span className={styles.agentLabel}>The problem</span>
                    <p>{agent.problem}</p>
                  </div>

                  <div className={styles.agentTextBlock}>
                    <span className={styles.agentLabel}>How it works</span>
                    <p>{agent.solution}</p>
                  </div>

                  <a
                    href={DEMO_LINK}
                    className='btn btn-talent'
                    style={{ background: '#0071E3' }}
                  >
                    Request a demo →
                  </a>
                </div>

                <div className={styles.agentCard}>
                  <div className={styles.agentMetric}>
                    <span className={styles.agentMetricValue}>
                      {agent.metric.value}
                    </span>
                    <span className={styles.agentMetricLabel}>
                      {agent.metric.label}
                    </span>
                  </div>
                  <div className={styles.agentDivider} />
                  <span className={styles.capListLabel}>Key capabilities</span>
                  <ul className={styles.capList}>
                    {agent.capabilities.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howSection}>
        <div className='container'>
          <div className='greensection-label'>Getting started</div>
          <h2 className={styles.sectionTitle}>
            From install to insight, fast.
          </h2>
          <div className={styles.howGrid}>
            {howItWorks.map((step) => (
              <div key={step.n} className={styles.howStep}>
                <span className={styles.howNum}>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE CTA */}
      <section className={styles.ctaSection}>
        <div className='container'>
          <div className={styles.ctaBox}>
            <span
              className='section-label'
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              For enterprise teams
            </span>
            <h2 className={styles.ctaTitle}>
              Bring the QA Agent Suite to your team.
            </h2>
            <p className={styles.ctaSub}>
              We work directly with engineering and QA leadership to scope which
              agents fit your stack, run a pilot, and roll out with hands-on
              support from our team.
            </p>
            <div className={styles.ctaBtns}>
              <a
                href={DEMO_LINK}
                className='btn btn-talent'
                style={{ background: '#0071E3' }}
              >
                Book a demo →
              </a>
              <Link
                to='/companies#contact'
                className='btn btn-customized'
                style={{ background: '#0071E3' }}
                fontcolor='white'
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
