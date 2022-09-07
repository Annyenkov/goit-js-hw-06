function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  divToCreate: document.querySelector('#boxes'), 
  divBtn: document.querySelector('#controls')
}
const btnCreate = refs.divBtn.children[1];
const btnDestroy = refs.divBtn.children[2];
const input = refs.divBtn.children[0];
const divElements = document.querySelectorAll('#boxes div');
function onDivCreateEL(value) {
  let newElements = [];
  for (let i = 0; i < value; i += 1) {
    const newEl = document.createElement('div')
    newEl.style.width = 30 + (i * 10) + 'px';
    newEl.style.height = 30 + (i * 10) + 'px';
    newEl.style.backgroundColor = getRandomHexColor();
    console.dir(newEl)
    newElements.push(newEl);
  }
  return newElements
}

function onDivAddEl(event) {
  const divEl = onDivCreateEL(input.value);
  refs.divToCreate.append(...divEl);
}
function destroyBoxes(event) {
  refs.divToCreate.innerHTML = '';
}

btnCreate.addEventListener('click', onDivAddEl)
btnDestroy.addEventListener('click', destroyBoxes)

console.log(refs.divToCreate)