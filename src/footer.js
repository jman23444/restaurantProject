// src/footer.js
import projectLogo from "./media_files/projectLogo.svg";
import facebookIcon from "./media_files/facebook_logo.svg";
import instaIcon from "./media_files/instagram_logo.svg";
import twitterLogo from "./media_files/twitter_logo.svg";
import youtubeLogo from "./media_files/youtube_logo.svg";

export function createFooterSection() {
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
                { type: "li", text: "64 958 248 966" },
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

    return footer;
}