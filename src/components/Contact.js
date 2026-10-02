import { esc, external, sectionLabel, ornament, buttonClasses, telHref } from './utils.js';

const inputClasses =
  'mt-2 block w-full rounded-2xl border border-ink/15 bg-paper px-5 py-3.5 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20';
const labelClasses = 'text-[0.7rem] font-medium uppercase tracking-[0.25em] text-muted';

/** Centered invitation, a soft form card, then the details in three columns. */
export function Contact({ contact, booking }) {
  const { form } = contact;
  const f = form.fields;

  return `
<section id="contact" class="scroll-mt-16 bg-paper py-24 md:scroll-mt-24 md:py-32" aria-labelledby="contact-heading">
  <div class="mx-auto max-w-3xl px-5 text-center">
    ${sectionLabel(contact.label)}
    <h2 id="contact-heading" class="mt-6 font-heading text-4xl italic leading-tight text-ink md:text-6xl">${esc(contact.heading)}</h2>
    ${ornament}
    <p class="mx-auto max-w-xl text-base leading-relaxed text-muted md:text-lg">${esc(contact.intro)}</p>
  </div>

  <div class="mx-auto mt-14 max-w-2xl px-5">
    <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="space-y-6 rounded-[2rem] bg-cream p-6 sm:p-10 md:p-12" data-contact-form>
      <input type="hidden" name="form-name" value="${esc(form.name)}" />
      <p class="hidden" aria-hidden="true">
        <label>${esc(form.honeypotLabel)} <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>
      <div class="grid gap-6 sm:grid-cols-2">
        <div>
          <label for="contact-name" class="${labelClasses}">${esc(f.name.label)}</label>
          <input id="contact-name" name="name" type="text" autocomplete="name" required class="${inputClasses}" placeholder="${esc(f.name.placeholder)}" />
        </div>
        <div>
          <label for="contact-email" class="${labelClasses}">${esc(f.email.label)}</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required class="${inputClasses}" placeholder="${esc(f.email.placeholder)}" />
        </div>
      </div>
      <div>
        <label for="contact-phone" class="${labelClasses}">${esc(f.phone.label)}</label>
        <input id="contact-phone" name="phone" type="tel" autocomplete="tel" class="${inputClasses}" placeholder="${esc(f.phone.placeholder)}" />
      </div>
      <div>
        <label for="contact-message" class="${labelClasses}">${esc(f.message.label)}</label>
        <textarea id="contact-message" name="message" rows="5" required class="${inputClasses} resize-y" placeholder="${esc(f.message.placeholder)}"></textarea>
      </div>
      <div class="pt-2 text-center">
        <button type="submit" class="${buttonClasses.solid} disabled:opacity-60" data-submit data-label="${esc(form.submitLabel)}" data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)}</button>
      </div>
      <p class="hidden text-center text-base text-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
      <p class="hidden text-center text-base text-accent" role="alert" data-form-error>${esc(form.errorMessage)}</p>
      <p class="text-center text-sm text-muted">${esc(form.privacyNote)} <a href="/privacy/" class="underline underline-offset-4">${esc(form.privacyLabel)}</a></p>
    </form>
  </div>

  <dl class="mx-auto mt-20 grid max-w-4xl gap-10 px-5 text-center sm:grid-cols-3">
    <div>
      <dt class="${labelClasses}">${esc(contact.detailsLabels.email)}</dt>
      <dd class="mt-2"><a href="mailto:${esc(contact.email)}" class="font-heading text-xl italic text-ink transition-colors hover:text-accent">${esc(contact.email)}</a></dd>
    </div>
    <div>
      <dt class="${labelClasses}">${esc(contact.detailsLabels.phone)}</dt>
      <dd class="mt-2"><a href="${esc(telHref(contact.phone))}" class="font-heading text-xl italic lining-nums text-ink transition-colors hover:text-accent">${esc(contact.phone)}</a></dd>
    </div>
    <div>
      <dt class="${labelClasses}">${esc(contact.detailsLabels.studio)}</dt>
      <dd class="mt-2 text-sm leading-relaxed text-ink"><address class="not-italic">${esc(contact.address)}</address></dd>
    </div>
  </dl>

  <div class="mx-auto mt-20 max-w-xl px-5 text-center">
    <p class="font-heading text-2xl italic text-ink">${esc(contact.bookingHeading)}</p>
    <a href="${esc(booking.url)}" ${external} class="mt-6 ${buttonClasses.accent}">${esc(contact.bookingLabel)}</a>
  </div>
</section>`;
}
