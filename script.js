function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah terkirim 🌿");
    e.target.reset();
  });
  
  // Leaflet Map
  const map = L.map("map").setView([3.3268, 117.5785], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "© OpenStreetMap",
  }).addTo(map);
  L.marker([3.3268, 117.5785])
    .addTo(map)
    .bindPopup("<b>Kawasan Konservasi Mangrove Bekantan</b><br>Tarakan, Kalimantan Utara.")
    .openPopup();
  
  // Animasi Scroll (AOS)
  AOS.init({ duration: 1000, once: true })

// ===== Navbar Responsive Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Klik tombol hamburger untuk buka/tutup
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Klik di luar menu untuk menutup
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("show");
  }
});