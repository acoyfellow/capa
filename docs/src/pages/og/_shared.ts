import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const fontsDir = path.resolve(process.cwd(), 'public/fonts');
const sansRegularB64 = fs.readFileSync(path.join(fontsDir, 'google-sans-flex-400.ttf')).toString('base64');
const sansBoldB64 = fs.readFileSync(path.join(fontsDir, 'google-sans-flex-700.ttf')).toString('base64');
const codeRegularB64 = fs.readFileSync(path.join(fontsDir, 'google-sans-code-400.ttf')).toString('base64');
const codeMediumB64 = fs.readFileSync(path.join(fontsDir, 'google-sans-code-500.ttf')).toString('base64');

const W = 1200;
const H = 630;

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function wrapText(text: string, maxChars: number, maxLines = 3): string[] {
	const words = text.trim().split(/\s+/).filter(Boolean);
	const lines: string[] = [];
	let current = '';
	for (const word of words) {
		const candidate = current ? `${current} ${word}` : word;
		if (candidate.length > maxChars && current) {
			lines.push(current);
			current = word;
		} else {
			current = candidate;
		}
		if (lines.length === maxLines) break;
	}
	if (current && lines.length < maxLines) lines.push(current);
	if (words.join(' ').length > lines.join(' ').length && lines.length > 0) {
		lines[lines.length - 1] = `${lines[lines.length - 1]!.replace(/[.…]+$/, '')}…`;
	}
	return lines;
}

function textLines(lines: string[], x: number, startY: number, lineHeight: number, size: number, attrs: string): string {
	return lines
		.map((line, index) => `<text x="${x}" y="${startY + index * lineHeight}" font-size="${size}" ${attrs}>${escapeXml(line)}</text>`)
		.join('\n  ');
}

export function buildSvg(title: string, description: string): string {
	const isHome = title.toLowerCase() === 'capa';
	const titleText = isHome ? 'capa' : title;
	const titleLines = wrapText(titleText, isHome ? 18 : 30, isHome ? 1 : 2);
	const titleSize = isHome ? 126 : 72;
	const titleStart = isHome ? 286 : 228;
	const titleLineHeight = isHome ? 128 : 82;
	const descriptionLines = wrapText(
		description || 'Ready-to-bind Cloudflare Workers for third-party APIs.',
		isHome ? 65 : 58,
		2,
	);
	const descriptionY = titleStart + titleLines.length * titleLineHeight + (isHome ? 18 : 30);
	const dots: string[] = [];
	for (let x = 46; x < W - 46; x += 34) {
		for (let y = 42; y < H - 42; y += 34) {
			dots.push(`<circle cx="${x}" cy="${y}" r="1" fill="#17354a" fill-opacity="0.7"/>`);
		}
	}
	const titleSvg = textLines(
		titleLines,
		68,
		titleStart,
		titleLineHeight,
		titleSize,
		`font-family="'Google Sans Flex', sans-serif" font-weight="700" fill="url(#headline)" letter-spacing="-4"`,
	);
	const descriptionSvg = textLines(
		descriptionLines,
		72,
		descriptionY,
		38,
		27,
		`font-family="'Google Sans Flex', sans-serif" font-weight="400" fill="#e8def8"`,
	);

	return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face { font-family: 'Google Sans Flex'; font-weight: 400; src: url('data:font/truetype;base64,${sansRegularB64}') format('truetype'); }
      @font-face { font-family: 'Google Sans Flex'; font-weight: 700; src: url('data:font/truetype;base64,${sansBoldB64}') format('truetype'); }
      @font-face { font-family: 'Google Sans Code'; font-weight: 400; src: url('data:font/truetype;base64,${codeRegularB64}') format('truetype'); }
      @font-face { font-family: 'Google Sans Code'; font-weight: 500; src: url('data:font/truetype;base64,${codeMediumB64}') format('truetype'); }
    </style>
    <radialGradient id="pinkOrb" cx="13%" cy="11%" r="54%"><stop offset="0%" stop-color="#61101c" stop-opacity="0.68"/><stop offset="100%" stop-color="#61101c" stop-opacity="0"/></radialGradient>
    <radialGradient id="mintOrb" cx="92%" cy="12%" r="52%"><stop offset="0%" stop-color="#72a9bd" stop-opacity="0.48"/><stop offset="100%" stop-color="#72a9bd" stop-opacity="0"/></radialGradient>
    <radialGradient id="violetOrb" cx="74%" cy="91%" r="52%"><stop offset="0%" stop-color="#d55d18" stop-opacity="0.52"/><stop offset="100%" stop-color="#d55d18" stop-opacity="0"/></radialGradient>
    <linearGradient id="headline" x1="0%" y1="0%" x2="90%" y2="100%"><stop offset="0%" stop-color="#fff5df"/><stop offset="42%" stop-color="#fff1db"/><stop offset="72%" stop-color="#72a9bd"/><stop offset="100%" stop-color="#d55d18"/></linearGradient>
    <linearGradient id="card" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0b3048" stop-opacity="0.96"/><stop offset="100%" stop-color="#041827" stop-opacity="0.94"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#041827"/>
  <rect width="${W}" height="${H}" fill="url(#pinkOrb)"/>
  <rect width="${W}" height="${H}" fill="url(#mintOrb)"/>
  <rect width="${W}" height="${H}" fill="url(#violetOrb)"/>
  ${dots.join('\n  ')}
  <g transform="translate(46 34)">
    <rect width="1108" height="562" rx="42" fill="url(#card)" stroke="#fff1db" stroke-opacity="0.35" stroke-width="2"/>
    <circle cx="998" cy="95" r="144" fill="#72a9bd" fill-opacity="0.16"/>
    <circle cx="1018" cy="442" r="192" fill="#d55d18" fill-opacity="0.18"/>
  </g>
  <rect x="70" y="70" width="238" height="42" rx="21" fill="#082337" stroke="#72a9bd" stroke-opacity="0.65"/>
  <text x="95" y="98" font-family="'Google Sans Code', monospace" font-size="18" font-weight="500" fill="#72a9bd" letter-spacing="2">CAPA.COey.DEV</text>
  <text x="1064" y="98" text-anchor="end" font-family="'Google Sans Code', monospace" font-size="18" font-weight="500" fill="#fff1db">{ result, evidence }</text>
  ${titleSvg}
  ${descriptionSvg}
  <line x1="72" y1="530" x2="1128" y2="530" stroke="#31546a" stroke-width="2"/>
  <text x="72" y="570" font-family="'Google Sans Code', monospace" font-size="20" font-weight="500" fill="#fff5df">OpenAPI → Workers → JSRPC</text>
  <text x="1128" y="570" text-anchor="end" font-family="'Google Sans Code', monospace" font-size="18" font-weight="400" fill="#c9bfab">API wrappers for Workers</text>
</svg>`;
}

export async function renderOgImage(title: string, description: string): Promise<Response> {
	const svg = buildSvg(title, description);
	const png = await sharp(Buffer.from(svg)).resize(W, H).png().toBuffer();
	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
}
