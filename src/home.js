import projectLogo from "./media_files/projectLogo.svg";
import projectHeroImage from "./media_files/projectHeroImage.svg";
import testimonialImage from "./media_files/tesimonials_image.svg";
import customerImage from "./media_files/Customers.png";

import chickenBurger from "./media_files/chicken_burger.svg";
import grilledCheese from "./media_files/grilled_cheese.svg";
import dessert from "./media_files/dessert.svg";
import browseAll from "./media_files/browse_all.svg";

import saladFattoush from "./media_files/fattoush_salad.svg";
import vegSalad from "./media_files/vegetable_salad.svg";
import eggSalad from "./media_files/egg_salad.svg";

import facebookIcon from "./media_files/facebook_logo.svg";
import instaIcon from "./media_files/instagram_logo.svg";
import twitterLogo from "./media_files/twitter_logo.svg";
import youtubeLogo from "./media_files/youtube_logo.svg";



export function loadHome() {

    //
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ""; // Clearing existing Content


    // Hero Section 


    const heroDiv = document.createElement('div');
    heroDiv.id = "hero";

    const textBtnSection = document.createElement('div');
    textBtnSection.id = "text-btn-section";

    const heroHeading = document.createElement('h1');
    const textPart1 = document.createTextNode('Dive into Delights Of Delectable ');
    const greenText = document.createElement('span');
    greenText.classList.add("highlight-green");
    greenText.textContent = "Green";

    heroHeading.appendChild(textPart1);
    heroHeading.appendChild(greenText);

    const heroSubheading = document.createElement('p');
    heroSubheading.id = "hero-subheading";
    heroSubheading.textContent = "Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship";

    const heroButtons = document.createElement('div');
    heroButtons.id = "hero-btns";

    const orderNowButton = document.createElement('button');
    orderNowButton.classList.add("primary-btn");
    orderNowButton.id = "order-now-btn";
    orderNowButton.style.boxShadow = "-2px 22px 38px 0px rgba(142, 255, 154, 0.50)";
    const orderNowText = document.createElement('p');
    orderNowText.textContent = "Order Now";
    orderNowButton.appendChild(orderNowText);

    const watchNowButton = document.createElement('button');
    watchNowButton.classList.add("secondary-btn");
    watchNowButton.id = "watch-now-btn";
    const watchNowText = document.createElement('p');
    watchNowText.textContent = "Watch Now";
    watchNowButton.appendChild(watchNowText);

    const playBtnContainer = document.createElement('div');
    playBtnContainer.id = "play-btn-container";
    const playBtnSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    playBtnSvg.setAttribute('id', 'play-btn');
    playBtnSvg.setAttribute("width", "24");
    playBtnSvg.setAttribute("height", "28");
    playBtnSvg.setAttribute("viewBox", "0 0 24 28");
    playBtnSvg.setAttribute("fill", "none");
    const playBtnPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    playBtnPath.setAttribute("d", "M22.5 11.4019C24.5 12.5566 24.5 15.4434 22.5 16.5981L4.49999 26.9904C2.49999 28.1451 -1.34201e-06 26.7017 -1.24107e-06 24.3923L-3.32543e-07 3.60769C-2.31596e-07 1.29829 2.5 -0.145083 4.5 1.00962L22.5 11.4019Z");
    playBtnPath.setAttribute("fill", "#1E1E1E");
    playBtnSvg.appendChild(playBtnPath);
    playBtnContainer.appendChild(playBtnSvg);

    heroButtons.appendChild(orderNowButton);
    heroButtons.appendChild(watchNowButton);
    heroButtons.appendChild(playBtnContainer);

    textBtnSection.appendChild(heroHeading);
    textBtnSection.appendChild(heroSubheading);
    textBtnSection.appendChild(heroButtons);


    const heroImage = document.createElement("img");
    heroImage.src = projectHeroImage;
    heroImage.alt = "Hero Image";

    heroDiv.appendChild(textBtnSection);
    heroDiv.appendChild(heroImage);


    // Main Content 


    const main = document.createElement('div');


    // Customer Favorites Section 


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
    ]

    dishes.forEach(dish => {
        //
        const dishContainer = document.createElement('div');
        dishContainer.classList.add("dish-container");
        //
        const dishImg = document.createElement("img");
        dishImg.src = dish.src;
        dishImg.alt = dish.alt;
        //
        const dishTitle = document.createElement("h4");
        dishTitle.textContent = dish.title;
        //
        const dishCount = document.createElement("p");
        dishCount.textContent = dish.count;
        //
        dishContainer.appendChild(dishImg);
        dishContainer.appendChild(dishTitle);
        dishContainer.appendChild(dishCount);
        //
        dishContainerHolder.appendChild(dishContainer);
        //
    });

    //
    customerFavorites.appendChild(cfSubheading);
    customerFavorites.appendChild(cfHeading);
    customerFavorites.appendChild(dishContainerHolder);
    //
    main.appendChild(customerFavorites);


    // Special Dishes Section


    const specialDishes = document.createElement("section");
    specialDishes.id = "special-dishes";

    //
    const sdSubheading = document.createElement("h3");
    sdSubheading.classList.add("cf-subheading");
    sdSubheading.textContent = "Special Dishes";

    //
    const sdHeading = document.createElement("h2");
    sdHeading.textContent = "Standout Dishes From Our Menu";

    //
    const sdDishContainer = document.createElement("div");
    sdDishContainer.classList.add("dish-container-holder");

    //

    const salads = [
        { src: saladFattoush, alt: "fattoush salad", title: "Fattoush Salad" },
        { src: vegSalad, alt: "fattoush salad", title: "Veg Salad" },
        { src: eggSalad, alt: "fattoush salad", title: "Egg vegi Salad" },
        { src: eggSalad, alt: "fattoush salad", title: "Egg vegi Salad" }
    ];

    salads.forEach(salad => {
        //
        const saladContainer = document.createElement("div");
        saladContainer.classList.add("salad-container");
        //
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
        //
        const saladImg = document.createElement("img");
        saladImg.classList.add("salad-image");
        saladImg.src = salad.src;
        saladImg.alt = salad.alt;
        //
        const saladTitle = document.createElement("h4");
        saladTitle.textContent = salad.title;
        //
        const saladDescription = document.createElement("p");
        saladDescription.textContent = "description of item";
        //
        const priceRatingContainer = document.createElement("div");
        priceRatingContainer.classList.add("price-rating-container");
        //
        const price = document.createElement("p");
        const priceHighlight = document.createElement("span");
        priceHighlight.classList.add("highlight-orange");
        priceHighlight.textContent = "$";
        price.appendChild(priceHighlight);
        price.appendChild(document.createTextNode("24.00"));
        //
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
        //
        priceRatingContainer.appendChild(price);
        priceRatingContainer.appendChild(ratingContainer);
        //
        saladContainer.appendChild(iconHolder);
        saladContainer.appendChild(saladImg);
        saladContainer.appendChild(saladTitle);
        saladContainer.appendChild(saladDescription);
        saladContainer.appendChild(priceRatingContainer);
        sdDishContainer.appendChild(saladContainer);
        //
    });

    //
    specialDishes.appendChild(sdSubheading);
    specialDishes.appendChild(sdHeading);
    specialDishes.appendChild(sdDishContainer);
    //
    main.appendChild(specialDishes);
    

    // Testimonials 


    const testimonials = document.createElement("section");
    testimonials.id = "testimonials";

    //

    const testimonialImg = document.createElement("img");
    testimonialImg.src = testimonialImage;
    testimonials.alt = "Chef";

    //

    const testimonialText = document.createElement("div");
    testimonialText.classList.add("text");

    const tsSubheading = document.createElement("h3");
    tsSubheading.classList.add("cf-subheading");
    tsSubheading.textContent = "Testimonials";
    
    const tsHeading = document.createElement("h2");
    tsHeading.textContent = "Testimonials";

    const tsPara = document.createElement("p");
    tsPara.textContent = "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable";

    const customerDiv = document.createElement("div");
    customerDiv.classList.add("customers");

    const customerImg = document.createElement("img");
    customerImg.id = "customer-reviews";
    customerImg.src = customerImage;
    customerImg.alt = "Customers";

    const customerReviews = document.createElement("div");
    customerReviews.id = "customer-reviews";

    const customerHeading = document.createElement("h4");
    customerHeading.textContent = "Customer Feedback";

    const nestedCustomerDiv = document.createElement("div");
    nestedCustomerDiv.id = "nested-customer-feedback";

    const cfRatingContainer = document.createElement("div");
    cfRatingContainer.classList.add("rating-container");

    const cfRatingStar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    cfRatingStar.classList.add("rating-star");
    cfRatingStar.setAttribute("width", "24");
    cfRatingStar.setAttribute("height", "24");
    cfRatingStar.setAttribute("viewBox", "0 0 24 24");
    cfRatingStar.setAttribute("fill", "none");
    const cfRatingG = document.createElementNS("http://www.w3.org/2000/svg", "g");
    cfRatingG.setAttribute("clip-path", "url(#clip0_1_97)");
    const cfRatingPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    cfRatingPath.setAttribute("d", "M1.3268 12.4003L4.8868 15.0003L3.5348 19.1873C3.31631 19.8367 3.31354 20.5393 3.52691 21.1904C3.74027 21.8415 4.15834 22.4062 4.7188 22.8003C5.26965 23.2071 5.93719 23.425 6.62195 23.4216C7.30671 23.4182 7.97204 23.1936 8.5188 22.7813L11.9998 20.2193L15.4818 22.7783C16.0317 23.1828 16.6956 23.4024 17.3782 23.4058C18.0607 23.4091 18.7268 23.1959 19.2806 22.7968C19.8343 22.3977 20.2473 21.8333 20.4601 21.1848C20.6729 20.5362 20.6745 19.8369 20.4648 19.1873L19.1128 15.0003L22.6728 12.4003C23.2219 11.9988 23.6302 11.4341 23.8391 10.7867C24.0481 10.1393 24.0472 9.44249 23.8365 8.79569C23.6258 8.1489 23.216 7.58523 22.6658 7.18521C22.1156 6.78519 21.4531 6.56927 20.7728 6.56831H16.3998L15.0728 2.43231C14.8641 1.78126 14.4541 1.21332 13.9018 0.810371C13.3495 0.407422 12.6835 0.190292 11.9998 0.190292C11.3161 0.190292 10.6501 0.407422 10.0978 0.810371C9.54553 1.21332 9.13548 1.78126 8.9268 2.43231L7.5998 6.56831H3.2308C2.55054 6.56927 1.88799 6.78519 1.33778 7.18521C0.787564 7.58523 0.377837 8.1489 0.167118 8.79569C-0.0436018 9.44249 -0.0445344 10.1393 0.164453 10.7867C0.37344 11.4341 0.781657 11.9988 1.3308 12.4003H1.3268Z");
    cfRatingPath.setAttribute("fill", "#FFE605");
    cfRatingG.appendChild(cfRatingPath);
    const cfRatingDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const cfRatingClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    cfRatingClipPath.setAttribute("id", "clip0_1_97");
    const cfRatingRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    cfRatingRect.setAttribute("width", "24");
    cfRatingRect.setAttribute("height", "24");
    cfRatingRect.setAttribute("fill", "white");
    cfRatingClipPath.appendChild(cfRatingRect);
    cfRatingDefs.appendChild(cfRatingClipPath);
    cfRatingStar.appendChild(cfRatingG);
    cfRatingStar.appendChild(cfRatingDefs);
    const cfRatingText = document.createElement("p");
    cfRatingText.textContent = "4.9";
    cfRatingContainer.appendChild(cfRatingStar);
    cfRatingContainer.appendChild(cfRatingText);

    const cfReviews = document.createElement("p");
    cfReviews.id = "ab";
    cfReviews.textContent = "(18.6k Reviews)";

    //

    nestedCustomerDiv.appendChild(cfRatingContainer);
    nestedCustomerDiv.appendChild(cfReviews);

    customerReviews.appendChild(cfReviews);
    customerReviews.appendChild(cfRatingContainer);

    customerDiv.appendChild(customerImg);
    customerDiv.appendChild(customerReviews);

    testimonialText.appendChild(tsSubheading);
    testimonialText.appendChild(tsHeading);
    testimonialText.appendChild(tsPara);
    testimonialText.appendChild(customerDiv);

    testimonials.appendChild(testimonialImg);
    testimonials.appendChild(testimonialText);

    main.appendChild(testimonials);

    // Our Services Section
    const ourServices = document.createElement("section");
    ourServices.id = "our-services";

    const ourServicesText = document.createElement("div");
    ourServicesText.classList.add("our-services-text");

    const osSubheading = document.createElement("h3");
    osSubheading.classList.add("cf-subheading");
    osSubheading.textContent = "Our story & Services";

    const osHeading = document.createElement("h2");
    osHeading.textContent = "Our Culinary Journey And Services";

    const osPara = document.createElement("p");
    osPara.textContent = "Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.";

    const osTextButton = document.createElement("button");
    osTextButton.classList.add("primary-btn");
    osTextButton.style.boxShadow = "-2px 22px 38px 0px rgba(142, 255, 154, 0.50)";
    const osTextButtonPara = document.createElement("p");
    osTextButtonPara.textContent = "Explore";
    osTextButton.appendChild(osTextButtonPara);

    ourServicesText.appendChild(osSubheading);
    ourServicesText.appendChild(osHeading);
    ourServicesText.appendChild(osPara);
    ourServicesText.appendChild(osTextButton);

    const osContainers = document.createElement("div");
    osContainers.classList.add("our-services-containers");

    const services = [
        {
            svgPath: "M53.3333 18.6667H48.6987C50.2064 17.3376 51.4032 15.693 52.2042 13.8496C53.0051 12.0062 53.3906 10.0091 53.3333 8C53.3333 7.29276 53.0524 6.61448 52.5523 6.11438C52.0522 5.61428 51.3739 5.33333 50.6667 5.33333C49.9594 5.33333 49.2811 5.61428 48.781 6.11438C48.281 6.61448 48 7.29276 48 8C48 14.992 41.6773 17.4133 36.8693 18.2427C38.644 15.0961 39.7122 11.601 40 8C40 5.87827 39.1571 3.84344 37.6569 2.34315C36.1566 0.842855 34.1217 0 32 0C29.8783 0 27.8434 0.842855 26.3431 2.34315C24.8429 3.84344 24 5.87827 24 8C24.2878 11.601 25.356 15.0961 27.1307 18.2427C22.3227 17.4133 16 14.992 16 8C16 7.29276 15.719 6.61448 15.219 6.11438C14.7189 5.61428 14.0406 5.33333 13.3333 5.33333C12.6261 5.33333 11.9478 5.61428 11.4477 6.11438C10.9476 6.61448 10.6667 7.29276 10.6667 8C10.6094 10.0091 10.9949 12.0062 11.7958 13.8496C12.5968 15.693 13.7936 17.3376 15.3013 18.6667H10.6667C7.83769 18.6667 5.12458 19.7905 3.12419 21.7909C1.12381 23.7912 0 26.5044 0 29.3333L0 32C0 33.4145 0.561903 34.771 1.5621 35.7712C2.56229 36.7714 3.91885 37.3333 5.33333 37.3333V50.6667C5.33757 54.2016 6.74369 57.5905 9.24325 60.0901C11.7428 62.5897 15.1317 63.9958 18.6667 64H45.3333C48.8683 63.9958 52.2572 62.5897 54.7568 60.0901C57.2563 57.5905 58.6624 54.2016 58.6667 50.6667V37.3333C60.0812 37.3333 61.4377 36.7714 62.4379 35.7712C63.4381 34.771 64 33.4145 64 32V29.3333C64 26.5044 62.8762 23.7912 60.8758 21.7909C58.8754 19.7905 56.1623 18.6667 53.3333 18.6667ZM32 5.33333C32.7072 5.33333 33.3855 5.61428 33.8856 6.11438C34.3857 6.61448 34.6667 7.29276 34.6667 8C34.3448 10.8342 33.4366 13.5704 32 16.0347C30.5634 13.5704 29.6552 10.8342 29.3333 8C29.3333 7.29276 29.6143 6.61448 30.1144 6.11438C30.6145 5.61428 31.2928 5.33333 32 5.33333ZM5.33333 29.3333C5.33333 27.9188 5.89524 26.5623 6.89543 25.5621C7.89562 24.5619 9.25218 24 10.6667 24H29.3333V32H5.33333V29.3333ZM10.6667 50.6667V37.3333H29.3333V58.6667H18.6667C16.5449 58.6667 14.5101 57.8238 13.0098 56.3235C11.5095 54.8232 10.6667 52.7884 10.6667 50.6667ZM53.3333 50.6667C53.3333 52.7884 52.4905 54.8232 50.9902 56.3235C49.4899 57.8238 47.4551 58.6667 45.3333 58.6667H34.6667V37.3333H53.3333V50.6667ZM34.6667 32V24H53.3333C54.7478 24 56.1044 24.5619 57.1046 25.5621C58.1048 26.5623 58.6667 27.9188 58.6667 29.3333V32H34.6667Z",
            svgFill: "#5FE26C",
            title: "Gift Cards",
            text: "Give the gift of exceptional dining with Foodi Gift Cards",
        },
        {
            svgPath: "M61.8503 30.9339C60.4334 29.0417 58.4201 27.6824 56.1356 27.0752C57.2491 23.8384 58.0719 20.5088 58.5942 17.1259C58.7649 15.8962 58.6479 14.6437 58.2522 13.4669C57.8566 12.2902 57.1932 11.2213 56.3143 10.3445C55.4355 9.46769 54.365 8.80684 53.1873 8.41398C52.0097 8.02113 50.7569 7.907 49.5276 8.08058C49.1916 8.12591 48.1943 8.27258 46.8316 8.53658C47.6754 6.66846 48.0751 4.63035 47.9996 2.58191C47.9884 2.23172 47.9083 1.88716 47.7639 1.56792C47.6196 1.24867 47.4137 0.960986 47.1582 0.721287C46.9026 0.481588 46.6024 0.29457 46.2746 0.17091C45.9467 0.047251 45.5978 -0.010628 45.2476 0.000578124C44.8974 0.0117843 44.5528 0.091856 44.2336 0.236222C43.9143 0.380587 43.6267 0.58642 43.387 0.841967C43.1473 1.09751 42.9602 1.39777 42.8366 1.72559C42.7129 2.05342 42.655 2.40239 42.6662 2.75258C42.7117 4.04076 42.4474 5.32104 41.8956 6.48591C41.5099 5.44499 40.9598 4.47265 40.2663 3.60591C39.0874 2.2643 37.591 1.23965 35.914 0.625654C34.2369 0.0116595 32.4327 -0.172078 30.6662 0.0912449C28.7294 0.246714 26.8781 0.955768 25.3329 2.13391C23.5861 0.819761 21.4728 0.0833252 19.2876 0.0272448C16.5147 -0.241501 13.7484 0.599431 11.5942 2.36591C10.5005 3.3397 9.61734 4.52686 8.99917 5.85446C8.381 7.18205 8.04084 8.62203 7.99958 10.0859C7.9264 12.43 8.60888 14.7354 9.94625 16.6619C8.31931 18.0568 7.0564 19.8268 6.26657 21.8191C5.47675 23.8113 5.18376 25.9658 5.41291 28.0966C3.30399 29.2718 1.66049 31.133 0.755335 33.3712C-0.149824 35.6093 -0.262185 38.0898 0.436911 40.4006C2.2636 46.7566 5.66352 52.5494 10.3222 57.2433C14.7916 61.6012 20.7946 64.0281 27.0369 64.0006H36.9622C43.2038 64.0285 49.2062 61.6015 53.6743 57.2433C58.3347 52.5503 61.7356 46.7572 63.5623 40.4006C64.0383 38.7988 64.1315 37.1076 63.8341 35.4633C63.5367 33.8189 62.8572 32.2675 61.8503 30.9339ZM50.2689 13.3606C50.6816 13.3049 51.1016 13.3454 51.496 13.4789C51.8905 13.6123 52.2487 13.8352 52.5428 14.13C52.8368 14.4249 53.0588 14.7837 53.1912 15.1785C53.3236 15.5733 53.363 15.9934 53.3063 16.4059C52.747 19.9077 51.8403 23.3452 50.5996 26.6672H43.7702L47.2183 23.2192C47.704 22.7163 47.9728 22.0427 47.9667 21.3435C47.9606 20.6443 47.6802 19.9755 47.1858 19.4811C46.6913 18.9866 46.0225 18.7062 45.3233 18.7001C44.6241 18.694 43.9505 18.9628 43.4476 19.4486L36.2289 26.6672H32.0982C31.9035 25.2647 32.0372 23.8361 32.4889 22.4941C32.9405 21.152 33.6978 19.9333 34.7009 18.9339C35.8396 17.7846 40.2049 14.6672 50.2689 13.3606ZM13.3329 10.2646C13.3489 9.53044 13.5145 8.80727 13.8194 8.13924C14.1243 7.47122 14.5621 6.87236 15.1062 6.37925C16.2064 5.56603 17.5732 5.19838 18.9329 5.34991C19.5897 5.32291 20.2447 5.43511 20.855 5.67915C21.4654 5.92318 22.0172 6.29354 22.4742 6.76591C22.8341 7.16795 23.2747 7.48953 23.7673 7.70964C24.2599 7.92974 24.7934 8.04342 25.3329 8.04325C25.8712 8.04059 26.4029 7.92478 26.8936 7.70335C27.3842 7.48192 27.8228 7.15981 28.1809 6.75791C28.5786 6.3372 29.0559 5.99964 29.5851 5.7648C30.1142 5.52997 30.6848 5.40254 31.2636 5.38991C32.1451 5.2329 33.0517 5.29686 33.9024 5.57609C34.7531 5.85531 35.5213 6.34107 36.1382 6.98991C36.9478 8.0263 37.3703 9.31269 37.3329 10.6272C37.3329 10.8006 37.3329 11.1792 37.3329 11.1792C33.7929 12.454 30.7689 14.855 28.7249 18.0139C27.041 16.0205 24.8006 14.575 22.2903 13.8624C19.7801 13.1498 17.1143 13.2026 14.6342 14.0139C13.7493 12.9695 13.2853 11.6327 13.3329 10.2646ZM10.6662 26.6672C10.6662 24.5455 11.5091 22.5107 13.0094 21.0104C14.5097 19.5101 16.5445 18.6672 18.6662 18.6672C20.788 18.6672 22.8228 19.5101 24.3231 21.0104C25.8234 22.5107 26.6662 24.5455 26.6662 26.6672H10.6662ZM58.4423 38.9046C56.8489 44.3903 53.9165 49.3938 49.9089 53.4646C46.4438 56.8313 41.7935 58.7 36.9622 58.6673H27.0369C22.2043 58.6988 17.5528 56.8304 14.0849 53.4646C10.0771 49.3939 7.14469 44.3904 5.55158 38.9046C5.31251 38.0972 5.26615 37.245 5.4162 36.4165C5.56625 35.588 5.90855 34.8062 6.41558 34.1339C6.90755 33.4703 7.54851 32.9315 8.28683 32.561C9.02514 32.1904 9.84017 31.9985 10.6662 32.0006H53.3329C54.1617 31.996 54.9799 32.1867 55.7212 32.5574C56.4625 32.928 57.106 33.4681 57.5996 34.1339C58.103 34.808 58.4415 35.5906 58.5878 36.4191C58.7341 37.2476 58.6843 38.0988 58.4423 38.9046Z",
            svgFill: "#5FE26C",
            title: "Fast Delivery",
            text: "We deliver your order promptly to your door",
        },
        {
            svgPath: "M61.8503 30.9339C60.4334 29.0417 58.4201 27.6824 56.1356 27.0752C57.2491 23.8384 58.0719 20.5088 58.5942 17.1259C58.7649 15.8962 58.6479 14.6437 58.2522 13.4669C57.8566 12.2902 57.1932 11.2213 56.3143 10.3445C55.4355 9.46769 54.365 8.80684 53.1873 8.41398C52.0097 8.02113 50.7569 7.907 49.5276 8.08058C49.1916 8.12591 48.1943 8.27258 46.8316 8.53658C47.6754 6.66846 48.0751 4.63035 47.9996 2.58191C47.9884 2.23172 47.9083 1.88716 47.7639 1.56792C47.6196 1.24867 47.4137 0.960986 47.1582 0.721287C46.9026 0.481588 46.6024 0.29457 46.2746 0.17091C45.9467 0.047251 45.5978 -0.010628 45.2476 0.000578124C44.8974 0.0117843 44.5528 0.091856 44.2336 0.236222C43.9143 0.380587 43.6267 0.58642 43.387 0.841967C43.1473 1.09751 42.9602 1.39777 42.8366 1.72559C42.7129 2.05342 42.655 2.40239 42.6662 2.75258C42.7117 4.04076 42.4474 5.32104 41.8956 6.48591C41.5099 5.44499 40.9598 4.47265 40.2663 3.60591C39.0874 2.2643 37.591 1.23965 35.914 0.625654C34.2369 0.0116595 32.4327 -0.172078 30.6662 0.0912449C28.7294 0.246714 26.8781 0.955768 25.3329 2.13391C23.5861 0.819761 21.4728 0.0833252 19.2876 0.0272448C16.5147 -0.241501 13.7484 0.599431 11.5942 2.36591C10.5005 3.3397 9.61734 4.52686 8.99917 5.85446C8.381 7.18205 8.04084 8.62203 7.99958 10.0859C7.9264 12.43 8.60888 14.7354 9.94625 16.6619C8.31931 18.0568 7.0564 19.8268 6.26657 21.8191C5.47675 23.8113 5.18376 25.9658 5.41291 28.0966C3.30399 29.2718 1.66049 31.133 0.755335 33.3712C-0.149824 35.6093 -0.262185 38.0898 0.436911 40.4006C2.2636 46.7566 5.66352 52.5494 10.3222 57.2433C14.7916 61.6012 20.7946 64.0281 27.0369 64.0006H36.9622C43.2038 64.0285 49.2062 61.6015 53.6743 57.2433C58.3347 52.5503 61.7356 46.7572 63.5623 40.4006C64.0383 38.7988 64.1315 37.1076 63.8341 35.4633C63.5367 33.8189 62.8572 32.2675 61.8503 30.9339ZM50.2689 13.3606C50.6816 13.3049 51.1016 13.3454 51.496 13.4789C51.8905 13.6123 52.2487 13.8352 52.5428 14.13C52.8368 14.4249 53.0588 14.7837 53.1912 15.1785C53.3236 15.5733 53.363 15.9934 53.3063 16.4059C52.747 19.9077 51.8403 23.3452 50.5996 26.6672H43.7702L47.2183 23.2192C47.704 22.7163 47.9728 22.0427 47.9667 21.3435C47.9606 20.6443 47.6802 19.9755 47.1858 19.4811C46.6913 18.9866 46.0225 18.7062 45.3233 18.7001C44.6241 18.694 43.9505 18.9628 43.4476 19.4486L36.2289 26.6672H32.0982C31.9035 25.2647 32.0372 23.8361 32.4889 22.4941C32.9405 21.152 33.6978 19.9333 34.7009 18.9339C35.8396 17.7846 40.2049 14.6672 50.2689 13.3606ZM13.3329 10.2646C13.3489 9.53044 13.5145 8.80727 13.8194 8.13924C14.1243 7.47122 14.5621 6.87236 15.1062 6.37925C16.2064 5.56603 17.5732 5.19838 18.9329 5.34991C19.5897 5.32291 20.2447 5.43511 20.855 5.67915C21.4654 5.92318 22.0172 6.29354 22.4742 6.76591C22.8341 7.16795 23.2747 7.48953 23.7673 7.70964C24.2599 7.92974 24.7934 8.04342 25.3329 8.04325C25.8712 8.04059 26.4029 7.92478 26.8936 7.70335C27.3842 7.48192 27.8228 7.15981 28.1809 6.75791C28.5786 6.3372 29.0559 5.99964 29.5851 5.7648C30.1142 5.52997 30.6848 5.40254 31.2636 5.38991C32.1451 5.2329 33.0517 5.29686 33.9024 5.57609C34.7531 5.85531 35.5213 6.34107 36.1382 6.98991C36.9478 8.0263 37.3703 9.31269 37.3329 10.6272C37.3329 10.8006 37.3329 11.1792 37.3329 11.1792C33.7929 12.454 30.7689 14.855 28.7249 18.0139C27.041 16.0205 24.8006 14.575 22.2903 13.8624C19.7801 13.1498 17.1143 13.2026 14.6342 14.0139C13.7493 12.9695 13.2853 11.6327 13.3329 10.2646ZM10.6662 26.6672C10.6662 24.5455 11.5091 22.5107 13.0094 21.0104C14.5097 19.5101 16.5445 18.6672 18.6662 18.6672C20.788 18.6672 22.8228 19.5101 24.3231 21.0104C25.8234 22.5107 26.6662 24.5455 26.6662 26.6672H10.6662ZM58.4423 38.9046C56.8489 44.3903 53.9165 49.3938 49.9089 53.4646C46.4438 56.8313 41.7935 58.7 36.9622 58.6673H27.0369C22.2043 58.6988 17.5528 56.8304 14.0849 53.4646C10.0771 49.3939 7.14469 44.3904 5.55158 38.9046C5.31251 38.0972 5.26615 37.245 5.4162 36.4165C5.56625 35.588 5.90855 34.8062 6.41558 34.1339C6.90755 33.4703 7.54851 32.9315 8.28683 32.561C9.02514 32.1904 9.84017 31.9985 10.6662 32.0006H53.3329C54.1617 31.996 54.9799 32.1867 55.7212 32.5574C56.4625 32.928 57.106 33.4681 57.5996 34.1339C58.103 34.808 58.4415 35.5906 58.5878 36.4191C58.7341 37.2476 58.6843 38.0988 58.4423 38.9046Z",
            svgFill: "#5FE26C",
            title: "Catering",
            text: "Delight your guests with our flavors and presentation",
          },
        {
            svgPath: "M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 58C18.746 58 8 47.254 8 32C8 16.746 18.746 6 32 6C45.254 6 56 16.746 56 32C56 47.254 45.254 58 32 58Z", // Adjusted SVG path for a circle within 64x64 viewBox
            svgFill: "#5FE26C",
            title: "Online",
            text: "Explore menu & order with ease using our Online Ordering",
        },
    ];

        // Use a for loop to pair services into two-service-container
        for (let i = 0; i < services.length; i += 2) {
        const twoServiceContainer = document.createElement("div");
        twoServiceContainer.classList.add("two-service-container");

        // First service container (if exists)
        if (i < services.length) {
            const serviceContainer1 = document.createElement("div");
            serviceContainer1.classList.add("service-container");

            const serviceSvg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            serviceSvg1.setAttribute("width", "64");
            serviceSvg1.setAttribute("height", "64");
            serviceSvg1.setAttribute("viewBox", "0 0 64 64");
            serviceSvg1.setAttribute("fill", "none");
            const serviceG1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
            serviceG1.setAttribute("clip-path", "url(#clip0_1_195)");
            const servicePath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            servicePath1.setAttribute("d", services[i].svgPath);
            servicePath1.setAttribute("fill", services[i].svgFill);
            serviceG1.appendChild(servicePath1);
            const serviceDefs1 = document.createElementNS("http://www.w3.org/2000/svg", "defs");
            const serviceClipPath1 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            serviceClipPath1.setAttribute("id", "clip0_1_195");
            const serviceRect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            serviceRect1.setAttribute("width", "64");
            serviceRect1.setAttribute("height", "64");
            serviceRect1.setAttribute("fill", "white");
            serviceClipPath1.appendChild(serviceRect1);
            serviceDefs1.appendChild(serviceClipPath1);
            serviceSvg1.appendChild(serviceG1);
            serviceSvg1.appendChild(serviceDefs1);

            const serviceTitle1 = document.createElement("h4");
            serviceTitle1.textContent = services[i].title;

            const serviceDescription1 = document.createElement("p");
            serviceDescription1.textContent = services[i].text;

            serviceContainer1.appendChild(serviceSvg1);
            serviceContainer1.appendChild(serviceTitle1);
            serviceContainer1.appendChild(serviceDescription1);
            twoServiceContainer.appendChild(serviceContainer1);
        }

        // Second service container (if exists)
        if (i + 1 < services.length) {
            const serviceContainer2 = document.createElement("div");
            serviceContainer2.classList.add("service-container");

            const serviceSvg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            serviceSvg2.setAttribute("width", "64");
            serviceSvg2.setAttribute("height", "64");
            serviceSvg2.setAttribute("viewBox", "0 0 64 64");
            serviceSvg2.setAttribute("fill", "none");
            const serviceG2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
            serviceG2.setAttribute("clip-path", "url(#clip0_1_195)");
            const servicePath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            servicePath2.setAttribute("d", services[i + 1].svgPath);
            servicePath2.setAttribute("fill", services[i + 1].svgFill);
            serviceG2.appendChild(servicePath2);
            const serviceDefs2 = document.createElementNS("http://www.w3.org/2000/svg", "defs");
            const serviceClipPath2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            serviceClipPath2.setAttribute("id", "clip0_1_195");
            const serviceRect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            serviceRect2.setAttribute("width", "64");
            serviceRect2.setAttribute("height", "64");
            serviceRect2.setAttribute("fill", "white");
            serviceClipPath2.appendChild(serviceRect2);
            serviceDefs2.appendChild(serviceClipPath2);
            serviceSvg2.appendChild(serviceG2);
            serviceSvg2.appendChild(serviceDefs2);

            const serviceTitle2 = document.createElement("h4");
            serviceTitle2.textContent = services[i + 1].title;

            const serviceDescription2 = document.createElement("p");
            serviceDescription2.textContent = services[i + 1].text;

            serviceContainer2.appendChild(serviceSvg2);
            serviceContainer2.appendChild(serviceTitle2);
            serviceContainer2.appendChild(serviceDescription2);
            twoServiceContainer.appendChild(serviceContainer2);
        }

        osContainers.appendChild(twoServiceContainer);
        }

    ourServices.appendChild(ourServicesText);
    ourServices.appendChild(osContainers);
    main.appendChild(ourServices);

    // Footer Section 


    // Footer
    const footer = document.createElement("footer");

    const footerSection1 = document.createElement("div");
    footerSection1.className = "footer-section-1";

    const nestedFooterSections = [
        {
            content: [
                { type: "img", src: projectLogo, alt: "Logo" },
                { type: "p", text: "Savor the artistry where every dish is a culinary masterpiece" }
            ]
        },
        {
            content: [
                { type: "li", text: "Useful Links", class: "bold" },
                { type: "li", text: "About Us" },
                { type: "li", text: "Events" },
                { type: "li", text: "Blogs" },
                { type: "li", text: "FAQ" }
            ]
        },
        {
            content: [
                { type: "li", text: "Main Menu", class: "bold" },
                { type: "li", text: "Home" },
                { type: "li", text: "Offers" },
                { type: "li", text: "Menus" },
                { type: "li", text: "Reservations" }
            ]
        },
        {
            content: [
                { type: "li", text: "Contact", class: "bold" },
                { type: "li", text: "example@example.com" },
                { type: "li", text: "+64 958 248 966" },
                { type: "li", text: "Social Media" }
            ]
        }
    ];

    nestedFooterSections.forEach(section => {
        const nestedSection = document.createElement("div");
        nestedSection.className = "nested-footer-section";

        const ul = document.createElement("ul");
        section.content.forEach(item => {
            if (item.type === "img") {
                const img = document.createElement("img");
                img.src = item.src;
                img.alt = item.alt;
                nestedSection.appendChild(img);
            } else if (item.type === "p") {
                const p = document.createElement("p");
                p.textContent = item.text;
                nestedSection.appendChild(p);
            } else if (item.type === "li") {
                const li = document.createElement("li");
                if (item.class) li.className = item.class;
                li.textContent = item.text;
                ul.appendChild(li);
            }
        });
        if (section.content.some(item => item.type === "li")) nestedSection.appendChild(ul);
        footerSection1.appendChild(nestedSection);
    });

    const footerSection2 = document.createElement("div");
    footerSection2.classList.add("footer-section-2");

    const socialLinks = document.createElement("div");
    socialLinks.classList.add("social-links");
    const socialIcons = [
        facebookIcon,
        instaIcon,
        twitterLogo,
        youtubeLogo
    ];
    socialIcons.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = src.replace("./media_files/", "").replace("_logo.svg", "") + " logo";
        socialLinks.appendChild(img);
    });

    const copyright = document.createElement("p");
    copyright.textContent = "Copyright 2023 Dscode | All rights reserved";

    footerSection2.appendChild(socialLinks);
    footerSection2.appendChild(copyright);

    footer.appendChild(footerSection1);
    footer.appendChild(footerSection2);


    // Append all elements to contentDiv
    contentDiv.appendChild(heroDiv);
    contentDiv.appendChild(main);
    contentDiv.appendChild(footer);
}