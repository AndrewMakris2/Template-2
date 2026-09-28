/**
 * Testimonial switcher. Without JS all quotes are visible; with JS one shows at
 * a time and the client-name buttons switch between them.
 */
export function initCarousel() {
  document.querySelectorAll('[data-carousel]').forEach((root) => {
    const slides = [...root.querySelectorAll('[data-slide]')];
    const tabs = [...root.querySelectorAll('[data-slide-tab]')];
    if (slides.length < 2) return;
    root.classList.add('is-enhanced');

    const show = (i) => {
      slides.forEach((s, n) => (s.hidden = n !== i));
      tabs.forEach((t, n) => t.setAttribute('aria-pressed', String(n === i)));
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => show(i));
      tab.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        tabs[next].focus();
        show(next);
      });
    });
    show(0);
  });
}
