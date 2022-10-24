const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const linkLists = ingredients.map((ingredient) => {
  const linkList = document.createElement(`li`);
  linkList.textContent = ingredient;
  linkList.classList.add(`ìtem`);
  return linkList;

});

ingredientsEl.append(...linkLists);