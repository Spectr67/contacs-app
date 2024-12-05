function parseForm(elForm) {
  const inputs = Array.from(elForm.querySelectorAll('.input-field > input'))
  // const mapInputs = inputs.map(input => input.value)
  for (const input of inputs) {
    if (input.value === '') {
      return null
    }
  }

  const entries = Array.from(elForm.querySelectorAll('input')).map(elInput => [
    elInput.name,
    elInput === 'checkbox'
      ? elInput.checked
      : elInput.type === 'number'
      ? +elInput.value
      : elInput.value,
  ])
  return Object.fromEntries(entries)
}

const obj = {
  a: [],
  b: [],
}
function a(value) {
  if (value === '') return
}
//  console.log(a(42,22))
// let v = a(value,index)
// console.log(v)
// const a = b => 1 + b
// a(42)
// console.log(a(42))
// const c = a(32)
// c
// const a = b  =>  {return 1 + b }
// console.log(a(42))
