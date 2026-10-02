# capa brand guideline

Use this guideline for every page on capa.coey.dev. It combines rules from the Kumo design skill and the Vercel report guideline, and adapts them to a documentation site.

## Voice

- Write plain, direct sentences. State what the reader can do.
- Use sentence case for every heading, button, and label. Title-case product names only: Cloudflare, Stripe, GitHub, Workers.
- Do not use em dashes. Use a period, a comma, or a colon.
- Do not use hype words: "tiny", "huge", "magic", "blazing", "seamless".
- Describe only what ships today. Put planned work on the roadmap, not in instructions.
- Call the returned JSON record "evidence" in code and "the evidence record" in prose. Use one term everywhere.

## Color

- Keep the current capa palette. Orange is the accent. Navy is the dark theme.
- Use the accent for one primary action per view, links, and focus rings.
- Use neutral text colors for everything else.
- Use color only when it adds meaning. Pair it with a text cue.
- Do not use gradients, blurred blobs, glows, glass effects, or textures.

## Typography

| Role | Size | Weight | Line height |
|---|---|---|---|
| Page title (`h1`) | 2.25rem, 2.75rem on the home page | 600 | 1.1 |
| Section heading (`h2`) | 1.5rem | 600 | 1.25 |
| Subsection heading (`h3`) | 1.125rem | 600 | 1.35 |
| Lede | 1.125rem | 400 | 1.55 |
| Body | 1rem | 400 | 1.65 |
| Compact (tables, buttons, labels) | 0.875rem | 400 or 500 | 1.45 |
| Caption and metadata | 0.8125rem | 400 | 1.45 |
| Inline code | 0.9em of its parent | 400 | inherit |

- Use Inter for prose, headings, labels, tables, and numbers.
- Use the mono font only for code, commands, paths, secret names, and identifiers.
- Use 600 for headings and 500 for emphasis. Do not use 700 or bold.
- Do not change letter spacing. Do not uppercase text.
- Use tabular numbers in tables and counts.
- Keep prose near 65 characters per line.

## Spacing

The space scale is 4, 8, 12, 16, 24, 32, 48, 64, and 96 px.

- Heading to its first paragraph: 12 px.
- Paragraph to paragraph: 16 px.
- Content group to a new group: 32 px.
- Section to section (`h2`): 48 px above the heading.
- Page title to the first section: 32 px.
- One element owns each gap. Do not stack margins from parent and child.
- Keep related text closer than the content around it.
- Vertical padding around text is a little smaller than horizontal padding.

## Layout

- Use one column for prose. Tables and code can use the full content width.
- Keep the page one continuous surface. Use space and type for hierarchy, not boxes.
- Use a border only for code blocks, tables, and interactive controls.
- Use a 1px border or a shadow, never both.
- Use one corner radius family: 6 px for controls, 8 px for code and tables. Nested radii are concentric: outer radius equals inner radius plus padding.
- Do not nest cards. Do not wrap every section in a card.

## Components

- **Buttons.** 36 px high, 14 px text, weight 500, 6 px radius. One primary button per view. Others are secondary (1px border) or text links.
- **Links.** Accent color with an underline offset. Color change on hover is immediate, with no transition.
- **Code blocks.** 1px border, 8 px radius, no shadow, 14 px mono text.
- **Tables.** Semantic `<table>`. Header row in compact text, weight 500, sentence case. Left-align text, right-align numbers, and match each header to its column. Body cells align to the first text baseline.
- **Diagrams.** Plain text flow with arrows, inside a code block, or a simple table. No decorated node boxes.
- **Icons.** Only where an established icon makes an action faster to recognize. No icon tiles.

## Motion

- Default to no motion.
- Hover and focus changes are immediate.
- Respect `prefers-reduced-motion`.

## Page review checklist

1. The first screen says what capa does and shows one real call.
2. Every heading is sentence case and states the point of its section.
3. Each section answers a new question. No section repeats another.
4. There is one primary button per view.
5. No gradients, blobs, shadows on content, uppercase labels, or bold weights.
6. Tables right-align numbers, and headers match their columns.
7. Every command on the page works today.
8. Light and dark themes both read well.
