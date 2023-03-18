export default function renderHome() {
  const main = document.querySelector("main");

  main.innerHTML = `
  <div class="main-left restaurant-description">
    <p>
        <b>High Definition Food</b> is a stylish and modern restaurant that serves high-quality and
        visually
        appealing cuisine. The interior of the restaurant is designed to impress, with sleek lines and a
        modern aesthetic that sets the tone for what's to come. Every dish is crafted with the highest
        quality ingredients and prepared with care to create a culinary experience that is both
        delicious
        and visually stunning.
    </p>
  </div>
  <div class="main-right main-logo">
    <h1 class="main-logo-top">HDF.</h1>
    <div class="main-logo-bottom">The Definitive Food Experience</div>
  </div>`;
}
