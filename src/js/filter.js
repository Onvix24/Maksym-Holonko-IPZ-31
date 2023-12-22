document.addEventListener("DOMContentLoaded", function () {
    let filterButtons = document.querySelectorAll(".filter-list__button");
    let catalogItems = document.querySelectorAll(".catalog-list__item");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            let category = button.textContent.trim().toLowerCase();
            // console.log(category);

            catalogItems.forEach(function (item) {
                item.style.display = "none";
            });
            
            
            catalogItems.forEach((item) => {
                // console.log(item.textContent);
                console.log(item);
                if (category === "усі") {
                    item.style.display = "block";
                } else if (category === "веб-сайти" && item.textContent.includes("Веб-сайт")) {
                    item.style.display = "block";
                } else if (category === "додатки" && item.textContent.includes("Додаток")) {
                    item.style.display = "block";
                } else if (category === "дизайн" &&item.textContent.includes("Дизайн")) {
                    item.style.display = "block";
                } else if (category === "маркетинг" && item.textContent.includes("Маркетинг")) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none"
                }
            });
        });
    });
});


// 2 веб сайта
// 2 дизайна
// 3 додатка
// 2 маркетинг