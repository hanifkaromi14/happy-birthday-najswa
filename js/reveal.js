const reveals =
    document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        const visible =
            window.innerHeight - 120;

        if (top < visible) {

            section.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

window.addEventListener(
    "load",
    revealSections
);