const navItems = document.querySelectorAll(".nav");
const pages = document.querySelectorAll(".page");


function openPage(pageName) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    const page = document.getElementById(pageName);

    if (page) {
        page.classList.add("active");
    }

    const activeNav =
        document.querySelector(
            `.nav[data-page="${pageName}"]`
        );

    if (activeNav) {
        activeNav.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


navItems.forEach(item => {

    item.addEventListener("click", () => {

        openPage(item.dataset.page);

    });

});


/* Tank level simulation */

let tankLevel = 78;

setInterval(() => {

    const change =
        Math.random() > 0.5 ? 0.15 : -0.1;

    tankLevel += change;

    tankLevel =
        Math.max(
            74,
            Math.min(82, tankLevel)
        );

    const level =
        Math.round(tankLevel);

    const water =
        document.querySelector(".water-level");

    const tankText =
        document.querySelector(".water-level b");

    if (water) {
        water.style.height = level + "%";
    }

    if (tankText) {
        tankText.textContent = level + "%";
    }

}, 5000);


/* Keyboard shortcuts */

document.addEventListener("keydown", e => {

    const shortcuts = {
        "1": "dashboard",
        "2": "network",
        "3": "water",
        "4": "ai",
        "5": "energy",
        "6": "reports"
    };

    if (shortcuts[e.key]) {
        openPage(shortcuts[e.key]);
    }

});