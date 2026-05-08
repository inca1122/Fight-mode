import { createContext, useContext, useState, type ReactNode } from 'react';

const Ctx = createContext<() => void>(() => {});
export const usePpvModal = () => useContext(Ctx);

export function PpvModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Ctx.Provider value={() => setOpen(true)}>
      {children}
      {open && (
        <div className="ppvm-overlay" onClick={close}>
          <div className="ppvm" onClick={e => e.stopPropagation()}>
            <button className="ppvm__close" onClick={close} aria-label="Zamknij">✕</button>
            <p className="ppvm__tag">PPV · Fight Mode 2</p>
            <h2 className="ppvm__title">Już<br />wkrótce</h2>
            <p className="ppvm__text">
              Sprzedaż dostępu PPV do Fight Mode 2 zostanie uruchomiona wkrótce.<br />
              Śledź nasze media społecznościowe, aby nie przegapić informacji.
            </p>
            <div className="ppvm__socials">
              <a href="https://www.instagram.com/fightmode.pl" target="_blank" rel="noreferrer">Instagram</a>
              <span>·</span>
              <a href="https://www.facebook.com/fightmode.pl" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
