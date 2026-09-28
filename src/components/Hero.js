import { esc, external, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Split hero: copy on one side, an arched portrait on the other. */
export function Hero({ hero, booking }) {
  return `
<section id="top" class="relative overflow-hidden bg-cream" aria-labelledby="hero-heading">
  <div class="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 md:px-10 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-2 lg:gap-20 lg:py-20">
    <div class="order-2 text-center lg:order-1 lg:text-left">
      <p class="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-accent">${esc(hero.eyebrow)}</p>
      <h1 id="hero-heading" class="mt-6 font-heading text-6xl leading-[1.02] text-ink sm:text-7xl xl:text-8xl">${esc(hero.heading)}</h1>
      <div class="my-8 flex items-center justify-center gap-3 text-accent lg:justify-start" aria-hidden="true"><span class="h-px w-12 bg-accent/40"></span><span class="text-xs">&#10022;</span><span class="h-px w-12 bg-accent/40"></span></div>
      <p class="mx-auto max-w-md font-heading text-2xl italic leading-snug text-muted lg:mx-0 md:text-3xl">${esc(hero.tagline)}</p>
      <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
        <a href="${esc(booking.url)}" ${external} class="${buttonClasses.solid}">${esc(hero.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
        <a href="${esc(hero.secondaryCtaHref)}" class="${buttonClasses.outline}">${esc(hero.secondaryCtaLabel)}</a>
      </div>
    </div>
    <div class="relative order-1 mx-auto w-full max-w-[15rem] sm:max-w-sm md:max-w-md lg:order-2 lg:max-w-lg">
      <div class="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-accent/40" aria-hidden="true"></div>
      <div class="relative aspect-[4/5] overflow-hidden rounded-t-full bg-paper">
        <img src="${esc(hero.image.src)}" alt="${esc(hero.image.alt)}" class="h-full w-full object-cover" fetchpriority="high" decoding="async" />
      </div>
    </div>
  </div>
</section>`;
}
