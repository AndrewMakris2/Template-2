import { esc, external, sectionLabel, ornament, buttonClasses } from './utils.js';

/** Services presented like a framed wedding menu with dotted leaders. */
export function Services({ services, booking }) {
  const items = services.items
    .map(
      (s) => `
      <li>
        <div class="flex items-baseline gap-3">
          <h3 class="font-heading text-xl text-ink md:text-2xl">${esc(s.name)}</h3>
          <span class="min-w-6 flex-1 -translate-y-1 border-b border-dotted border-ink/30" aria-hidden="true"></span>
          <p class="font-heading text-xl lining-nums text-ink md:text-2xl"><span class="sr-only">${esc(services.columnLabels.price)}: </span>${esc(s.price)}</p>
        </div>
        <p class="mt-1 text-sm leading-relaxed text-muted">${s.description ? `${esc(s.description)} ` : ''}<span class="whitespace-nowrap text-xs uppercase tracking-[0.15em] text-accent"><span class="sr-only">${esc(services.columnLabels.duration)}: </span>${esc(s.duration)}</span></p>
      </li>`,
    )
    .join('');

  return `
<section id="services" class="scroll-mt-16 bg-paper py-24 md:scroll-mt-24 md:py-32" aria-labelledby="services-heading">
  <div class="mx-auto max-w-5xl px-5">
    <div class="border border-ink/15 bg-cream/40 p-2 md:p-3">
      <div class="border border-ink/10 px-6 py-14 sm:px-10 md:px-16 md:py-20">
        <div class="text-center">
          ${sectionLabel(services.label)}
          <h2 id="services-heading" class="mt-6 font-heading text-4xl italic text-ink md:text-5xl">${esc(services.heading)}</h2>
          ${ornament}
          <p class="mx-auto max-w-xl text-base leading-relaxed text-muted">${esc(services.intro)}</p>
        </div>
        <ul class="mt-14 grid gap-x-16 gap-y-9 md:grid-cols-2">${items}</ul>
        <div class="mt-14 text-center">
          ${services.note ? `<p class="mx-auto max-w-xl font-heading text-lg italic leading-relaxed text-muted">${esc(services.note)}</p>` : ''}
          <a href="${esc(booking.url)}" ${external} class="mt-8 ${buttonClasses.accent}">${esc(services.ctaLabel)}</a>
        </div>
      </div>
    </div>
  </div>
</section>`;
}
