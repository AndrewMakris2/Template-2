import { esc, external, telHref } from './utils.js';
import { icon } from './icons.js';

/** Centered footer: script-style name, round social icons, hours in one line. */
export function Footer({ business, contact, social, footer }) {
  const year = new Date().getFullYear();
  const hours = footer.hours
    .map((h) => `<div class="flex gap-2"><dt class="text-on-ink/60">${esc(h.days)}</dt><dd class="text-on-ink">${esc(h.time)}</dd></div>`)
    .join('');
  const socials = social
    .map(
      (s) =>
        `<li><a href="${esc(s.url)}" ${external} class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-on-ink/25 text-on-ink transition-colors hover:border-accent hover:bg-accent hover:text-on-accent" aria-label="${esc(s.label)}">${icon(s.platform)}</a></li>`,
    )
    .join('');

  return `
<footer class="bg-ink text-on-ink/75">
  <div class="mx-auto max-w-5xl px-5 py-20 text-center md:py-24">
    <a href="#top" class="font-heading text-4xl italic text-on-ink md:text-5xl">${esc(business.name)}</a>
    <p class="mx-auto mt-4 max-w-md text-sm">${esc(business.tagline)}</p>
    <h2 class="sr-only">${esc(footer.socialHeading)}</h2>
    <ul class="mt-10 flex justify-center gap-3">${socials}</ul>
    <div class="mx-auto my-12 h-px w-24 bg-on-ink/20" aria-hidden="true"></div>
    <h2 class="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-on-ink/60">${esc(footer.hoursHeading)}</h2>
    <dl class="mt-5 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm">${hours}</dl>
    <h2 class="sr-only">${esc(footer.contactHeading)}</h2>
    <address class="mt-10 space-y-1 text-sm not-italic">
      <p>${esc(contact.address)}</p>
      <p><a href="mailto:${esc(contact.email)}" class="text-on-ink hover:text-accent">${esc(contact.email)}</a> &middot; <a href="${esc(telHref(contact.phone))}" class="text-on-ink hover:text-accent">${esc(contact.phone)}</a></p>
    </address>
    <div class="mt-14 flex flex-col items-center gap-4 border-t border-on-ink/15 pt-8 text-xs sm:flex-row sm:justify-between">
      <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)} <a href="/privacy/" class="underline underline-offset-4">${esc(footer.privacyLabel)}</a></p>
      <a href="#top" class="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-on-ink hover:text-accent">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-4 w-4')}</a>
    </div>
  </div>
</footer>`;
}
