var rule = CSSRulePlugin.getRule("span:after");

var tl = gsap.timeline({default: {duration: 1}})

tl.from(".subtitleText", {y: -50, stagger: .6, opacity: 0})
tl.from(".titleText", {y:-150, stagger: .6, opacity:0}, "-=0.5")
tl.from("#left-text", {x:-250, stagger: .6, opacity:0}, "-=0.5")
tl.from("#right-text", {x:250, stagger: .6, opacity:0}, "-=0.5")
