new fullpage('#fullpage', {
    autoscrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) =>{
        const section = destination.item;
        const title = section.querySelector('h1');
        const subtitle = section.querySelector('h2');
        const description = section.querySelector('p');

        const sigil = document.querySelectorAll('.sigil');
        const avatar1 = document.querySelectorAll('.avatar1');
        const avatar2 = document.querySelectorAll('.avatar2');
        const avatar2B = document.querySelectorAll('.avatar2B');

        const tl = new TimelineMax({ delay: 0.5});
        tl.fromTo(title, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1});
        tl.fromTo(subtitle, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1});
        tl.fromTo(description, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1});

        tl.fromTo(sigil, 0.5, {x: '175%'}, {x: '-50%'});
        tl.fromTo(avatar1, 0.5, {x: '-350%'}, {x: '-20%'});
        tl.fromTo(avatar2, 0.5, {x: '200%'}, {x: '-20%'});
        tl.fromTo(avatar2B, 0.5, {x: '-350%'}, {x: '-20%'});

    }
});
