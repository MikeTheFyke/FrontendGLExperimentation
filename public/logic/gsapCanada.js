var rule = CSSRulePlugin.getRule("span:after");

var tl = gsap.timeline({default: {duration: 1}})

tl.from("#main-content", {y: -50, stagger: .6, opacity: 0})
tl.from(".subtitleText", {y: -50, stagger: .6, opacity: 0})
tl.from(".titleText", {y:-150, stagger: .6, opacity:0}, "-=0.5")
tl.from("#left-text", {x:-250, stagger: .6, opacity:0}, "-=0.5")
tl.from("#NTBTS-Btn", {x:-250, stagger: .6, opacity:0}, "-=0.5")
tl.from("#right-text", {x:250, stagger: .6, opacity:0}, "-=0.5")

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function NTBTS() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
