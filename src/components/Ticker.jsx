export default function Ticker({ items, speed = 30 }) {
  // Repeat items enough times to guarantee overflow on any screen
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items]
  const pct = (1 / 6) * 100

  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
    }}>
      <style>{`
        @keyframes quales-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${pct.toFixed(4)}%); }
        }
      `}</style>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: 'max-content',
        animation: `quales-ticker ${speed}s linear infinite`,
        willChange: 'transform',
      }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        {repeated.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '0 2.5rem',
            whiteSpace: 'nowrap',
          }}>
            <span style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: '#d4d4d1',
              flexShrink: 0,
              display: 'inline-block',
            }} />
            <span style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '1.15rem',
              color: '#9b9b97',
              letterSpacing: '-0.01em',
              cursor: 'default',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#2B586B'}
              onMouseLeave={e => e.currentTarget.style.color = '#9b9b97'}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
