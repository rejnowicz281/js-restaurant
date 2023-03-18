import Ribeye from "./ribeye.jpg";
import StirFry from "./stirfry.jpg";
import Chicken from "./chicken.jpg";
import Pork from "./pork.jpg";

export function renderRibeye() {
  const dishInfo = document.querySelector(".dish-info");
  dishInfo.innerHTML = `
  <img src="${Ribeye}" width="500" height="500">
  <p> A succulent and perfectly marbled ribeye steak, expertly trimmed and seared to a perfect
      medium-rare, delivering maximum flavor and tenderness in every bite.</p>`;
}

export function renderStirFry() {
  const dishInfo = document.querySelector(".dish-info");
  dishInfo.innerHTML = `
    <img src="${StirFry}" width="500" height="500">
    <p> A colorful and healthy medley of fresh vegetables, including bell peppers, broccoli, carrots, onions, and snap peas, stir-fried to perfection with a savory blend of garlic, ginger,
    and soy sauce.</p>`;
}

export function renderChicken() {
  const dishInfo = document.querySelector(".dish-info");
  dishInfo.innerHTML = `
    <img src="${Chicken}" width="500" height="500">
    <p> Juicy, tender, and flavorful chicken coated in a crispy and crunchy batter, fried to golden perfection, and served hot and fresh with a side of dipping sauce.</p>`;
}

export function renderPork() {
  const dishInfo = document.querySelector(".dish-info");
  dishInfo.innerHTML = `
    <img src="${Pork}" width="500" height="500">
    <p> A mouth-watering and indulgent dish, featuring perfectly cooked and seasoned slices of succulent pork belly, 
    with crispy skin and tender meat, served with a side of tangy and sweet sauce.</p>`;
}
