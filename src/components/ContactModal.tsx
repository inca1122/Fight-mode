import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

const Ctx = createContext<() => void>(() => {});
export const useContactModal = () => useContext(Ctx);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <Ctx.Provider value={() => setOpen(true)}>
      {children}
      {open && (
        <div className="cm-overlay" onClick={close}>
          <div className="cm" onClick={e => e.stopPropagation()}>
            <button className="cm__close" onClick={close} aria-label="Zamknij">✕</button>

            <div className="cm__body">
              {/* LEFT */}
              <div className="cm__left">
                <h2 className="cm__title">KONTAKT</h2>
                <p className="cm__desc">Masz pytania? Chcesz zacząć współpracę? Chcesz się reklamować? Skontaktuj się z nami.</p>
                <div className="cm__links">
                  <a href="mailto:kontakt@fightmode.pl" className="cm__link">
                    <span className="cm__icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                    </span>
                    kontakt@fightmode.pl
                  </a>
                  <div className="cm__link">
                    <span className="cm__icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <span>ul. Marcina Kasprzaka 29A lok. 917,<br />01-234 Warszawa</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — form */}
              <form className="cm__form" action="mailto:kontakt@fightmode.pl" method="post" encType="text/plain">
                <div className="cm__field">
                  <label>Imię i Nazwisko</label>
                  <input type="text" name="name" placeholder="Imię i Nazwisko" required />
                </div>
                <div className="cm__field">
                  <label>E-mail</label>
                  <input type="email" name="email" placeholder="E-mail" required />
                </div>
                <div className="cm__field">
                  <label>Numer telefonu</label>
                  <input type="tel" name="phone" placeholder="Numer telefonu" />
                </div>
                <label className="cm__check">
                  <input type="checkbox" name="newsletter" />
                  <span>Chcę otrzymywać informacje o nowych galach i promocjach (opcjonalnie).</span>
                </label>
                <label className="cm__check">
                  <input type="checkbox" name="phone_consent" required />
                  <span>Wyrażam zgodę na kontakt telefoniczny w celu dokończenia zgłoszenia. <em>*</em></span>
                </label>
                <button type="submit" className="cm__submit">WYŚLIJ ZGŁOSZENIE</button>
              </form>
            </div>

            {/* DANE FIRMY */}
            <div className="cm__company">
              <p className="cm__company-title">DANE FIRMY</p>
              <div className="cm__company-items">
                <div className="cm__ci">
                  <span className="cm__icon cm__icon--sm">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                  </span>
                  NIP: 5273211626
                </div>
                <div className="cm__ci">
                  <span className="cm__icon cm__icon--sm">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                  </span>
                  KRS: 0001230805
                </div>
                <div className="cm__ci">
                  <span className="cm__icon cm__icon--sm">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </span>
                  REGON: 544336948
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
