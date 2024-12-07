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
