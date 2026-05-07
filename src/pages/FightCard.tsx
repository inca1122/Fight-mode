import { Link } from 'react-router-dom';
import { FIGHTS } from '../data/fights';

export default function FightCard() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', paddingTop: '68px' }}>
      <div className="section">
        <div className="sec-hd">
          <div>
            <p className="sec-tag">Fight Mode 2 · 23.05.2026</p>
            <h1 className="sec-title">Karta Walk</h1>
          </div>
          <div className="sec-line"></div>
        </div>
        <div className="event-grid">
          <div className="eposter">
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
              <a href="https://ebilet.pl" target="_blank" rel="noreferrer" className="btn-h r" style={{ fontSize: '14px', padding: '12px 28px' }}>Kup Bilet</a>
              <Link to="/ppv" className="btn-h o" style={{ fontSize: '14px', padding: '10px 28px' }}>Oglądaj PPV</Link>
            </div>
          </div>
          <div className="fcard">
            <div className="fcard__hd">Walki wieczoru · Fight Mode 2 · Poznań</div>
            {FIGHTS.map(f => (
              <div key={f.id} className={`frow${f.isMain ? ' main' : ''}`}>
                <div><div className="fn">{f.redCorner}</div></div>
                <div>
                  <span className="fvs">VS</span>
                  {f.label && <span className="fbadge">{f.label}</span>}
                  <div className="fwt">{f.weightClass}</div>
                </div>
                <div><div className="fn r">{f.blueCorner}</div></div>
              </div>
            ))}
            <p style={{ fontFamily: 'var(--fc)', fontSize: '10px', letterSpacing: '2px', color: 'var(--muted)', textTransform: 'uppercase', textAlign: 'center', marginTop: '12px' }}>* Karta walk może ulec zmianie</p>
          </div>
        </div>
      </div>
    </div>
  );
}
