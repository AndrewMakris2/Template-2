import { esc, external, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Centered logo with the nav links split either side of it. */
export function Nav({ business, nav, social, booking }) {
  const instagram = social.find((s) => s.platform === 'instagram');
  const mid = Math.ceil(nav.links.length / 2);
  const link = (l) =>
    `<li><a href="${esc(l.href)}" class="nav-link relative py-2 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-ink/75 transition-colors hover:text-ink">${esc(l.label)}</a></li>`;
  const left = nav.links.slice(0, mid).map(link).join('');
  const right = nav.links.slice(mid).map(link).join('');
  const mobileLinks = nav.links
    .map(
      (l) =>
        `<li><a href="${esc(l.href)}" class="block py-3 font-heading text-4xl italic text-ink transition-colors hover:text-accent" data-menu-link>${esc(l.label)}</a></li>`,
    )
    .join('');
  const igLink = instagram
    ? `<a href="${esc(instagram.url)}" ${external} class="inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-accent" aria-label="${esc(instagram.label)}">${icon('instagram')}</a>`
    : '';

  return `
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink">${esc(nav.skipLinkLabel)}</a>
<header class="site-header sticky top-0 z-50 border-b border-line/0 transition-[border-color] duration-300" data-header>
  <div class="absolute inset-0 -z-10 bg-paper/90 backdrop-blur-md" aria-hidden="true"></div>
  <nav class="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 md:h-24 md:px-10" aria-label="Primary">
    <div class="flex items-center">
      <ul class="hidden items-center gap-8 lg:flex">${left}</ul>
      <span class="lg:hidden">${igLink}</span>
    </div>
    <a href="#top" class="text-center font-heading text-2xl italic text-ink md:text-3xl">${esc(business.name)}</a>
    <div class="flex items-center justify-end gap-6">
      <ul class="hidden items-center gap-8 lg:flex">${right}</ul>
      <span class="hidden lg:inline-flex">${igLink}</span>
      <button type="button" class="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="${esc(nav.menuOpenLabel)}" data-menu-toggle data-label-open="${esc(nav.menuOpenLabel)}" data-label-close="${esc(nav.menuCloseLabel)}">
        <span data-icon-open>${icon('menu', 'h-6 w-6')}</span>
        <span data-icon-close hidden>${icon('close', 'h-6 w-6')}</span>
      </button>
    </div>
  </nav>

  <div id="mobile-menu" class="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-cream px-5 pb-12 pt-10 text-center md:top-24 lg:hidden" hidden data-menu>
    <ul>${mobileLinks}</ul>
    <a href="${esc(booking.url)}" ${external} class="mt-10 ${buttonClasses.solid}">${esc(booking.label)}</a>
  </div>
</header>`;
}
