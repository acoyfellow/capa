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
		description || 'Generated third-party APIs as proof-carrying Cloudflare service bindings.',
		isHome ? 65 : 58,
		2,
	);
	const descriptionY = titleStart + titleLines.length * titleLineHeight + (isHome ? 18 : 30);
	const dots: string[] = [];
	for (let x = 46; x < W - 46; x += 34) {
		for (let y = 42; y < H - 42; y += 34) {
			dots.push(`<circle cx="${x}" cy="${y}" r="1" fill="#382858" fill-opacity="0.58"/>`);
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
    <radialGradient id="pinkOrb" cx="13%" cy="11%" r="54%"><stop offset="0%" stop-color="#ff78c8" stop-opacity="0.55"/><stop offset="100%" stop-color="#ff78c8" stop-opacity="0"/></radialGradient>
    <radialGradient id="mintOrb" cx="92%" cy="12%" r="52%"><stop offset="0%" stop-color="#75ffd6" stop-opacity="0.38"/><stop offset="100%" stop-color="#75ffd6" stop-opacity="0"/></radialGradient>
    <radialGradient id="violetOrb" cx="74%" cy="91%" r="52%"><stop offset="0%" stop-color="#9f7cff" stop-opacity="0.43"/><stop offset="100%" stop-color="#9f7cff" stop-opacity="0"/></radialGradient>
    <linearGradient id="headline" x1="0%" y1="0%" x2="90%" y2="100%"><stop offset="0%" stop-color="#fffaf2"/><stop offset="42%" stop-color="#ffe68a"/><stop offset="72%" stop-color="#75ffd6"/><stop offset="100%" stop-color="#ff78c8"/></linearGradient>
    <linearGradient id="card" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#291a42" stop-opacity="0.95"/><stop offset="100%" stop-color="#161022" stop-opacity="0.92"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#100b1b"/>
  <rect width="${W}" height="${H}" fill="url(#pinkOrb)"/>
  <rect width="${W}" height="${H}" fill="url(#mintOrb)"/>
  <rect width="${W}" height="${H}" fill="url(#violetOrb)"/>
  ${dots.join('\n  ')}
  <g transform="translate(46 34)">
    <rect width="1108" height="562" rx="42" fill="url(#card)" stroke="#ffe68a" stroke-opacity="0.35" stroke-width="2"/>
    <circle cx="998" cy="95" r="144" fill="#75ffd6" fill-opacity="0.12"/>
    <circle cx="1018" cy="442" r="192" fill="#ff78c8" fill-opacity="0.12"/>
  </g>
  <rect x="70" y="70" width="238" height="42" rx="21" fill="#211431" stroke="#75ffd6" stroke-opacity="0.55"/>
  <text x="95" y="98" font-family="'Google Sans Code', monospace" font-size="18" font-weight="500" fill="#75ffd6" letter-spacing="2">CAPA.COey.DEV</text>
  <text x="1064" y="98" text-anchor="end" font-family="'Google Sans Code', monospace" font-size="18" font-weight="500" fill="#ffe68a">{ result, evidence }</text>
  ${titleSvg}
  ${descriptionSvg}
  <line x1="72" y1="530" x2="1128" y2="530" stroke="#493465" stroke-width="2"/>
  <text x="72" y="570" font-family="'Google Sans Code', monospace" font-size="20" font-weight="500" fill="#fffaf2">OpenAPI → Workers → JSRPC</text>
  <text x="1128" y="570" text-anchor="end" font-family="'Google Sans Code', monospace" font-size="18" font-weight="400" fill="#d8cde9">proof-carrying bindings</text>
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
