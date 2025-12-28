const navItems = document.querySelector(".nav__items");
const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");

btnOpen.addEventListener("click", () => {
  navItems.classList.add("nav__items--active");
});

btnClose.addEventListener("click", () => {
  navItems.classList.remove("nav__items--active");
});

document.getElementById("year").textContent = new Date().getFullYear();
