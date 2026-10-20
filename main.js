const header = document.querySelector(".site-header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
}, { passive: true });

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  menuBtn.textContent = open ? "Close" : "Menu";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "Menu";
  });
});
