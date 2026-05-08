import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FIGHTERS } from '../data/fighters';
import { FIGHTS } from '../data/fights';
import { usePpvModal } from '../components/PpvModal';

const EBILET = 'https://www.ebilet.pl/sport/sporty-walki/fight-mode';

const BASE = import.meta.env.BASE_URL;
const EVENT = new Date('2026-05-23T20:00:00+02:00');

function useCountdown() {
  const [t, setT] = useState({ d: '00', h: '00', m: '00', s: '00' });
  useEffect(() => {
    const pad = (n: number) => String(n).padStart(2, '0');
    const tick = () => {
      const diff = EVENT.getTime() - Date.now();
      if (diff <= 0) return;
      setT({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('go'); obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    if (ref.current) {
      ref.current.querySelectorAll('.rv').forEach(el => obs.observe(el));
    }
    return () => obs.disconnect();
  }, [ref]);
}

export default function Home() {
  const cd = useCountdown();
  const pageRef = useRef<HTMLDivElement>(null);
  const openPpv = usePpvModal();
  useReveal(pageRef);

  return (
    <div ref={pageRef}>
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero__bg"></div>

        {/* People image — fades into dark background */}
        <div className="hero__people">
          <img src={`${BASE}images/people-main.webp`} alt="" className="hero__people-img" fetchPriority="high" decoding="async" />
        </div>

        {/* Smoke rising from bottom */}
        <div className="hero__smoke" aria-hidden="true">
          <div className="smoke-layer smoke-1"></div>
          <div className="smoke-layer smoke-2"></div>
          <div className="smoke-layer smoke-3"></div>
          <div className="smoke-layer smoke-4"></div>
        </div>

        {/* Logo — centered below navbar, above fighters' heads */}
        <div className="hero__logo-corner">
          <img src={`${BASE}images/logo.png`} alt="Fight Mode — Bare Knuckle Poland" className="hero__logo-corner-img" />
        </div>

        <div className="hero__c">
          <div className="hero__sub">
            <strong>23 MAJA 2026</strong>
            <span className="sep">✦</span>
            <strong>POZNAŃ</strong>
            <span className="sep">✦</span>
            <strong>WALKI NA GOŁE PIĘŚCI</strong>
          </div>
          <div className="countdown">
            <div className="cd-item"><span className="cd-num">{cd.d}</span><span className="cd-lbl">Dni</span></div>
            <span className="cd-sep">:</span>
            <div className="cd-item"><span className="cd-num">{cd.h}</span><span className="cd-lbl">Godz</span></div>
            <span className="cd-sep">:</span>
            <div className="cd-item"><span className="cd-num">{cd.m}</span><span className="cd-lbl">Min</span></div>
            <span className="cd-sep">:</span>
            <div className="cd-item"><span className="cd-num">{cd.s}</span><span className="cd-lbl">Sek</span></div>
          </div>
          <div className="hero__cta">
            <a href={EBILET} target="_blank" rel="noreferrer" className="btn-h r">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
              Kup Bilet
            </a>
            <button onClick={openPpv} className="btn-h o">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>
              Oglądaj PPV
            </button>
          </div>
        </div>
        <div className="hero__hint">
          <span>Przewiń</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker__track">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: 'contents' }}>
              <span className="ticker__item">Fight Mode 2 — 23 maja 2026 — Poznań <span className="td">✦</span></span>
              <span className="ticker__item">Maciej „Striczu" Sulęcki powraca — tym razem na gołe pięści <span className="td">✦</span></span>
              <span className="ticker__item">Bilety już w sprzedaży — ebilet.pl <span className="td">✦</span></span>
              <span className="ticker__item">PPV — oglądaj z każdego miejsca na świecie <span className="td">✦</span></span>
              <span className="ticker__item">Bare Knuckle Poland — bez rękawic, bez litości <span className="td">✦</span></span>
            </span>
          ))}
        </div>
      </div>

      {/* KARTA WALK */}
      <section className="section event-section" id="karta-walk">
        <div className="sec-hd rv fl">
          <div>
            <p className="sec-tag">Najbliższe wydarzenie</p>
            <h2 className="sec-title">Karta Walk</h2>
          </div>
          <div className="sec-line"></div>
        </div>
        <div className="event-grid">
          <div className="eposter rv fl">
            <img src={`${BASE}images/gala-photo.jpg`} alt="" className="eposter__bg-photo" />
            <div className="eposter__bg-num">2</div>
            <p className="eposter__ed">Fight Mode — Edycja 2</p>
            <h2 className="eposter__name">POZNAŃ<br />23.05.2026</h2>
            <div className="eposter__dets">
              <div className="edet"><div className="edet__val">23 Maja</div><div className="edet__lbl">Data</div></div>
              <div className="edet-sep"></div>
              <div className="edet"><div className="edet__val">Poznań</div><div className="edet__lbl">Miasto</div></div>
              <div className="edet-sep"></div>
              <div className="edet"><div className="edet__val">Gołe Pięści</div><div className="edet__lbl">Format</div></div>
            </div>
            <div className="eposter__cta">
              <a href={EBILET} target="_blank" rel="noreferrer" className="btn-h r" style={{ fontSize: '14px', padding: '12px 28px' }}>Kup Bilet</a>
              <button onClick={openPpv} className="btn-h o" style={{ fontSize: '14px', padding: '10px 28px' }}>Oglądaj PPV</button>
            </div>
          </div>
          <div className="fcard rv fr">
            <div className="fcard__hd">Walki wieczoru · Fight Mode 2 · Poznań</div>
            {FIGHTS.map(f => (
              <div key={f.id} className={`frow${f.isMain ? ' main' : ''}`}>
                <div><div className="fn">{f.redCorner}</div></div>
                <div className="fmid">
                  <span className="fbadge fblabel">{f.label ?? ' '}</span>
                  <span className="fvs">VS</span>
                  <div className="fwt">{f.weightClass}</div>
                </div>
                <div><div className="fn r">{f.blueCorner}</div></div>
              </div>
            ))}
            <p style={{ fontFamily: 'var(--fc)', fontSize: '10px', letterSpacing: '2px', color: 'var(--muted)', textTransform: 'uppercase', textAlign: 'center', marginTop: '12px' }}>* Karta walk może ulec zmianie</p>
          </div>
        </div>
      </section>

      {/* ZAWODNICY TEASER */}
      <section className="section fighters-section" id="zawodnicy-teaser">
        <div className="sec-hd rv fl">
          <div>
            <p className="sec-tag">Profesjonalni wojownicy</p>
            <h2 className="sec-title">Zawodnicy</h2>
          </div>
          <div className="sec-line"></div>
          <Link to="/zawodnicy" style={{ fontFamily: 'var(--fc)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--orange)', whiteSpace: 'nowrap' }}>Wszyscy →</Link>
        </div>
        <div className="fighters-grid">
          {FIGHTERS.slice(0, 4).map((fighter, i) => (
            <div key={fighter.id} className="fc rv sc" style={{ transitionDelay: `${i * 0.06}s` }}>
              <img className="fc__img" src={`${BASE}images/fighters/${fighter.slug}.jpg`} alt={`${fighter.firstName} ${fighter.lastName}`} loading="lazy" />
              <div className="fc__ov"></div>
              <span className="fc__wt">{fighter.weightClass}</span>
              <div className="fc__info">
                {fighter.nickname && <div className="fc__nick">„{fighter.nickname}"</div>}
                <div className="fc__name">{fighter.firstName}<br />{fighter.lastName}</div>
                <div className="fc__stats">
                  <div><span className="fc-sl">Kraj</span><div className="fc-sv">🇵🇱 Polska</div></div>
                  <div><span className="fc-sl">Waga</span><div className="fc-sv">{fighter.weightKg} kg</div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/zawodnicy" className="btn-h o" style={{ display: 'inline-flex' }}>Wszyscy zawodnicy →</Link>
        </div>
      </section>

      {/* AKTUALNOŚCI */}
      <section className="section news-section" id="aktualnosci">
        <div className="sec-hd rv fl">
          <div>
            <p className="sec-tag">Najnowsze</p>
            <h2 className="sec-title">Aktualności</h2>
          </div>
          <div className="sec-line"></div>
          <Link to="/aktualnosci" style={{ fontFamily: 'var(--fc)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--orange)', whiteSpace: 'nowrap' }}>Wszystkie →</Link>
        </div>
        <div className="news-grid">
          {[
            { img: 'news2.jpg', cat: 'Zawodnik', date: '05 Maj 2026', title: 'Maciej „Striczu" Sulęcki wraca — tym razem na gołe pięści', exc: 'Były mistrz świata w boksie podejmuje nowe wyzwanie. Poznań 23 maja zapowiada się gorąco.' },
            { img: 'news3.jpg', cat: 'Relacja',  date: '28 Kwi 2026', title: 'Fight Mode 1 — relacja z inauguracyjnej gali', exc: 'Pierwsza gala Fight Mode przeszła do historii polskiego sportu walki.' },
            { img: 'news1.jpg', cat: 'Wydarzenie', date: '15 Kwi 2026', title: 'Oficjalnie: Fight Mode 2 — 23 maja w Poznaniu!', exc: 'Fight Mode powraca silniejszy niż kiedykolwiek. Bilety już dostępne przez ebilet.pl.' },
          ].map((a, i) => (
            <article key={i} className="nc rv fb" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="nc__imgw">
                <img className="nc__img" src={`${BASE}images/${a.img}`} alt={a.title} loading="lazy" />
                <span className="nc__cat">{a.cat}</span>
              </div>
              <div className="nc__body">
                <div className="nc__meta">{a.date}</div>
                <h3 className="nc__title">{a.title}</h3>
                <p className="nc__exc">{a.exc}</p>
                <a href="#" className="nc__lnk">Czytaj więcej <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PPV BAND */}
      <section className="ppv-band" id="ppv">
        <div className="rv fb">
          <p className="ppv-tag">Oglądaj na żywo</p>
          <h2 className="ppv-title">PAY-PER-VIEW<br /><span style={{ color: 'var(--red)' }}>Fight Mode 2</span></h2>
          <p className="ppv-sub">Nie możesz być w Poznaniu? Żaden problem. Kup dostęp PPV i oglądaj Fight Mode 2 na żywo z każdego miejsca na świecie — bez reklam, bez opóźnień.</p>
          <button onClick={openPpv} className="btn-h r" style={{ display: 'inline-flex' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>
            Kup PPV
          </button>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="sponsors">
        <p className="sponsors__lbl">Oficjalni Sponsorzy Fight Mode</p>
        <div className="sponsors__row">
          <a href="https://www.efortuna.pl" target="_blank" rel="noreferrer" className="sp" title="Fortuna">
            <img src={`${BASE}images/sponsors/logo-fortuna.png`} alt="Fortuna" style={{ height: '44px', objectFit: 'contain' }} />
          </a>
          <div className="sp">
            <img src={`${BASE}images/sponsors/pitbull-new.png`} alt="Pitbull Energy Drink" style={{ height: '96px', objectFit: 'contain' }} />
          </div>
          <div className="sp">
            <div style={{ fontFamily: 'var(--fc)', fontWeight: 900, fontSize: 'clamp(18px,2vw,28px)', letterSpacing: '0px', textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, textAlign: 'center' }}>
              GASTRO<br />PACZKA
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
