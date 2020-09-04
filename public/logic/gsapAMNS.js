new fullpage('#fullpage', {
    autoscrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) =>{
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({ delay: 0.5});
        tl.fromTo(title, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1});

        if (destination.index === 0){
            const sigil = document.querySelectorAll('.sigil');
            const avatar1 = document.querySelectorAll('.avatar1');
            const avatar2 = document.querySelectorAll('.avatar2');

            tl.fromTo(sigil, 0.7, {x: '175%'}, {x: '-50%'});
            tl.fromTo(avatar, 0.7, {x: '-350%'}, {x: '-20%'})
        }

        if (destination.index === 1){
            const sigil = document.querySelectorAll('.sigil');
            const avatar = document.querySelectorAll('.avatar2B');

            tl.fromTo(sigil, 0.7, {x: '175%'}, {x: '-50%'});
            tl.fromTo(avatar, 0.7, {x: '-350%'}, {x: '-20%'})
        }
    }
});