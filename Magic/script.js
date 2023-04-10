gsap.registerPlugin(ScrollTrigger);
let pin1 = document.querySelector('#pin1');
var pin1Rect = pin1.querySelector('.inner').getBoundingClientRect();

var tl = gsap.timeline({
    ease: Power3.easeOut,
    scrollTrigger:{
        trigger: pin1,
        start:'top top',
        end: '+=200% top',
        scrub: 0.1,
        pin: pin1,
        invalidateOnRefresh: true,
        markers: {startColor: "red", endColor: "red", fontSize: "12px"}
    }
});

tl.to(pin1, {'--masksize': '100%', duration: 0.8}, 0)
  .from('.text-from', {y:'60vh', duration: 0.8}, 0.5);