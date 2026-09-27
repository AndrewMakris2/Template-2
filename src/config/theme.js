/**
 * ============================================================================
 *  THEME — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every color and font family on the site comes from this file, and nothing
 *  else lives here. Components never hardcode colors or fonts; they use the
 *  Tailwind utilities generated from these tokens:
 *
 *    colors.paper   → bg-paper / text-paper      (main background)
 *    colors.cream   → bg-cream                   (alternate section background)
 *    colors.ink     → text-ink / bg-ink          (primary text, dark surfaces)
 *    colors.muted   → text-muted                 (secondary text)
 *    colors.line    → border-line                (hairlines / dividers)
 *    colors.accent  → text-accent / bg-accent    (the single accent color)
 *    colors.onAccent→ text-on-accent             (text placed on the accent)
 *    colors.onInk   → text-on-ink                (text placed on ink surfaces)
 *
 *    fonts.heading  → font-heading               (headings, logo, quotes)
 *    fonts.body     → font-body                  (body copy, UI, buttons)
 *
 *  To reskin: change the values below. Keep the keys the same.
 *  If you change font families, update `fonts.googleFontsUrl` to load them
 *  (build one at https://fonts.google.com — select families, copy the URL).
 * ============================================================================
 */

export const theme = {
  // Template 2 — Soft & Romantic: warm blush neutrals, deep plum-brown in place
  // of black, and a dusty rose accent. All text/background pairs meet WCAG AA.
  colors: {
    paper: '#FDF8F5', // warm white
    cream: '#F5E8E3', // blush
    ink: '#3B2A2F', // deep plum-brown
    muted: '#76636A',
    line: '#EAD9D3',
    accent: '#9A4C60', // dusty rose — TODO: pick the client's accent color
    onAccent: '#FFFFFF',
    onInk: '#FBEFEB',
  },

  fonts: {
    heading: "'Playfair Display', 'Times New Roman', Georgia, serif",
    body: "'DM Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap',
  },
};
