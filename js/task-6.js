const wrap = document.querySelector("#controls");
const input = wrap.querySelector("input");
const createButton = wrap.querySelector("[data-create]");
const destroyButton = wrap.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

 const getRandomHexColor = () => {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
 }

const createBoxes = (amount) => {
  const list = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    list.push(div);
  }
  boxes.append(...list);
};

const destroyBoxes = () => {
  const boxList = [...boxes.querySelectorAll("div")];
  if (boxList.length) {
    boxList.forEach(box => box.remove());
  }
};

let number;
input.addEventListener("change", e => {
  number = e.target.value;
});

createButton.addEventListener("click", () => {
  destroyBoxes();

  if (number >= 1 && number <= 100) {
    createBoxes(number);
    input.value = '';
  }
});

destroyButton.addEventListener("click", destroyBoxes);

