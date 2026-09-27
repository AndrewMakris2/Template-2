/**
 * ============================================================================
 *  CONTENT — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every piece of text, every link, and every image path on the site comes
 *  from this file. Components never hardcode copy — they read it from here.
 *
 *  Everything below is PLACEHOLDER content. Each placeholder is marked with
 *  `// TODO: replace with real client content`. Search for "TODO" before
 *  launching a client site and make sure none are left.
 *
 *  Images:
 *    Placeholders point at picsum.photos. For a real client, drop their photos
 *    into /public/images and reference them here with root-relative paths,
 *    e.g.  src: '/images/hero.jpg'   (files in /public are served from "/").
 *    Every image needs meaningful `alt` text describing the photo.
 * ============================================================================
 */

export const content = {
  // --------------------------------------------------------------------------
  // SEO & SITE META — used for <title>, meta description and Open Graph tags
  // --------------------------------------------------------------------------
  site: {
    lang: 'en',
    // Full production URL, no trailing slash. Used for canonical + og:url.
    url: 'https://example-stylist.netlify.app', // TODO: replace with real client content
    title: 'Rosalind Vega — Blonding, Bridal & Hair Atelier, Austin', // TODO: replace with real client content
    description:
      'Austin hairstylist creating soft blondes, romantic bridal styles and seamless extensions in a private, light-filled atelier. Book online.', // TODO: replace with real client content
    // Absolute URL recommended for social previews (1200×630 works best).
    ogImage: 'https://picsum.photos/seed/t2-og/1200/630', // TODO: replace with real client content
    ogImageAlt: 'Placeholder: bride with a soft, romantic low chignon', // TODO: replace with real client content
  },

  // --------------------------------------------------------------------------
  // BUSINESS BASICS
  // --------------------------------------------------------------------------
  business: {
    name: 'Rosalind Vega', // TODO: replace with real client content — shown as the text logo
    tagline: 'Soft blondes, romantic styling, hair that feels like you.', // TODO: replace with real client content
    location: 'Austin, Texas', // TODO: replace with real client content
  },

  // External booking platform (StyleSeat, Vagaro, Booksy, Schedulicity, …).
  // The site never takes bookings itself — every "Book" button links here.
  booking: {
    url: 'https://styleseat.com/PLACEHOLDER', // TODO: replace with real client content
    label: 'Book now',
  },

  // --------------------------------------------------------------------------
  // NAVIGATION — `href` must match a section id below
  // --------------------------------------------------------------------------
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Portfolio', href: '#gallery' },
      { label: 'Services', href: '#services' },
      { label: 'Love notes', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    skipLinkLabel: 'Skip to content',
  },

  // --------------------------------------------------------------------------
  // HERO
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: 'Hair atelier — Austin, Texas', // TODO: replace with real client content
    heading: 'Rosalind Vega', // TODO: replace with real client content
    tagline: 'Soft blondes, romantic styling, hair that feels like you.', // TODO: replace with real client content
    ctaLabel: 'Book now',
    secondaryCtaLabel: 'See the portfolio',
    secondaryCtaHref: '#gallery',
    image: {
      src: 'https://picsum.photos/seed/t2-hero/2000/1400', // TODO: replace with real client content
      alt: 'Placeholder: model with soft, glowing blonde waves photographed in warm window light', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // ABOUT
  // --------------------------------------------------------------------------
  about: {
    label: 'About',
    heading: 'Every appointment should feel like a small celebration.', // TODO: replace with real client content
    // One string per paragraph.
    bio: [
      'Hi, I’m Rosalind. I’ve spent nine years perfecting luminous blondes and wedding-day hair, and I now welcome clients into my private atelier in East Austin. It’s just you, me and a proper cup of tea.', // TODO: replace with real client content
      'I believe beautiful hair should feel effortless. We’ll talk through your routine, your inspiration and your budget, then create something soft, romantic and completely you.', // TODO: replace with real client content
    ],
    specialtiesLabel: 'Specialties',
    specialties: ['Blonding', 'Bridal styling', 'Extensions'], // TODO: replace with real client content
    image: {
      src: 'https://picsum.photos/seed/t2-about/900/1125', // TODO: replace with real client content
      alt: 'Placeholder: portrait of the stylist smiling beside a vase of garden roses in her atelier', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // GALLERY — any number of images; 9+ recommended. `full` is the larger
  // version shown in the lightbox (falls back to `src` if omitted).
  // --------------------------------------------------------------------------
  gallery: {
    label: 'Portfolio',
    heading: 'Blondes, brides & everything between',
    lightboxCloseLabel: 'Close image',
    lightboxPrevLabel: 'Previous image',
    lightboxNextLabel: 'Next image',
    openImageLabel: 'Enlarge image', // prefixed to each image's alt for screen readers
    // TODO: replace with real client content — all 9 images below
    images: [
      { src: 'https://picsum.photos/seed/t2-g1/800/1000', full: 'https://picsum.photos/seed/t2-g1/1600/2000', alt: 'Placeholder: creamy vanilla blonde with a soft root' },
      { src: 'https://picsum.photos/seed/t2-g2/800/1000', full: 'https://picsum.photos/seed/t2-g2/1600/2000', alt: 'Placeholder: romantic braided updo with loose tendrils' },
      { src: 'https://picsum.photos/seed/t2-g3/800/1000', full: 'https://picsum.photos/seed/t2-g3/1600/2000', alt: 'Placeholder: honey blonde waves with face-framing highlights' },
      { src: 'https://picsum.photos/seed/t2-g4/800/1000', full: 'https://picsum.photos/seed/t2-g4/1600/2000', alt: 'Placeholder: seamless tape-in extensions for length and volume' },
      { src: 'https://picsum.photos/seed/t2-g5/800/1000', full: 'https://picsum.photos/seed/t2-g5/1600/2000', alt: 'Placeholder: bridal half-up style with a pearl hair pin' },
      { src: 'https://picsum.photos/seed/t2-g6/800/1000', full: 'https://picsum.photos/seed/t2-g6/1600/2000', alt: 'Placeholder: strawberry blonde gloss on long layers' },
      { src: 'https://picsum.photos/seed/t2-g7/800/1000', full: 'https://picsum.photos/seed/t2-g7/1600/2000', alt: 'Placeholder: textured low bun for a garden wedding' },
      { src: 'https://picsum.photos/seed/t2-g8/800/1000', full: 'https://picsum.photos/seed/t2-g8/1600/2000', alt: 'Placeholder: bright baby-light blonde on a lob' },
      { src: 'https://picsum.photos/seed/t2-g9/800/1000', full: 'https://picsum.photos/seed/t2-g9/1600/2000', alt: 'Placeholder: glossy Hollywood waves for an evening event' },
    ],
  },

  // --------------------------------------------------------------------------
  // SERVICES
  // --------------------------------------------------------------------------
  services: {
    label: 'Services',
    heading: 'The menu',
    intro: 'Every service includes a consultation and a finishing style. Prices are starting points and vary with hair length and density.', // TODO: replace with real client content
    columnLabels: { service: 'Service', duration: 'Duration', price: 'Price' },
    // TODO: replace with real client content — all services below
    items: [
      { name: 'Cut & blow-dry', description: 'Consultation, wash, shape and a smooth or bouncy finish.', duration: '60 min', price: '$85+' },
      { name: 'Full blonding', description: 'Foils or baby-lights for bright, dimensional blonde. Includes toner.', duration: '3 hr', price: '$260+' },
      { name: 'Soft balayage', description: 'Hand-painted, sun-kissed brightness that grows out gently.', duration: '3 hr', price: '$240+' },
      { name: 'Toner & gloss', description: 'Refresh tone and shine between blonding appointments.', duration: '45 min', price: '$70+' },
      { name: 'Tape-in extensions', description: 'Seamless length and volume. Hair priced separately.', duration: '2 hr', price: '$350+' },
      { name: 'Bridal trial', description: 'Plan and perfect your wedding-day style.', duration: '90 min', price: '$150' },
      { name: 'Wedding-day styling', description: 'On-location styling for the bride. Travel fees may apply.', duration: 'By booking', price: '$225+' },
      { name: 'Event styling', description: 'Updos, waves and braids for any occasion.', duration: '60 min', price: '$95+' },
    ],
    note: 'Bridal parties of four or more: please enquire through the contact form for group pricing.', // TODO: replace with real client content
    ctaLabel: 'Book a service',
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS
  // --------------------------------------------------------------------------
  testimonials: {
    label: 'Love notes',
    heading: 'Kind words from clients',
    // TODO: replace with real client content — all testimonials below
    items: [
      { quote: 'Rosalind made me feel so calm on my wedding morning. My hair stayed perfect through hours of dancing.', name: 'Emily W.', detail: 'Bride' },
      { quote: 'Finally the soft, creamy blonde I’ve been chasing for years, and it grows out beautifully.', name: 'Priya K.', detail: 'Blonding client' },
      { quote: 'My extensions blend so well that nobody can tell. I feel like myself, just with more hair.', name: 'Danielle M.', detail: 'Extensions client' },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTACT
  // --------------------------------------------------------------------------
  contact: {
    label: 'Contact',
    heading: 'Let’s make something beautiful.',
    intro: 'Planning a wedding or have a question before booking? Send a note and I’ll get back to you within two business days.', // TODO: replace with real client content
    email: 'hello@example.com', // TODO: replace with real client content
    phone: '(512) 555-0188', // TODO: replace with real client content
    address: '5678 Placeholder Ave, Studio 2, Austin, TX 78702', // TODO: replace with real client content
    detailsLabels: { email: 'Email', phone: 'Phone', studio: 'Studio' },
    bookingHeading: 'Prefer to book directly?',
    bookingLabel: 'Book an appointment',
    form: {
      name: 'contact', // Netlify form name — shows up in the Netlify dashboard
      fields: {
        name: { label: 'Name', placeholder: '' },
        email: { label: 'Email', placeholder: '' },
        phone: { label: 'Phone (optional)', placeholder: '' },
        message: { label: 'Message', placeholder: 'Tell me about your hair, your event date, or what you’re dreaming of.' },
      },
      honeypotLabel: 'Don’t fill this out if you’re human:',
      submitLabel: 'Send message',
      sendingLabel: 'Sending…',
      successMessage: 'Thank you! Your message is on its way. I’ll be in touch soon.',
      errorMessage: 'Sorry, something went wrong. Please try again, or email me directly.',
    },
  },

  // --------------------------------------------------------------------------
  // SOCIAL LINKS — `platform` picks the icon. Supported: instagram, facebook,
  // tiktok, pinterest, youtube, x. The first `instagram` entry also appears
  // in the nav. Remove any the client doesn't use.
  // --------------------------------------------------------------------------
  social: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'facebook', label: 'Facebook', url: 'https://facebook.com/PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'pinterest', label: 'Pinterest', url: 'https://pinterest.com/PLACEHOLDER' }, // TODO: replace with real client content
  ],

  // --------------------------------------------------------------------------
  // FOOTER
  // --------------------------------------------------------------------------
  footer: {
    hoursHeading: 'Studio hours',
    // TODO: replace with real client content
    hours: [
      { days: 'Wed – Fri', time: '10am – 6pm' },
      { days: 'Saturday', time: '8am – 3pm (weddings by booking)' },
      { days: 'Sun – Tue', time: 'Closed' },
    ],
    contactHeading: 'Visit',
    socialHeading: 'Follow',
    // "© {year} {copyrightName}. {copyrightSuffix}" — year is filled in at build time
    copyrightName: 'Rosalind Vega Hair Atelier', // TODO: replace with real client content
    copyrightSuffix: 'All rights reserved.',
    backToTopLabel: 'Back to top',
  },
};
