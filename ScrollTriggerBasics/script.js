gsap.registerPlugin(ScrollTrigger);

// gsap.to('.square', {
//     // x:200,

//     duration:3,
//     scrollTrigger: {
//         trigger: ".square",
//         start: "top 30%",
//         end: "center 20%",
//         markers:true,
//         toggleClass: "red"
//     }
// })

// gsap.to('.square', {
//     // x:200,

//     duration:3,
//     scrollTrigger: {
//         trigger: ".square",
//         start: "top 30%",
//         end: () => `+=${document.querySelector(".square").offsetHeight}`,
//         markers:true,
//         toggleClass: "red"
//     }
// })

// gsap.to('.square', {
//     x:500,
//     duration:3,
//     scrollTrigger: {
//         trigger: ".square",
//         start: "top 60%",
//         end: "top 40%",
//         toggleActions: "restart pause reverse reset",  
//         // onEnter onLeave oneenterback onLeaveback
//         markers:true
//     }
// })
gsap.to('.square', {
    x:500,
    duration:3,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 80%",
        end: "top 30%",
        scrub: 4,
        toggleActions: "restart none none none",
        pin:'.square',
        pinSpacing: true,
        markers:true
    }
})