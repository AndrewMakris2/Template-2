import { esc, sectionLabel, ornament } from './utils.js';

/** Optional booking policies. Shown only when `policies.enabled` is true. */
export function Policies({ policies }) {
  if (!policies?.enabled) return '';
  const items = policies.items
    .map(
      (p) => `
      <div>
        <dt class="font-heading text-2xl italic text-ink">${esc(p.title)}</dt>
        <dd class="mt-2 text-sm leading-relaxed text-muted">${esc(p.text)}</dd>
      </div>`,
    )
    .join('');

  return `
<section id="policies" class="scroll-mt-16 border-t border-ink/10 bg-paper py-24 md:scroll-mt-24 md:py-32" aria-labelledby="policies-heading">
  <div class="mx-auto max-w-4xl px-5">
    <div class="text-center">
      ${sectionLabel(policies.label)}
      <h2 id="policies-heading" class="mt-6 font-heading text-4xl italic text-ink md:text-5xl">${esc(policies.heading)}</h2>
      ${ornament}
    </div>
    <dl class="grid gap-x-16 gap-y-10 text-center md:grid-cols-2">${items}</dl>
  </div>
</section>`;
}
