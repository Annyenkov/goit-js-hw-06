const refs = {
  input: document.querySelector('input'),

}
const inputLength = refs.input.attributes[2].value;
refs.input.addEventListener('blur', onInputChange)
function onInputChange(event) {
  const inputValue = event.currentTarget.value;
  inputValue.length > inputLength
    ? refs.input.classList = 'invalid'
    : refs.input.classList = 'valid'  
}