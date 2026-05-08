import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FIGHTERS } from '../data/fighters';
import { opponentMap } from '../data/fights';

const BASE = import.meta.env.BASE_URL;

const ORDER = ['main', 'co-main', 'undercard'] as const;
const sorted = [...FIGHTERS].sort((a, b) => ORDER.indexOf(a.cardType) - ORDER.indexOf(b.cardType));

export default function Zawodnicy() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('go'); obs.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    pageRef.current?.querySelectorAll('.rv').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={pageRef} style={{ background: '#131418', minHeight: '100vh', paddingTop: '68px' }}>
      {/* HERO STRIP */}
      <div style={{ padding: '60px 60px 40px', borderBottom: '1px solid #1e1e22' }}>
        <p style={{ fontFamily: 'var(--fc)', fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#555', marginBottom: '14px' }}>
          <Link to="/" style={{ color: '#555' }}>Strona główna</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: '#D4A434' }}>Zawodnicy</span>
        </p>
        <h1 style={{ fontFamily: 'var(--fc)', fontWeight: 900, fontSize: 'clamp(72px,10vw,140px)', textTransform: 'uppercase', letterSpacing: '-2px', lineHeight: 0.9, color: '#fff', marginBottom: '18px' }}>ZAWODNICY</h1>
        <p style={{ fontFamily: 'var(--fc)', fontSize: '13px', fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase', color: '#D4A434' }}>FIGHT MODE 2 · 23.05.2026 · POZNAŃ</p>
      </div>

      {/* FIGHTER CARDS */}
      <div style={{ padding: '24px 60px 80px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {sorted.map((fighter, idx) => {
          const fullName = `${fighter.firstName} ${fighter.lastName}`;
          const opponent = opponentMap.get(fullName) ?? 'TBA';
          const panelVisible = isMobile ? expandedId === fighter.id : hoveredId === fighter.id;

          return (
            <div
              key={fighter.id}
              className={`fighter-card rv fb${expandedId === fighter.id ? ' expanded' : ''}`}
              style={{ transitionDelay: `${Math.min(idx, 5) * 0.08}s` }}
              onMouseEnter={() => !isMobile && setHoveredId(fighter.id)}
              onMouseLeave={() => !isMobile && setHoveredId(null)}
              onClick={() => isMobile && setExpandedId(id => id === fighter.id ? null : fighter.id)}
              aria-expanded={isMobile ? expandedId === fighter.id : undefined}
            >
              {/* Photo */}
              <div className="fc-photo">
                <img
                  className="fc-img"
                  src={`${BASE}images/fighters/${fighter.slug}.jpg`}
                  alt={fullName}
                  loading="lazy"
                  style={{ mixBlendMode: 'luminosity' } as React.CSSProperties}
                  onLoad={e => { (e.currentTarget as HTMLImageElement).style.mixBlendMode = 'normal'; }}
                />
              </div>

              {/* Info */}
              <div className="fc-info">
                <span className="fc-index">#{fighter.id}</span>
                <h2 className="fc-name">
                  <span className="fc-firstname">{fighter.firstName}</span>
                  <span className="fc-lastname">{fighter.lastName.toUpperCase()}</span>
                </h2>
                {fighter.nickname && <p className="fc-nick">„{fighter.nickname}"</p>}
                <div className="fc-divider" />
                <p className="fc-meta">
                  {fighter.record ?? '—'} · {fighter.country === 'PL' ? '🇵🇱 Polska' : fighter.country} · {fighter.style ?? '—'}
                </p>
              </div>

              {/* Weight badge */}
              <div className="fc-weight-badge">{fighter.weightClass}</div>

              {/* Slide-out panel */}
              <div className={`fc-panel${panelVisible ? ' fc-panel--visible' : ''}`}>
                <p className="fcp-label">DANE ZAWODNIKA</p>
                <div className="fcp-stats">
                  <span>WIEK</span><span>{fighter.age ?? '—'}</span>
                  <span>WZROST</span><span>{fighter.height ?? '—'}</span>
                  <span>WAGA</span><span>{fighter.weightKg} kg</span>
                  <span>STYL</span><span>{fighter.style ?? '—'}</span>
                  <span>KLUB</span><span>{fighter.club ?? 'TBA'}</span>
                  <span>REKORD</span><span>{fighter.record ?? '—'}</span>
                </div>
                <div className="fcp-divider" />
                <p className="fcp-bio">{fighter.bio}</p>
                <div className="fcp-vs">VS {opponent}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
