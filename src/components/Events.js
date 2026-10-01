import { esc, sectionLabel, ornament, buttonClasses } from './utils.js';

/** Optional bridal / events packages as framed cards. Shown only when `events.enabled` is true. */
export function Events({ events }) {
  if (!events?.enabled) return '';
  const cards = events.packages
    .map(
      (p) => `
      <li class="border border-ink/15 bg-paper p-2">
        <div class="flex h-full flex-col items-center border border-ink/10 px-6 py-10 text-center">
          <h3 class="font-heading text-2xl italic text-ink">${esc(p.name)}</h3>
          <p class="mt-3 font-heading text-xl lining-nums text-accent">${esc(p.price)}</p>
          ${p.description ? `<p class="mt-4 text-sm leading-relaxed text-muted">${esc(p.description)}</p>` : ''}
        </div>
      </li>`,
    )
    .join('');

  return `
<section id="events" class="scroll-mt-16 border-t border-ink/10 bg-cream py-24 md:scroll-mt-24 md:py-32" aria-labelledby="events-heading">
  <div class="mx-auto max-w-5xl px-5 text-center">
    ${sectionLabel(events.label)}
    <h2 id="events-heading" class="mt-6 font-heading text-4xl italic text-ink md:text-5xl">${esc(events.heading)}</h2>
    ${ornament}
    <p class="mx-auto max-w-xl text-base leading-relaxed text-muted">${esc(events.intro)}</p>
    <ul class="mt-14 grid gap-5 md:grid-cols-3">${cards}</ul>
    ${events.note ? `<p class="mx-auto mt-12 max-w-xl font-heading text-lg italic leading-relaxed text-muted">${esc(events.note)}</p>` : ''}
    <a href="#contact" class="mt-8 ${buttonClasses.outline}">${esc(events.ctaLabel)}</a>
  </div>
</section>`;
}
