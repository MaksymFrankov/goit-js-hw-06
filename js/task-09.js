function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector('.color');
const btnColor = document.querySelector('.change-color');

btnColor.addEventListener('click', () => { 
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
});