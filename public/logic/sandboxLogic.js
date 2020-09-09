new fullpage('#preview', {
    autoscrolling: true,
    navigation: true,
    // navigationPosition: 'right',
    // navigationTooltips: ['WebGL', 'Canvas', 'Animation', 'ThreeJs', 'Processing', 'P5Js', 'Gsap'],
    onLeave: (origin, destination, direction) =>{
        const section = destination.item;
        const title = section.querySelector('.section-header');
        const description = section.querySelector('p');

        const sigil = document.querySelectorAll('.section-canvas');
        const div = document.querySelectorAll('.section-div');

        const tl = new TimelineMax({ delay: 0.5});
        tl.fromTo(title, 0.5, {x: "-50", opacity: 0}, {x: 0, opacity: 1});
        tl.fromTo(description, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1}, '-=.5');

        tl.fromTo(sigil, 0.5, {x: '-175%'}, {x: '0%'}, '-=.5');
        tl.fromTo(div, 0.5, {x: '-175%'}, {x: '0%'}, '-=.5');
        // tl.fromTo(avatar1, 0.5, {x: '-350%'}, {x: '-20%'});
        // tl.fromTo(avatar2, 0.5, {x: '200%'}, {x: '-20%'});
        // tl.fromTo(avatar2B, 0.5, {x: '-350%'}, {x: '-20%'});

    }
});
/// TandP Farting
var newFart = new Audio();

function Tfarting () {
    var fartRandom = Math.floor(Math.random() * 2) + 1;
    console.log(fartRandom);
    if (fartRandom === 1){
        newFart.src = "../sounds/dry-fart.mp3";
    }
    else if (fartRandom === 2){
        newFart.src = "../sounds/wet-fart_1.mp3";
    }
    var Tbutt = document.getElementById('TfartingButt');
    Tbutt.src = "../images/canvas/T-Fart-T.gif";
    var Pbutt = document.getElementById('PfartingButt');
    Pbutt.src = "../images/canvas/T-Fart-P.gif";
}
function Pfarting () {
    var fartRandom = Math.floor(Math.random() * 2) + 1;
    console.log(fartRandom);
    if (fartRandom === 1){
        newFart.src = "../sounds/dry-fart.mp3";
    }
    else if (fartRandom === 2){
        newFart.src = "../sounds/wet-fart_1.mp3";
    }
    var Tbutt = document.getElementById('TfartingButt');
    Tbutt.src = "../images/canvas/P-Fart-T.gif";
    var Pbutt = document.getElementById('PfartingButt');
    Pbutt.src = "../images/canvas/P-Fart-P.gif";
}

var canvas1 = document.getElementById("section-s1-canvas");
var ctx = canvas1.getContext('2d');