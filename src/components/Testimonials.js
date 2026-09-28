import { esc, sectionLabel } from './utils.js';

/**
 * One large quote at a time. The client names below act as the switcher, so the
 * controls are labelled by content. Without JS every quote is shown in turn.
 */
export function Testimonials({ testimonials }) {
  const slides = testimonials.items
    .map(
      (t, i) => `
      <figure class="carousel-slide" id="testimonial-${i}" data-slide>
        <blockquote class="font-heading text-3xl italic leading-snug text-ink md:text-[2.6rem] md:leading-[1.25]">
          <p>&ldquo;${esc(t.quote)}&rdquo;</p>
        </blockquote>
        ${t.detail ? `<figcaption class="mt-8 text-xs uppercase tracking-[0.25em] text-muted">${esc(t.detail)}</figcaption>` : ''}
      </figure>`,
    )
    .join('');
  const tabs = testimonials.items
    .map(
      (t, i) =>
        `<li><button type="button" class="carousel-tab rounded-full border border-ink/20 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-on-ink" aria-controls="testimonial-${i}" aria-pressed="${i === 0}" data-slide-tab="${i}">${esc(t.name)}</button></li>`,
    )
    .join('');

  return `
<section id="testimonials" class="scroll-mt-16 bg-cream py-24 md:scroll-mt-24 md:py-32" aria-labelledby="testimonials-heading">
  <div class="mx-auto max-w-4xl px-5 text-center">
    ${sectionLabel(testimonials.label)}
    <h2 id="testimonials-heading" class="mt-6 font-heading text-2xl italic text-muted md:text-3xl">${esc(testimonials.heading)}</h2>
    <div class="mt-14" data-carousel>
      <div class="space-y-16" aria-live="polite">${slides}</div>
      <ul class="carousel-tabs mt-12 flex-wrap justify-center gap-3">${tabs}</ul>
    </div>
  </div>
</section>`;
}
