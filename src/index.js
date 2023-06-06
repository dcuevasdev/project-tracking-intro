const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close-menu");
const menuList = document.querySelector(".header__nav");
const menuListItems = [...document.querySelectorAll(".header__nav-list li")];

function openMenu() {
  menuList.classList.toggle("hidden");
  closeMenu.classList.remove("hidden");
  burgerMenu.classList.add("hidden");
}
function hiddenMenu() {
  menuList.classList.add("hidden");
  closeMenu.classList.add("hidden");
  burgerMenu.classList.remove("hidden");
}

burgerMenu.addEventListener("click", openMenu);
closeMenu.addEventListener("click", hiddenMenu);
menuListItems.forEach((element) => {
  element.addEventListener("click", () => {
    hiddenMenu();
  });
});
