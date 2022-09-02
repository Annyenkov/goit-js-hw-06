const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
}
const counterEl = document.querySelector('#counter');
const decrementBtn = counterEl.firstElementChild;
const incrementBtn = counterEl.lastElementChild;
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
})
incrementBtn.addEventListener('click', function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
})