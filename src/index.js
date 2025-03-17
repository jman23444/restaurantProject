// src/index.js
import "./styles.css";
import "./reset.css";
import { createHeroSection } from "./hero";
import { createCustomerFavoritesSection } from "./customerFavorites";
import { createSpecialDishesSection } from "./specialDishes";
import { createTestimonialsSection } from "./testimonials";
import { createOurServicesSection } from "./ourServices";
import { createFooterSection } from "./footer";

const sections = {
    home: [createHeroSection, createCustomerFavoritesSection, createSpecialDishesSection, createTestimonialsSection, createOurServicesSection, createFooterSection],
    menu: [createSpecialDishesSection, createFooterSection],
    services: [createOurServicesSection, createFooterSection],
    offers: [createTestimonialsSection, createFooterSection]
};

function loadSections(sectionKey) {
    const contentDiv = document.getElementById("content");
    if (!contentDiv) {
        console.error("Content div not found");
        return;
    }
    contentDiv.innerHTML = ""; // Clear existing content

    const main = document.createElement('div');
    sections[sectionKey].forEach(sectionCreator => {
        const section = sectionCreator();
            main.appendChild(section);
    });
    contentDiv.appendChild(main);
}

// Initial load
loadSections("home");

// Navigation event listeners
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll("#nav-menu-items p");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const sectionKey = item.textContent.toLowerCase();
            if (sections[sectionKey]) {
                loadSections(sectionKey);
            }
        });
    });
});

console.log("JavaScript is running!");