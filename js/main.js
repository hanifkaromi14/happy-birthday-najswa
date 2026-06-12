/* =================================
   HERO TYPING
================================= */

const heroText =
    "from someone who loves you very much ❤️";

const heroTarget =
    document.getElementById("typingHero");

let heroIndex = 0;

function typeHero() {

    if (heroIndex < heroText.length) {

        heroTarget.innerHTML +=
            heroText.charAt(heroIndex);

        heroIndex++;

        setTimeout(typeHero, 70);

    }

}

window.addEventListener("load", () => {

    typeHero();

});


/* =================================
   SCROLL BUTTON
================================= */

const giftBtn =
    document.getElementById("giftBtn");

giftBtn.addEventListener("click", () => {

    window.scrollTo({

        top: window.innerHeight,

        behavior: "smooth"

    });

});


/* =================================
   MUSIC PLAYER
================================= */

const music =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "⏸";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

        playing = false;

    }

});

/* =================================
   VIDEO KENANGAN CONTROL MUSIC
================================= */

const memoryVideo = document.getElementById("memoryVideo");
// ganti "memoryVideo" sesuai id video kamu di HTML

if (memoryVideo) {

    // Ketika video diputar
    memoryVideo.addEventListener("play", () => {

        if (!music.paused) {
            music.pause();
        }

    });


    // Ketika video dijeda
    memoryVideo.addEventListener("pause", () => {

        if (playing) {
            music.play();
        }

    });


    // Ketika video selesai
    memoryVideo.addEventListener("ended", () => {

        if (playing) {
            music.play();
        }

    });

}

/* =================================
   AUTO MUSIC AFTER FIRST TOUCH
   (IPHONE FRIENDLY)
================================= */

document.addEventListener("click", function firstPlay() {

    if (!playing) {

        music.play()
            .then(() => {

                musicBtn.innerHTML = "⏸";

                playing = true;

            })
            .catch(() => { });

    }

    document.removeEventListener(
        "click",
        firstPlay
    );

});


/* =================================
   TULIP PETALS
================================= */

function createPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌷";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        (20 + Math.random() * 15) + "px";

    petal.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 900);


/* =================================
   ENDING ANIMATION
================================= */

const ending =
    document.getElementById("endingText");

let endingPlayed = false;

const endingObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (
                entry.isIntersecting &&
                !endingPlayed
            ) {

                endingPlayed = true;

                playEnding();

                endingObserver.unobserve(ending);

            }

        });

    },
        {
            threshold: 0.5
        }
    );


function typeText(
    element,
    text,
    speed = 80
) {

    return new Promise(resolve => {

        let i = 0;

        element.innerHTML = "";

        const interval =
            setInterval(() => {

                element.innerHTML +=
                    text.charAt(i);

                i++;

                if (i >= text.length) {

                    clearInterval(interval);

                    resolve();

                }

            }, speed);

    });

}


async function playEnding() {

    await typeText(
        ending,
        "I Love You Aurell ❤️",
        90
    );

    await new Promise(resolve =>
        setTimeout(resolve, 2000)
    );

    await typeText(
        ending,
        "Happy 20th Birthday ❤️",
        90
    );

}


endingObserver.observe(ending);


/* =================================
   PARALLAX HERO
================================= */

window.addEventListener("scroll", () => {

    const scrolled =
        window.pageYOffset;

    const hero =
        document.querySelector(".hero");

    if (hero) {

        hero.style.backgroundPositionY =
            scrolled * 0.3 + "px";

    }

});


/* =================================
   HERO BUTTON ENTRANCE
================================= */

window.addEventListener("load", () => {

    giftBtn.style.opacity = "0";

    giftBtn.style.transform =
        "translateY(20px)";

    setTimeout(() => {

        giftBtn.style.transition =
            ".8s ease";

        giftBtn.style.opacity = "1";

        giftBtn.style.transform =
            "translateY(0)";

    }, 1800);

});


/* =================================
   LETTER SOFT EFFECT
================================= */

const letterBox =
    document.querySelector(".letter-box");

if (letterBox) {

    window.addEventListener("mousemove", (e) => {

        const x =
            (e.clientX /
                window.innerWidth - 0.5) * 4;

        const y =
            (e.clientY /
                window.innerHeight - 0.5) * 4;

        letterBox.style.transform =
            `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

    window.addEventListener("mouseleave", () => {

        letterBox.style.transform =
            "rotateY(0deg) rotateX(0deg)";

    });

}


/* =================================
   SMOOTH PAGE LOAD
================================= */

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition =
        "opacity 1s ease";

    document.body.style.opacity = "1";

});