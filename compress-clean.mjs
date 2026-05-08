import sharp from 'sharp';
import { statSync, existsSync, renameSync, unlinkSync, writeFileSync, readFileSync } from 'fs';

async function compress(src, dst, { w, fmt, q = 85 }) {
  if (!existsSync(src)) return;
  const before = statSync(src).size;
  const tmp = dst + '.__tmp';
  let s = sharp(src).resize({ width: w, withoutEnlargement: true });
  if (fmt === 'jpg') s = s.jpeg({ quality: q, mozjpeg: true });
  else                s = s.png({ compressionLevel: 9 });
  await s.toFile(tmp);
  const after = statSync(tmp).size;
  if (after < before) {
    renameSync(tmp, dst);
    console.log(`✓ ${dst.split('/').pop()}: ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB`);
  } else {
    unlinkSync(tmp);
    console.log(`– ${dst.split('/').pop()}: уже оптимален (${Math.round(before/1024)}KB)`);
  }
}

// ── ЛОГОТИПЫ — PNG, прозрачность ────────────────────────────────
await compress('public/images/F-logo.png',            'public/images/F-logo.png',            { w: 200,  fmt: 'png' });
await compress('public/images/logo.png',              'public/images/logo.png',              { w: 800,  fmt: 'png' });
await compress('public/images/logo2.png',             'public/images/logo2.png',             { w: 800,  fmt: 'png' });
await compress('public/images/sponsors/pitbull-new.png',    'public/images/sponsors/pitbull-new.png',    { w: 400,  fmt: 'png' });
await compress('public/images/sponsors/logo-fortuna.png',   'public/images/sponsors/logo-fortuna.png',   { w: 300,  fmt: 'png' });
await compress('public/images/sponsors/ebilet.png',         'public/images/sponsors/ebilet.png',         { w: 300,  fmt: 'png' });

// ── ФОТО БОЙЦОВ — PNG → JPG (фото, прозрачность не нужна) ───────
const fighters = [
  'sulecki','maksel','kusz','rybak','fadipe','kubiak','tworek',
  'durski','sek','kaszubowski','sowinski','segda','ugorski','formela'
];
for (const slug of fighters) {
  const src = `public/images/fighters/${slug}.png`;
  const dst = `public/images/fighters/${slug}.jpg`;
  if (!existsSync(src)) continue;
  const before = statSync(src).size;
  await sharp(src)
    .resize({ width: 700, withoutEnlargement: true })
    .jpeg({ quality: 87, mozjpeg: true })
    .toFile(dst + '.__tmp');
  const after = statSync(dst + '.__tmp').size;
  renameSync(dst + '.__tmp', dst);
  console.log(`✓ ${slug}.png→jpg: ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB`);
}

// ── ОСТАЛЬНЫЕ ФОТО ───────────────────────────────────────────────
await compress('public/images/gala-photo.jpg', 'public/images/gala-photo.jpg', { w: 1400, fmt: 'jpg', q: 85 });
await compress('public/images/news1.jpg',      'public/images/news1.jpg',      { w: 900,  fmt: 'jpg', q: 82 });
await compress('public/images/news2.jpg',      'public/images/news2.jpg',      { w: 900,  fmt: 'jpg', q: 82 });
await compress('public/images/news3.jpg',      'public/images/news3.jpg',      { w: 900,  fmt: 'jpg', q: 82 });
await compress('public/images/F1.jpg',         'public/images/F1.jpg',         { w: 800,  fmt: 'jpg', q: 82 });
await compress('public/images/F.jpg',          'public/images/F.jpg',          { w: 800,  fmt: 'jpg', q: 82 });

// ── ОБНОВЛЯЕМ ССЫЛКИ В КОДЕ (PNG→JPG только для бойцов) ─────────
const filesToFix = ['src/pages/Home.tsx', 'src/pages/Zawodnicy.tsx'];
for (const f of filesToFix) {
  const orig = readFileSync(f, 'utf8');
  const fixed = orig.split('fighter.slug}.png').join('fighter.slug}.jpg');
  if (fixed !== orig) {
    writeFileSync(f, fixed, 'utf8');
    console.log(`✓ updated refs: ${f}`);
  }
}

console.log('\n✅ Готово! people-main.png и фон НЕ тронуты.');
