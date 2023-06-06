const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close-menu");
const menuList = document.querySelector(".header__nav");
const menuListItems = [...document.querySelectorAll(".header__nav-list li")];

burgerMenu.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  closeMenu.classList.remove("hidden");
  burgerMenu.classList.add("hidden");
});

closeMenu.addEventListener("click", () => {
  menuList.classList.add("hidden");
  closeMenu.classList.add("hidden");
  burgerMenu.classList.remove("hidden");
});

menuListItems.forEach((element) => {
  element.addEventListener("click", () => {
    menuList.classList.add("hidden");
    closeMenu.classList.add("hidden");
    burgerMenu.classList.remove("hidden");
  });
});
