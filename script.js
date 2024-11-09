document.addEventListener('DOMContentLoaded', function () {
  const elemsA = document.querySelectorAll('a')
  const elModal3 = document.querySelector('#modal3')

  elemsA.forEach(elA => elA.setAttribute('draggable', false))

  M.AutoInit()

  document.querySelector('#search ~ i').addEventListener('click', function () {
    M.Modal.getInstance(elModal3).close()
    document.querySelector('#search').value = ''
  })

  document.querySelector('#search').addEventListener('click', function () {
    M.Modal.prototype._handleFocus = () => {}
    M.Modal.getInstance(elModal3).open()
    this.focus()
  })
  // const elModal1 = document.querySelector('#modal1')
  // document
  //   .querySelector('span.modal-close:nth-child(3)')
  //   .addEventListener('click', function () {
  //     M.Modal.prototype._handleFocus = () => {}
  //     M.Modal.getInstance(elModal1).open()
  //   })
})
