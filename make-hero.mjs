import sharp from 'sharp';

const SRC = 'D:/My AI/Fight Klub/Все файлы/Fight Mode/4к green people.jpg';
const OUT = 'public/images/people-main.jpg';
const W = 1920, H = 1080;

console.log('Loading source...');
const { data, info } = await sharp(SRC)
  .resize({ width: W, height: H, fit: 'cover', position: 'top' })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

console.log(`Processing ${info.width}x${info.height} pixels...`);
const px = new Uint8ClampedArray(data);

for (let i = 0; i < px.length; i += 4) {
  const r = px[i], g = px[i+1], b = px[i+2];
  const gExcess = g - Math.max(r, b);
  const isGreen = g > 55 && gExcess > 20 && g > r * 1.15;
  const isEdge  = g > 40 && gExcess > 8 && g > r * 1.08;

  if (isGreen) {
    px[i+3] = 0;
  } else if (isEdge) {
    const strength = Math.min(1, (gExcess - 8) / 18);
    px[i+3] = Math.round(255 * (1 - strength * 0.92));
    const avg = Math.round((r + b) / 2);
    px[i+1] = Math.round(g * (1 - strength * 0.85) + avg * strength * 0.85);
  } else {
    // Aggressive spill suppression on all pixels
    if (gExcess > 4) {
      px[i+1] = Math.max(0, g - Math.round(gExcess * 0.85));
    }
    px[i+3] = 255;
  }
}

// Fighters layer (transparent PNG)
const fighters = await sharp(Buffer.from(px.buffer), {
  raw: { width: info.width, height: info.height, channels: 4 }
}).png().toBuffer();

// Atmospheric background: dark reddish gradient
// Build as SVG radial gradient baked into image
const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="g" cx="50%" cy="55%" r="65%">
      <stop offset="0%"   stop-color="#1a0400" stop-opacity="1"/>
      <stop offset="40%"  stop-color="#0f0100" stop-opacity="1"/>
      <stop offset="100%" stop-color="#050000" stop-opacity="1"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="70%" r="50%">
      <stop offset="0%"   stop-color="#cc1100" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#cc1100" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="42%"  stop-color="#000000" stop-opacity="0"/>
      <stop offset="72%"  stop-color="#050000" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="#050000" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#fade)"/>
</svg>`;

const bg = await sharp(Buffer.from(bgSvg)).png().toBuffer();

console.log('Compositing...');
await sharp(bg)
  .composite([{ input: fighters, blend: 'over' }])
  .flatten({ background: { r: 5, g: 0, b: 0 } })
  .jpeg({ quality: 93, mozjpeg: true })
  .toFile(OUT);

const { statSync } = await import('fs');
console.log(`✓ ${OUT}: ${Math.round(statSync(OUT).size / 1024)}KB`);
