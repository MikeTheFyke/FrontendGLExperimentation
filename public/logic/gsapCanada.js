var rule = CSSRulePlugin.getRule("span:after");

// gsap.from('.anim1', {opacity :0, duration: 1, y: -50, stagger: 0.6});
// gsap.from('#CowEating', {duration: 1, y: 30, opacity :0, delay: 1.4});
// gsap.to(rule, {cssRule: {scaleY: 0}, duration:1});
// gsap.from('aside', {duration: 1, delay: 1.1, backgroundPosition: '200px 0px', opacity :0});

var tl = gsap.timeline({default: {duration: 1}})

tl.from(".anim1", {y: -50, stagger: .6, opacity: 0})
.to(rule, {duration: 1.8, cssRule: {scaleY: 0}}, "-=2.2")
.from("aside", {backgroundPosition: '200px 0px', opacity: 0}, "-=1.5")
.from("#CowEating", {y: 50, opacity: 0}, "-=.5")

document.getElementById('cta').addEventListener('click', () => {
    tl.reversed() ? tl.play() : tl.reverse();
})