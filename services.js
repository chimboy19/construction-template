const mobileNav = document.querySelector("nav");
const navLink = document.querySelector("nav ul");
const openMenu = function () {
  if (mobileNav.style.height === "fit-content") {
    mobileNav.style.height = "";
  } else {
    mobileNav.style.height = "fit-content";
  }

  if (navLink.style.top === "0px") {
    navLink.style.top = "";
  } else {
    navLink.style.top = "0px";
  }
};

const menuBtn = document
  .querySelector(".menu-btn")
  .addEventListener("click", openMenu);
