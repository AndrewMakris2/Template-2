import { esc, sectionLabel, ornament } from './utils.js';

/** Optional FAQ (native <details>, no JavaScript). Shown only when `faq.enabled` is true. */
export function Faq({ faq }) {
  if (!faq?.enabled) return '';
  const items = faq.items
    .map(
      (item) => `
      <details class="group border-b border-ink/15">
        <summary class="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 font-heading text-xl text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-2xl [&::-webkit-details-marker]:hidden">
          ${esc(item.q)}
          <span class="shrink-0 font-body text-xl text-accent transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="pb-7 text-base leading-relaxed text-muted">${esc(item.a)}</p>
      </details>`,
    )
    .join('');

  return `
<section id="faq" class="scroll-mt-16 border-t border-ink/10 bg-cream py-24 md:scroll-mt-24 md:py-32" aria-labelledby="faq-heading">
  <div class="mx-auto max-w-3xl px-5">
    <div class="text-center">
      ${sectionLabel(faq.label)}
      <h2 id="faq-heading" class="mt-6 font-heading text-4xl italic text-ink md:text-5xl">${esc(faq.heading)}</h2>
      ${ornament}
    </div>
    <div class="border-t border-ink/15">${items}</div>
  </div>
</section>`;
}
