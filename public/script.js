"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const mask = document.getElementById("mask");
  const closeMenu = document.getElementById("closeMenu");

  hamburgerMenu.addEventListener("click", function () {
    if (mobileMenu.classList.contains("translate-x-full")) {
      mobileMenu.classList.remove("translate-x-full");
      mobileMenu.classList.add("translate-x-0");
      mask.classList.add("opacity-50");
      mask.classList.remove("pointer-events-none");
    } else {
      mobileMenu.classList.add("translate-x-full");
      mobileMenu.classList.remove("translate-x-0");
      mask.classList.remove("opacity-50");
      mask.classList.add("pointer-events-none");
    }
  });

  mask.addEventListener("click", function () {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    mask.classList.remove("opacity-50");
    mask.classList.add("pointer-events-none");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    mask.classList.remove("opacity-50");
    mask.classList.add("pointer-events-none");
  });

  const featuresBtnMobile = document.getElementById("featuresBtnMobile");
  const companyBtnMobile = document.getElementById("companyBtnMobile");
  const dropdownMenuMobile = document.getElementById("dropdown-menu-mobile");
  const dropdownMenu2Mobile = document.getElementById("dropdown-menu2-mobile");

  featuresBtnMobile.addEventListener("click", function () {
    dropdownMenuMobile.classList.toggle("hidden");
  });

  companyBtnMobile.addEventListener("click", function () {
    dropdownMenu2Mobile.classList.toggle("hidden");
  });
  const btn = document.getElementById("featuresBtn");
  const btn2 = document.getElementById("companyBtn");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownMenu2 = document.getElementById("dropdown-menu2");

  btn.addEventListener("click", function () {
    dropdownMenu.classList.toggle("hidden");
  });
  btn2.addEventListener("click", function () {
    dropdownMenu2.classList.toggle("hidden");
  });
});
