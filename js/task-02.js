const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients');
const makeNewLi = ingredients => {
  return ingredients.map(ingredient => {
  const newLi = document.createElement('li');
  newLi.textContent = ingredient;
  newLi.classList.add('item');
  return newLi; 
  })
}
const elements = makeNewLi(ingredients);
ingredientsEl.append(...elements);