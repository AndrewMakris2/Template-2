/**
 * Shared helpers for components. Structural only — no content, no colors.
 */

/** Escape a value for safe use in HTML text or attribute values. */
export function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Attributes for links that leave the site. */
export const external = 'target="_blank" rel="noopener noreferrer"';

/** Small centered section label flanked by hairlines, e.g. "— About —". */
export function sectionLabel(text, align = 'center') {
  const rule = '<span class="h-px w-8 bg-accent/50" aria-hidden="true"></span>';
  const justify = align === 'left' ? 'justify-start' : 'justify-center';
  return `<p class="flex items-center ${justify} gap-4 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-accent">${rule}${esc(text)}${align === 'left' ? '' : rule}</p>`;
}

/** Decorative divider used under headings. */
export const ornament =
  '<div class="my-8 flex items-center justify-center gap-3 text-accent" aria-hidden="true"><span class="h-px w-12 bg-accent/40"></span><span class="text-xs">&#10022;</span><span class="h-px w-12 bg-accent/40"></span></div>';

/** Turn a display phone number into a tel: href. */
export function telHref(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, '')}`;
}

/** Shared button styles — soft pills for this template. */
export const buttonClasses = {
  solid:
    'inline-flex items-center justify-center gap-3 rounded-full bg-ink px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-on-ink transition-colors duration-300 hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  accent:
    'inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-on-accent transition-colors duration-300 hover:bg-ink hover:text-on-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  outline:
    'inline-flex items-center justify-center gap-3 rounded-full border border-ink/40 px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-on-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
};
