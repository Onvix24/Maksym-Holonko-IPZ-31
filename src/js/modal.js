(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

// (() => {
//     const refs = {
//         openModalBtn: document.querySelector("[data-modal-open]"),
//         closeModalBtn: document.querySelector("[data-modal-close]"),
//         modal: document.querySelector("[data-modal]"),
//         contactLink: document.getElementById('contact')
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//         refs.modal.classList.toggle("is-hidden");

//         const isModalOpen = !refs.modal.classList.contains("is-hidden");
//         document.body.classList.toggle("no-scroll", isModalOpen);

//         if (isModalOpen) {
//             homeLink.classList.remove("nav__link_active");
//             portfolioLink.classList.remove("nav__link_active");
//         }

//         refs.contactLink.classList.toggle("nav__link_active", isModalOpen)
//     }
// })();

// //=================================

// // Отримати поточну URL сторінки
// const currentPageUrl = window.location.href;
// // Отримати посилання
// const homeLink = document.getElementById("studio");
// const portfolioLink = document.getElementById("portfolio");

// if (currentPageUrl.includes("index.html")) {
//     homeLink.classList.add("nav__link_active");
// } else if (currentPageUrl.includes("portfolio.html")) {
//     portfolioLink.classList.add("nav__link_active");
// }
