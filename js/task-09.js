const button = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', (event) => {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  body.style.backgroundColor = color;
});
 