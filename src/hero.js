// src/hero.js
import projectHeroImage from "./media_files/projectHeroImage.svg";

export function createHeroSection() {
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

    return heroDiv;
}