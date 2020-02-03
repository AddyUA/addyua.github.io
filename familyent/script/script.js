AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 800,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom'
});
gsap.from('.header-logo__circle', {
  duration: 1.5,
  scale: 0,
  delay: 1,
  ease: 'back.out(1.7)'
});
gsap.fromTo(
  '.header-logo__text',
  { x: 120, opacity: 0 },
  { duration: 1.5, delay: 2, x: 0, opacity: 1, ease: 'back.out(1.7)' }
);
gsap.fromTo(
  '.header-logo__text-mobile',
  { y: -120, opacity: 0 },
  { duration: 1.5, y: 0, opacity: 1, ease: 'back.out(1.7)' }
);
gsap.from('.header-logo__image-out', {
  duration: 1,
  opacity: 0,
  scale: 0,
  ease: 'back.out(.6)'
});
