// src/testimonials.js
import testimonialImage from "./media_files/tesimonials_image.svg";
import customerImage from "./media_files/Customers.png";

export function createTestimonialsSection() {
    const testimonials = document.createElement("section");
    testimonials.id = "testimonials";

    const testimonialImg = document.createElement("img");
    testimonialImg.src = testimonialImage;
    testimonialImg.alt = "Chef";

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

    return testimonials;
}