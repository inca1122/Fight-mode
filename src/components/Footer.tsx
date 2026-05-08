import { Link } from 'react-router-dom';
import { useContactModal } from './ContactModal';

const BASE = import.meta.env.BASE_URL;
const EBILET = 'https://www.ebilet.pl/sport/sporty-walki/fight-mode';

export default function Footer() {
  const openContact = useContactModal();

  return (
    <footer className="footer" id="footer">

      {/* MAIN */}
      <div className="footer__main">

        {/* BRAND */}
        <div className="f-brand">
          <img src={`${BASE}images/logo.png`} alt="Fight Mode" className="f-logo-img" />
          <p className="f-desc">Fight Mode to pierwsza w Polsce profesjonalna federacja walk na gołe pięści. Surowa, bezpośrednia i bez kompromisów.</p>
          <div className="f-soc">
            <a href="https://www.youtube.com/@Fightmode.official" target="_blank" rel="noreferrer" className="f-si">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/></svg>
            </a>
            <a href="https://www.instagram.com/fightmode.official/" target="_blank" rel="noreferrer" className="f-si">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/fightmode.official/" target="_blank" rel="noreferrer" className="f-si">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@fightmodeofficial" target="_blank" rel="noreferrer" className="f-si">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.04a4.85 4.85 0 01-1-.35z"/></svg>
            </a>
          </div>
        </div>

        {/* MENU */}
        <div className="f-col">
          <p className="f-ct">Menu</p>
          <ul className="f-ul">
            <li><Link to="/">Strona główna</Link></li>
            <li><Link to="/zawodnicy">Zawodnicy</Link></li>
            <li><Link to="/karta-walk">Karta Walk</Link></li>
            <li><Link to="/aktualnosci">Aktualności</Link></li>
          </ul>
        </div>

        {/* KONTAKT */}
        <div className="f-col">
          <p className="f-ct">Kontakt</p>
          <ul className="f-ul">
            <li><button className="f-ppv-btn" onClick={openContact}>Napisz do nas</button></li>
            <li><a href="mailto:kontakt@fightmode.pl">kontakt@fightmode.pl</a></li>
            <li><a href={EBILET} target="_blank" rel="noreferrer">Kup bilet — ebilet.pl</a></li>
          </ul>
        </div>

      </div>

      <div className="footer__bot">
        <p className="f-copy">© 2026 Fight Mode — Bare Knuckle Poland. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
