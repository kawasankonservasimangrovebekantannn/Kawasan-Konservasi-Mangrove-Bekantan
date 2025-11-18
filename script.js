/* ============================
   HAMBURGER MENU ANIMATION
============================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});


/* ============================
   POPUP GALERI
============================= */

const popupBg = document.createElement("div");
popupBg.className = "popup-bg";

const popupContent = document.createElement("div");
popupContent.className = "popup-content";

popupBg.appendChild(popupContent);
document.body.appendChild(popupBg);

// Close popup function
function closePopup() {
    popupBg.style.display = "none";
}

// Click outside closes popup
popupBg.addEventListener("click", (e) => {
    if (e.target === popupBg) closePopup();
});

// Add click events to gallery items
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.dataset.img;
            const title = item.dataset.title;
            const desc = item.dataset.desc;

            popupContent.innerHTML = `
                <img src="${imgSrc}" alt="${title}">
                <h2>${title}</h2>
                <p>${desc}</p>
                <div class="close-popup" onclick="closePopup()">Tutup</div>
            `;

            popupBg.style.display = "flex";
        });
    });
});