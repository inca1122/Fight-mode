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

        {/* People image */}
        <div className="hero__people">
          <img src={`${BASE}images/people-main.webp`} alt="" className="hero__people-img hero__people-img--desktop" fetchPriority="high" decoding="async" />
          <img src={`${BASE}images/people-main-mobile.webp`} alt="" className="hero__people-img hero__people-img--mobile" loading="eager" decoding="async" />
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
              <span className="ticker__item">Fight Mode — 23 maja 2026 — Poznań <span className="td">✦</span></span>
              <span className="ticker__item">Maciej „Striczu" Sulęcki powraca — tym razem na gołe pięści <span className="td">✦</span></span>
              <span className="ticker__item">Bilety już w sprzedaży — ebilet.pl <span className="td">✦</span></span>
              <span className="ticker__item">PPV — oglądaj z każdego miejsca na świecie <span className="td">✦</span></span>
              <span className="ticker__item">Bare Knuckle Poland — bez rękawic, bez litości <span className="td">✦</span></span>
            </span>
          ))}
        </div>
      </div>

      {/* SPONSORS */}
      <section className="partners">
        <p className="partners__label">OFICJALNI SPONSORZY</p>
        <div className="partners__row">
          <a href="https://www.efortuna.pl" target="_blank" rel="noreferrer" className="partner-card">
            <img src={`${BASE}images/sponsors/logo-fortuna.png`} alt="Fortuna" className="plogo plogo--fortuna" />
            <span className="partner-card__disclaimer">Fortuna to legalny bukmacher. Hazard wiąże się z ryzykiem.</span>
          </a>
          <div className="partners__sep" />
          <a href="https://pitbull.pl" target="_blank" rel="noreferrer" className="partner-card">
            <img src={`${BASE}images/sponsors/pitbull-logo.png`} alt="Pitbull" className="plogo plogo--pitbull" />
          </a>
          <div className="partners__sep" />
          <a href="https://gastropaczka.pl" target="_blank" rel="noreferrer" className="partner-card">
            <img src={`${BASE}images/sponsors/gastro-logo.png`} alt="Gastro Paczka" className="plogo plogo--gastro" />
          </a>
        </div>
      </section>

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
            
            <p className="eposter__ed">Fight Mode — 23 Maja 2026</p>
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
            <div className="fcard__hd">Walki wieczoru · Fight Mode · Poznań</div>
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

      {/* KONTAKT */}
      <section className="section contact-section" id="kontakt-form">
        <div className="sec-hd rv fl">
          <div>
            <p className="sec-tag">Napisz do nas</p>
            <h2 className="sec-title">Kontakt</h2>
          </div>
          <div className="sec-line"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-info rv fl">
            <p className="contact-desc">Masz pytania? Chcesz zacząć współpracę? Chcesz się reklamować? Skontaktuj się z nami.</p>
            <div className="contact-details">
              <a href="mailto:kontakt@fightmode.pl" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                kontakt@fightmode.pl
              </a>
              <div className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ul. Marcina Kasprzaka 29A lok. 917,<br />01-234 Warszawa
              </div>
            </div>
            <div className="company-data">
              <p className="company-data__title">Dane firmy</p>
              <div className="company-data__row"><span>NIP</span><span>5273211626</span></div>
              <div className="company-data__row"><span>KRS</span><span>0001230805</span></div>
              <div className="company-data__row"><span>REGON</span><span>544336948</span></div>
            </div>
          </div>
          <form className="contact-form rv fr" action="mailto:kontakt@fightmode.pl" method="post" encType="text/plain">
            <div className="cf-field">
              <input type="text" name="name" placeholder="Imię i Nazwisko" required />
            </div>
            <div className="cf-field">
              <input type="email" name="email" placeholder="E-mail" required />
            </div>
            <div className="cf-field">
              <input type="tel" name="phone" placeholder="Numer telefonu" />
            </div>
            <label className="cf-check">
              <input type="checkbox" name="newsletter" />
              <span>Chcę otrzymywać informacje o nowych galach i promocjach (opcjonalnie).</span>
            </label>
            <label className="cf-check">
              <input type="checkbox" name="phone_consent" required />
              <span>Wyrażam zgodę na kontakt telefoniczny w celu dokończenia zgłoszenia. <em>*</em></span>
            </label>
            <button type="submit" className="btn-h r" style={{ width: '100%', justifyContent: 'center' }}>Wyślij wiadomość</button>
          </form>
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
            { img: 'news3.jpg', cat: 'Relacja',  date: '28 Kwi 2026', title: 'Fight Mode — relacja z inauguracyjnej gali', exc: 'Pierwsza gala Fight Mode przeszła do historii polskiego sportu walki.' },
            { img: 'news1.jpg', cat: 'Wydarzenie', date: '15 Kwi 2026', title: 'Oficjalnie: Fight Mode — 23 maja w Poznaniu!', exc: 'Fight Mode powraca silniejszy niż kiedykolwiek. Bilety już dostępne przez ebilet.pl.' },
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


    </div>
  );
}
