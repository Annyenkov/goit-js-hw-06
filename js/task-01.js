const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories:${itemsEl.length}`);
itemsEl.forEach(item => {
  const titleCategory = item.querySelector('h2');
  const quantityItem = item.querySelectorAll('li');
  console.log(`Category: ${titleCategory.textContent} \nElements: ${quantityItem.length}`);

});