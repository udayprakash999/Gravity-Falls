const timeline = gsap.timeline();
timeline.from(".poster", {
  y: 0,
  opacity: 0,
  duration: 1,
});
timeline.from(".billcipher", {
  x: 400,
  opacity: 0,
  duration: 1.5,
});
timeline.from(
  "header",
  {
    opacity: 0,
    y: -100,
    duration: 0.5,
  },
  "-=1",
);

gsap.to(".billcipher", {
  scale: 1.15,
  opacity: 0.7,
  duration: 1,
  repeat: -1,
  yoyo: true,
  stagger: 0.5,
});
