"use strict";

const mainComponent = document.getElementById("mainComponent");
const thanksComponent = document.getElementById("thanksYou");
const button = document.getElementById("button");
const rates = document.querySelectorAll(
  ".compoment__rates--numberBox-numbers > button"
);

button.addEventListener("click", () => {
  thanksComponent.classList.remove("hidden");
  mainComponent.classList.add("hidden");
});
