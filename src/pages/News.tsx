const BASE = import.meta.env.BASE_URL;

export default function News() {
  const articles = [
    {
      img: 'news2.jpg',
      date: '05 Maj 2026', cat: 'Zawodnik',
      title: 'Maciej „Striczu” Sulęcki wraca — tym razem na gołe pięści',
      exc: 'Były mistrz świata w boksie podejmuje nowe wyzwanie. Poznań 23 maja zapowiada się gorąco — „Striczu” na gołe pięści to coś, czego polska scena jeszcze nie widziała.',
    },
    {
      img: 'news3.jpg',
      date: '28 Kwi 2026', cat: 'Relacja',
      title: 'Fight Mode 1 — relacja z inauguracyjnej gali',
      exc: 'Pierwsza gala Fight Mode przeszła do historii polskiego sportu walki. Pełna hala, emocje do ostatniej sekundy i walki, o których mówi cała Polska.',
    },
    {
      img: 'news1.jpg',
      date: '15 Kwi 2026', cat: 'Wydarzenie',
      title: 'Oficjalnie: Fight Mode 2 — 23 maja w Poznaniu!',
      exc: 'Fight Mode powraca silniejszy niż kiedykolwiek. Druga odstłona największej federacji walk na gołe pięści w Polsce. Bilety już dostępne przez ebilet.pl.',
    },
    {
      img: 'fighters/fadipe.jpg',
      date: '02 Kwi 2026', cat: 'Zawodnik',
      title: 'Henry Fadipe dołącza do Fight Mode 2',
      exc: 'Dynamiczny pięściarz z niebezpiecznym prawym prostym oficjalnie potwierdzony na gali w Poznaniu.',
    },
    {
      img: 'fighters/kusz.jpg',
      date: '20 Mar 2026', cat: 'Wydarzenie',
      title: 'Walka kobiet na karcie Fight Mode 2',
      exc: 'Dominika Rybak vs Jessica Kusz — starcie dwóch polskich mistrzyń w kategorii do 65 kg.',
    },
    {
      img: 'gala-photo.jpg',
      date: '10 Mar 2026', cat: 'PPV',
      title: 'PPV Fight Mode 2 już dostępny na fightmode.tv',
      exc: 'Oglądaj Fight Mode 2 na żywo z każdego miejsca na świecie. Bez reklam, bez opóźnień.',
    },
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
                <img
                  className="nc__img"
                  src={`${BASE}images/${a.img}`}
                  alt={a.title}
                  loading="lazy"
                />
                <span className="nc__cat">{a.cat}</span>
              </div>
              <div className="nc__body">
                <div className="nc__meta">{a.date}</div>
                <h3 className="nc__title">{a.title}</h3>
                <p className="nc__exc">{a.exc}</p>
                <a href="#" className="nc__lnk">
                  Czytaj więcej{' '}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
