import { esc, sectionLabel, ornament } from './utils.js';

/** Centered story: circular portrait, italic headline, specialties as a starred line. */
export function About({ about }) {
  const bio = about.bio.map((p) => `<p>${esc(p)}</p>`).join('');
  const tags = about.specialties.map((t) => `<li>${esc(t)}</li>`).join('');

  return `
<section id="about" class="scroll-mt-16 bg-paper py-24 md:scroll-mt-24 md:py-32" aria-labelledby="about-heading">
  <div class="mx-auto max-w-3xl px-5 text-center">
    <div class="mx-auto h-40 w-40 overflow-hidden rounded-full ring-1 ring-accent/40 ring-offset-8 ring-offset-paper md:h-52 md:w-52">
      <img src="${esc(about.image.src)}" alt="${esc(about.image.alt)}" class="h-full w-full object-cover" loading="lazy" decoding="async" width="900" height="1125" />
    </div>
    <div class="mt-14">${sectionLabel(about.label)}</div>
    <h2 id="about-heading" class="mt-6 font-heading text-4xl italic leading-tight text-ink md:text-5xl">${esc(about.heading)}</h2>
    ${ornament}
    <div class="space-y-6 text-lg leading-relaxed text-muted">${bio}</div>
    <h3 class="sr-only">${esc(about.specialtiesLabel)}</h3>
    <ul class="star-list mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-heading text-xl italic text-ink md:text-2xl">${tags}</ul>
  </div>
</section>`;
}
