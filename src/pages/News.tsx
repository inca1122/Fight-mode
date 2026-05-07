export default function News() {
  const articles = [
    { date: '05 Maj 2026', cat: 'Zawodnik', bg: 'linear-gradient(135deg,#1a0000,#0d0d0d)', title: 'Maciej „Striczu" Sulęcki wraca — tym razem na gołe pięści', exc: 'Były mistrz świata w boksie podejmuje nowe wyzwanie. Poznań 23 maja zapowiada się gorąco — „Striczu" na gołe pięści to coś, czego polska scena jeszcze nie widziała.' },
    { date: '28 Kwi 2026', cat: 'Relacja', bg: 'linear-gradient(135deg,#001a06,#0d0d0d)', title: 'Fight Mode 1 — relacja z inauguracyjnej gali', exc: 'Pierwsza gala Fight Mode przeszła do historii polskiego sportu walki. Pełna hala, emocje do ostatniej sekundy i walki, o których mówi cała Polska.' },
    { date: '15 Kwi 2026', cat: 'Wydarzenie', bg: 'linear-gradient(135deg,#00051a,#0d0d0d)', title: 'Oficjalnie: Fight Mode 2 — 23 maja w Poznaniu!', exc: 'Fight Mode powraca silniejszy niż kiedykolwiek. Druga odsłona największej federacji walk na gołe pięści w Polsce. Bilety już dostępne przez ebilet.pl.' },
    { date: '02 Kwi 2026', cat: 'Zawodnik', bg: 'linear-gradient(135deg,#1a0800,#0d0d0d)', title: 'Henry Fadipe dołącza do Fight Mode 2', exc: 'Dynamiczny pięściarz z niebezpiecznym prawym prostym oficjalnie potwierdzony na gali w Poznaniu.' },
    { date: '20 Mar 2026', cat: 'Wydarzenie', bg: 'linear-gradient(135deg,#0d1a00,#0d0d0d)', title: 'Walka kobiet na karcie Fight Mode 2', exc: 'Dominika Rybak vs Jessica Kusz — starcie dwóch polskich mistrzyń w kategorii do 65 kg.' },
    { date: '10 Mar 2026', cat: 'PPV', bg: 'linear-gradient(135deg,#1a001a,#0d0d0d)', title: 'PPV Fight Mode 2 już dostępny na fightmode.tv', exc: 'Oglądaj Fight Mode 2 na żywo z każdego miejsca na świecie. Bez reklam, bez opóźnień.' },
  ];

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', paddingTop: '68px' }}>
      <div className="section">
        <div className="sec-hd">
          <div>
            <p className="sec-tag">Najnowsze</p>
            <h1 className="sec-title">Aktualności</h1>
          </div>
          <div className="sec-line"></div>
        </div>
        <div className="news-grid">
          {articles.map((a, i) => (
            <article key={i} className="nc">
              <div className="nc__imgw">
                <div className="nc__ph" style={{ background: a.bg }}>{a.cat}</div>
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
      </div>
    </div>
  );
}
