var rule = CSSRulePlugin.getRule("span:after");

var tl = gsap.timeline({default: {duration: 1}})

tl.from(".subtitleText", {y: -50, stagger: .6, opacity: 0})
tl.from(".titleText", {y:-50, stagger: .6, opacity:0}, "-=0.5")
