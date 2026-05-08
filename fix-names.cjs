const fs = require('fs');
const files = [
  'src/pages/Home.tsx',
  'src/pages/News.tsx',
  'src/pages/PPVPage.tsx',
  'src/pages/FightCard.tsx',
  'src/components/Footer.tsx',
  'src/components/PpvModal.tsx',
];
const replacements = [
  ['Fight Mode 2 — 23 maja 2026 — Poznań', 'Fight Mode — 23 maja 2026 — Poznań'],
  ['Fight Mode — Edycja 2', 'Fight Mode — 23 Maja 2026'],
  ['Fight Mode 2 · Poznań', 'Fight Mode · Poznań'],
  ['Fight Mode 2 · 23.05.2026', 'Fight Mode · 23.05.2026'],
  ['Fight Mode 1 — relacja z inauguracyjnej gali', 'Fight Mode — relacja z inauguracyjnej gali'],
  ['Oficjalnie: Fight Mode 2 — 23 maja w Poznaniu!', 'Oficjalnie: Fight Mode — 23 maja w Poznaniu!'],
  ['Fight Mode 2 już dostępny na fightmode.tv', 'Fight Mode już dostępny na fightmode.tv'],
  ['Henry Fadipe dołącza do Fight Mode 2', 'Henry Fadipe dołącza do Fight Mode'],
  ['Walka kobiet na karcie Fight Mode 2', 'Walka kobiet na karcie Fight Mode'],
  ['Oglądaj Fight Mode 2 na żywo', 'Oglądaj Fight Mode na żywo'],
  ['oglądaj Fight Mode 2 na żywo', 'oglądaj Fight Mode na żywo'],
  ['PPV · Fight Mode 2', 'PPV · Fight Mode'],
  ['dostępu PPV do Fight Mode 2', 'dostępu PPV do Fight Mode'],
  ['Fight Mode 2</span>', 'Fight Mode</span>'],
  ['Fight Mode 2</Link>', 'Fight Mode</Link>'],
  ['walki wieczoru · Fight Mode 2', 'Walki wieczoru · Fight Mode'],
  ['Walki wieczoru · Fight Mode 2', 'Walki wieczoru · Fight Mode'],
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let c = fs.readFileSync(f, 'utf8');
  const orig = c;
  replacements.forEach(([from, to]) => { c = c.split(from).join(to); });
  if (c !== orig) { fs.writeFileSync(f, c, 'utf8'); console.log('fixed:', f); }
  else console.log('no change:', f);
});
