function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputRef = document.querySelector("input");
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyeRef = document.querySelector("[data-destroy]");


const refs = {
  divRef: document.querySelector("#controls"),
  inputRef: document.querySelector("input"),
  btnCreateRef: document.querySelector("button[data-create]"),
  btnDestroyeRef: document.querySelector("button[data-destroy]"),
  boxRef: document.querySelector("#boxes"),
};

refs.btnCreateRef.addEventListener("click", createBoxes);

let size = 30;

function createBoxes() {
  let boxArr = [];
  let amount = refs.inputRef.value;

  for (let i = 0; i < amount; i += 1) {
    let divEl = `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
    boxArr.push(divEl);
  }

  refs.boxRef.insertAdjacentHTML("beforeend", boxArr.join(""));
}

refs.btnDestroyeRef.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.boxRef.innerHTML = "";
  size = 0;
}