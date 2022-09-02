const itemsEl = document.querySelectorAll('.item');
console.log('Number of categories :', itemsEl.length);
const titleEl = document.querySelectorAll('h2');
const categoriesEl = document.querySelectorAll('#categories ul');

for (let i = 0; i < itemsEl.length; i += 1) {
  console.log('Category :', titleEl[i].textContent);
  const elements = categoriesEl[i].querySelectorAll('li');
  console.log(elements.length);
}
