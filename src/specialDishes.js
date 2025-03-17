// src/specialDishes.js
import saladFattoush from "./media_files/fattoush_salad.svg";
import vegSalad from "./media_files/vegetable_salad.svg";
import eggSalad from "./media_files/egg_salad.svg";

export function createSpecialDishesSection() {
    const specialDishes = document.createElement("section");
    specialDishes.id = "special-dishes";

    const sdSubheading = document.createElement("h3");
    sdSubheading.classList.add("cf-subheading");
    sdSubheading.textContent = "Special Dishes";

    const sdHeading = document.createElement("h2");
    sdHeading.textContent = "Standout Dishes From Our Menu";

    const sdDishContainer = document.createElement("div");
    sdDishContainer.classList.add("dish-container-holder");

    const salads = [
        { src: saladFattoush, alt: "fattoush salad", title: "Fattoush Salad" },
        { src: vegSalad, alt: "fattoush salad", title: "Veg Salad" },
        { src: eggSalad, alt: "fattoush salad", title: "Egg vegi Salad" },
        { src: eggSalad, alt: "fattoush salad", title: "Egg vegi Salad" }
    ];

    salads.forEach(salad => {
        const saladContainer = document.createElement("div");
        saladContainer.classList.add("salad-container");

        const iconHolder = document.createElement("div");
        iconHolder.classList.add("icon-holder");
        const heartSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        heartSvg.setAttribute("width", "24");
        heartSvg.setAttribute("height", "24");
        heartSvg.setAttribute("viewBox", "0 0 24 24");
        heartSvg.setAttribute("fill", "none");
        const heartG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        heartG.setAttribute("clip-path", "url(#clip0_1_105)");
        const heartPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        heartPath.setAttribute("d", "M17.5 1.91653C16.3739 1.93405 15.2724 2.24839 14.3068 2.82781C13.3411 3.40722 12.5453 4.2312 12 5.21653C11.4546 4.2312 10.6589 3.40722 9.69323 2.82781C8.72753 2.24839 7.62604 1.93405 6.49999 1.91653C4.70493 1.99453 3.01369 2.77979 1.79577 4.10077C0.577848 5.42175 -0.0677617 7.17106 -1.11917e-05 8.96653C-1.11917e-05 13.5135 4.78599 18.4795 8.79999 21.8465C9.69621 22.5997 10.8293 23.0126 12 23.0126C13.1706 23.0126 14.3038 22.5997 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.96653C24.0677 7.17106 23.4221 5.42175 22.2042 4.10077C20.9863 2.77979 19.295 1.99453 17.5 1.91653Z");
        heartPath.setAttribute("fill", "white");
        heartG.appendChild(heartPath);
        const heartDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const heartClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        heartClipPath.setAttribute("id", "clip0_1_105");
        const heartRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        heartRect.setAttribute("width", "24");
        heartRect.setAttribute("height", "24");
        heartRect.setAttribute("fill", "white");
        heartClipPath.appendChild(heartRect);
        heartDefs.appendChild(heartClipPath);
        heartSvg.appendChild(heartG);
        heartSvg.appendChild(heartDefs);
        iconHolder.appendChild(heartSvg);

        const saladImg = document.createElement("img");
        saladImg.classList.add("salad-image");
        saladImg.src = salad.src;
        saladImg.alt = salad.alt;

        const saladTitle = document.createElement("h4");
        saladTitle.textContent = salad.title;

        const saladDescription = document.createElement("p");
        saladDescription.textContent = "description of item";

        const priceRatingContainer = document.createElement("div");
        priceRatingContainer.classList.add("price-rating-container");

        const price = document.createElement("p");
        const priceHighlight = document.createElement("span");
        priceHighlight.classList.add("highlight-orange");
        priceHighlight.textContent = "$";
        price.appendChild(priceHighlight);
        price.appendChild(document.createTextNode("24.00"));

        const ratingContainer = document.createElement("div");
        ratingContainer.classList.add("rating-container");
        const ratingStar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        ratingStar.classList.add("rating-star");
        ratingStar.setAttribute("width", "24");
        ratingStar.setAttribute("height", "24");
        ratingStar.setAttribute("viewBox", "0 0 24 24");
        ratingStar.setAttribute("fill", "none");
        const ratingG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        ratingG.setAttribute("clip-path", "url(#clip0_1_97)");
        const ratingPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        ratingPath.setAttribute("d", "M1.3268 12.4003L4.8868 15.0003L3.5348 19.1873C3.31631 19.8367 3.31354 20.5393 3.52691 21.1904C3.74027 21.8415 4.15834 22.4062 4.7188 22.8003C5.26965 23.2071 5.93719 23.425 6.62195 23.4216C7.30671 23.4182 7.97204 23.1936 8.5188 22.7813L11.9998 20.2193L15.4818 22.7783C16.0317 23.1828 16.6956 23.4024 17.3782 23.4058C18.0607 23.4091 18.7268 23.1959 19.2806 22.7968C19.8343 22.3977 20.2473 21.8333 20.4601 21.1848C20.6729 20.5362 20.6745 19.8369 20.4648 19.1873L19.1128 15.0003L22.6728 12.4003C23.2219 11.9988 23.6302 11.4341 23.8391 10.7867C24.0481 10.1393 24.0472 9.44249 23.8365 8.79569C23.6258 8.1489 23.216 7.58523 22.6658 7.18521C22.1156 6.78519 21.4531 6.56927 20.7728 6.56831H16.3998L15.0728 2.43231C14.8641 1.78126 14.4541 1.21332 13.9018 0.810371C13.3495 0.407422 12.6835 0.190292 11.9998 0.190292C11.3161 0.190292 10.6501 0.407422 10.0978 0.810371C9.54553 1.21332 9.13548 1.78126 8.9268 2.43231L7.5998 6.56831H3.2308C2.55054 6.56927 1.88799 6.78519 1.33778 7.18521C0.787564 7.58523 0.377837 8.1489 0.167118 8.79569C-0.0436018 9.44249 -0.0445344 10.1393 0.164453 10.7867C0.37344 11.4341 0.781657 11.9988 1.3308 12.4003H1.3268Z");
        ratingPath.setAttribute("fill", "#FFE605");
        ratingG.appendChild(ratingPath);
        const ratingDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const ratingClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        ratingClipPath.setAttribute("id", "clip0_1_97");
        const ratingRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        ratingRect.setAttribute("width", "24");
        ratingRect.setAttribute("height", "24");
        ratingRect.setAttribute("fill", "white");
        ratingClipPath.appendChild(ratingRect);
        ratingDefs.appendChild(ratingClipPath);
        ratingStar.appendChild(ratingG);
        ratingStar.appendChild(ratingDefs);
        const ratingText = document.createElement("p");
        ratingText.textContent = "4.9";
        ratingContainer.appendChild(ratingStar);
        ratingContainer.appendChild(ratingText);

        priceRatingContainer.appendChild(price);
        priceRatingContainer.appendChild(ratingContainer);

        saladContainer.appendChild(iconHolder);
        saladContainer.appendChild(saladImg);
        saladContainer.appendChild(saladTitle);
        saladContainer.appendChild(saladDescription);
        saladContainer.appendChild(priceRatingContainer);
        sdDishContainer.appendChild(saladContainer);
    });

    specialDishes.appendChild(sdSubheading);
    specialDishes.appendChild(sdHeading);
    specialDishes.appendChild(sdDishContainer);

    return specialDishes;
}