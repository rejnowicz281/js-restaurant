import "./main.css";
import renderHome from "./renderHome.js";
import renderMenu from "./renderMenu";
import renderContact from "./renderContact";
import setUniqueId from "./clicked.js";

renderHome();

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");

homeButton.addEventListener("click", () => {
  renderHome();
  setUniqueId(homeButton, "header-button-clicked");
});

menuButton.addEventListener("click", () => {
  renderMenu();
  setUniqueId(menuButton, "header-button-clicked");
});

contactButton.addEventListener("click", () => {
  renderContact();
  setUniqueId(contactButton, "header-button-clicked");
});
