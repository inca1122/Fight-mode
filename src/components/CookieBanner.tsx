import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem('cookie_consent', 'accepted'); setVisible(false); };
  const decline = () => { localStorage.setItem('cookie_consent', 'declined'); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="ck-banner" role="dialog" aria-label="Zgoda na pliki cookie">
      <div className="ck-inner">
        <div className="ck-text">
          <p className="ck-title">Pliki Cookie</p>
          <p className="ck-desc">
            Używamy plików cookie, aby zapewnić prawidłowe działanie strony, analizować ruch oraz personalizować treści.
            Możesz zaakceptować wszystkie pliki cookie lub odrzucić te nieobowiązkowe.{' '}
            <a href="#" className="ck-link">Polityka prywatności</a>
          </p>
        </div>
        <div className="ck-actions">
          <button className="ck-btn ck-btn--decline" onClick={decline}>Odrzuć</button>
          <button className="ck-btn ck-btn--accept" onClick={accept}>Akceptuję</button>
        </div>
      </div>
    </div>
  );
}
