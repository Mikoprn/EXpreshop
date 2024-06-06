// Navigation
const menuBtn = document.querySelector(".nav__menu-btn");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);

// click close outside
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// Themes
const body = document.querySelector("body");
themeButton = document.querySelector(".theme__button");

let theme = localStorage.getItem("theme");
if (theme && theme === "dark") {
  body.classList.add("dark-mode");
  themeButton.classList.add("active");
}

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (!body.classList.contains("dark-mode")) {
    return localStorage.setItem("theme", "light");
  }
  localStorage.setItem("theme", "dark");
});

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle("active");
});

// Cart modal
cartButton = document.querySelector(".cart-button");
modalCart = document.querySelector(".modal-cart");
cartClose = document.querySelector(".cart-close-button");

cartButton.addEventListener("click", () => {
  modalCart.classList.add("show");
});

cartClose.addEventListener("click", () => {
  modalCart.classList.remove("show");
});

// User form login & signup
const userButton = document.querySelector(".user-form-button");
const modalUser = document.querySelector(".modal-user");
const formWrapper = document.querySelector(".form-wrapper");
const formCloseButton = document.querySelector(".form-close-button");
const signupLink = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");

userButton.addEventListener("click", () => {
  modalUser.classList.add("show");
});

formCloseButton.addEventListener("click", () => {
  modalUser.classList.remove("show");
});

signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  formWrapper.classList.add("active");
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  formWrapper.classList.remove("active");
});

//Tabs active option
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll(".tab__content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// Footer contact
const contactButton = document.querySelector(".contact-button");
const footerForm = document.querySelector(".footer__form");
const contactClose = document.querySelector(".contact-close");

contactButton.addEventListener("click", (e) => {
  e.preventDefault();
  footerForm.classList.add("active");
});

contactClose.addEventListener("click", (e) => {
  e.preventDefault();
  footerForm.classList.remove("active");
});

// Footer year
const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
