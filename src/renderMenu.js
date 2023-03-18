import {
  renderRibeye,
  renderStirFry,
  renderChicken,
  renderPork,
} from "./renderFood.js";

import setUniqueId from "./clicked.js";

export default function renderMenu() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <div class="main-left dish-list">
      <button id="ribeye-button">Precision-Cut Ribeye</button>
      <button id="stirfry-button">Vibrant Veggie Stir Fry</button>
      <button id="chicken-button">Ultra-Crisp Fried Chicken</button>
      <button id="pork-button">Pixel-Perfect Pork Belly</button>
    </div>
    <div class="main-right dish-info">
    </div>`;

  renderRibeye();

  const ribeye = document.getElementById("ribeye-button");
  ribeye.addEventListener("click", () => {
    renderRibeye();
    setUniqueId(ribeye, "food-button-clicked");
  });
  const stirFry = document.getElementById("stirfry-button");
  stirFry.addEventListener("click", () => {
    renderStirFry();
    setUniqueId(stirFry, "food-button-clicked");
  });
  const chicken = document.getElementById("chicken-button");
  chicken.addEventListener("click", () => {
    renderChicken();
    setUniqueId(chicken, "food-button-clicked");
  });
  const pork = document.getElementById("pork-button");
  pork.addEventListener("click", () => {
    renderPork();
    setUniqueId(pork, "food-button-clicked");
  });
}
