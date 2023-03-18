export default function setUniqueId(button, id) {
  const clicked = document.getElementById(id);
  if (clicked) {
    clicked.removeAttribute("id", id);
  }
  button.setAttribute("id", id);
}
