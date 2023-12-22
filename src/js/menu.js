// const burgerButton = document.querySelector(".burger-button");
// const burgerMenu = document.querySelector(".menu-burger");

// burgerButton?.addEventListener("click", () => {
//     const isOpenBurgerButton = burgerButton?.classList.contains("burger-button_open");
//     const isOpenBurgerMenu = burgerMenu?.classList.contains(
//         "menu-burger_open"
//     );

//     if (!isOpenBurgerButton && !isOpenBurgerMenu) {
//         burgerButton.classList.add("burger-button_open");
//         burgerMenu?.classList.add("menu-burger_open");
//     }

//     if (isOpenBurgerButton) {
//         burgerButton.classList.remove("burger-button_open");
//         burgerMenu?.classList.remove("menu-burger_open");
//     }
// });

document.addEventListener("DOMContentLoaded", (event) => {
    const burgerButton = document.querySelector(".burger-button");
    const burgerMenu = document.querySelector(".menu-burger");

    const handleBurgerClick = () => {
        const isOpenBurgerButton =
            burgerButton?.classList.contains("burger-button_open");
        const isOpenBurgerMenu =
            burgerMenu?.classList.contains("menu-burger_open");

        if (!isOpenBurgerButton && !isOpenBurgerMenu) {
            burgerButton.classList.add("burger-button_open");
            burgerMenu?.classList.add("menu-burger_open");
        }

        if (isOpenBurgerButton) {
            burgerButton.classList.remove("burger-button_open");
            burgerMenu?.classList.remove("menu-burger_open");
        }
    };

    burgerButton?.addEventListener("click", handleBurgerClick);

    // Check window width on resize
    window.addEventListener("resize", () => {
        const windowWidth = window.innerWidth;
        if (windowWidth > 720) {
            burgerButton.classList.remove("burger-button_open");
            burgerMenu?.classList.remove("menu-burger_open");
        }
    });
});
