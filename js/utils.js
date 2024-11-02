function parseForm(elForm) {
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
