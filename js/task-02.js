const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')
const items = [];

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  // console.log(li);
  li.textContent = ingredient;
  li.classList.add('item')
  items.push(li);
})
  ul.append(...items);
// console.log(ul);
