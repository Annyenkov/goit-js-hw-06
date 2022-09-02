function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanText = document.querySelector('.color')
const bodyEl = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color')
console.log(btnChangeColor)
btnChangeColor.addEventListener('click', onBodyChangeColor)
function onBodyChangeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor();
}
