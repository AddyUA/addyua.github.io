const tl = gsap.timeline();

tl.from('.navigation', {
  y: -100,
  duration: 1,
  ease: 'power2.out'
})
  // .from(
  //   '.footer-block',
  //   {
  //     y: +100,
  //     duration: 1,
  //     ease: 'power2.out'
  //   },
  //   '-= 1'
  // )
  .from('.right', {
    opacity: 0,
    // x: '+100%',
    duration: 1,
    ease: 'back.out(1.2)'
  })
  .from(
    '.left',
    {
      scale: 0,
      delay: 0.5,
      duration: 0.8,
      ease: 'back.out(1.7)'
    },
    '-= 1'
  );

$('#year').text(new Date().getFullYear());
