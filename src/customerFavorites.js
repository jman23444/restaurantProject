// src/customerFavorites.js
import chickenBurger from "./media_files/chicken_burger.svg";
import grilledCheese from "./media_files/grilled_cheese.svg";
import dessert from "./media_files/dessert.svg";
import browseAll from "./media_files/browse_all.svg";

export function createCustomerFavoritesSection() {
    const customerFavorites = document.createElement('section');
    customerFavorites.id = "customer-favorites";

    const cfSubheading = document.createElement('h3');
    cfSubheading.classList.add("cf-subheading");
    cfSubheading.textContent = "Customer Favorites";

    const cfHeading = document.createElement('h2');
    cfHeading.textContent = "Popular Categories";

    const dishContainerHolder = document.createElement('div');
    dishContainerHolder.classList.add("dish-container-holder");

    const dishes = [
        { src: chickenBurger, alt: "Chicken Burger", title: "Main Dish", count: "(86 dishes)" },
        { src: grilledCheese, alt: "Grilled Cheese", title: "Grilled Cheese", count: "(23 dishes)" },
        { src: dessert, alt: "Dessert", title: "Dessert", count: "(16 dishes)" },
        { src: browseAll, alt: "Browse All", title: "Browse All", count: "(186 dishes)" }
    ];

    dishes.forEach(dish => {
        const dishContainer = document.createElement('div');
        dishContainer.classList.add("dish-container");

        const dishImg = document.createElement("img");
        dishImg.src = dish.src;
        dishImg.alt = dish.alt;

        const dishTitle = document.createElement("h4");
        dishTitle.textContent = dish.title;

        const dishCount = document.createElement("p");
        dishCount.textContent = dish.count;

        dishContainer.appendChild(dishImg);
        dishContainer.appendChild(dishTitle);
        dishContainer.appendChild(dishCount);

        dishContainerHolder.appendChild(dishContainer);
    });

    customerFavorites.appendChild(cfSubheading);
    customerFavorites.appendChild(cfHeading);
    customerFavorites.appendChild(dishContainerHolder);

    return customerFavorites;
}