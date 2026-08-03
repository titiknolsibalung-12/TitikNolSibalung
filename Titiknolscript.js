const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));

// TESTIMONI
const reviews = [
  { name: "Andi", text: "Kopi terenak yang pernah saya coba. Tempatnya juga nyaman!" },
  { name: "Siska", text: "Interiornya mewah dan pelayanannya ramah." },
  { name: "Rizky", text: "Harga sesuai kualitas. Recommended!" }
];

const reviewEl = document.getElementById("review");
const nameEl = document.getElementById("name");

if (reviewEl && nameEl) {
  let i = 0;

  setInterval(() => {
    i = (i + 1) % reviews.length;

    reviewEl.textContent = '"' + reviews[i].text + '"';
    nameEl.textContent = '— ' + reviews[i].name;
  }, 4000);
}

// BACK TO TOP
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display =
      document.documentElement.scrollTop > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// HAMBURGER MENU
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  }, 1000);
});

// FORM RESERVASI (AMAN)
const form = document.querySelector(".reservation-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Reservasi berhasil dikirim!");
    form.reset();
  });
}

// LIGHTBOX GALERI
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");

if (lightbox && lightImg && images.length) {
  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

// DARK / LIGHT MODE
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeBtn.textContent =
      document.body.classList.contains("light") ? "☀️" : "🌙";
  });
}