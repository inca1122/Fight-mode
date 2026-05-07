export default function PPVPage() {
  return (
    <div style={{ background: '#0c0000', minHeight: '100vh', paddingTop: '68px' }}>
      <section className="ppv-band" style={{ minHeight: 'calc(100vh - 68px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p className="ppv-tag">Oglądaj na żywo</p>
        <h1 className="ppv-title">PAY-PER-VIEW<br /><span style={{ color: 'var(--red)' }}>Fight Mode 2</span></h1>
        <p className="ppv-sub">Nie możesz być w Poznaniu? Żaden problem. Kup dostęp PPV i oglądaj Fight Mode 2 na żywo z każdego miejsca na świecie — bez reklam, bez opóźnień.</p>
        <a href="https://fightmode.tv" target="_blank" rel="noreferrer" className="btn-h r" style={{ display: 'inline-flex', marginBottom: '40px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>
          Kup PPV — fightmode.tv
        </a>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px', maxWidth: '700px', width: '100%', marginTop: '20px' }}>
          {[['📺', 'Smart TV', 'Samsung, LG, Apple TV, Android TV'], ['📱', 'Mobile', 'iOS i Android — ogląadaj wszędzie'], ['💻', 'Web', 'Każda przeglądarka, bez wtyczek']].map(([icon, title, desc]) => (
            <div key={title} style={{ background: '#160000', padding: '24px', textAlign: 'center', border: '1px solid #1a0000' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>{icon}</div>
              <div style={{ fontFamily: 'var(--fc)', fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: '#fff', marginBottom: '6px' }}>{title}</div>
              <div style={{ fontSize: '12px', color: '#666', lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
