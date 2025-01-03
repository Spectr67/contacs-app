function renderModal3() {
  const modal3 = document.querySelector('#modal3')
  const elUl = modal3.querySelector('ul')
  const liElements = elUl.querySelectorAll('li')
  liElements.forEach(li => {
    elUl.removeChild(li)
  })
}

function renderModal1AddContact() {
  const elModal1 = document.querySelector('#modal1')
  const elInputFirstName = elModal1.querySelector('#firstName')
  const elInputSecondName = elModal1.querySelector('#secondName')
  const elInputPhone = elModal1.querySelector('#phone')
  const elButtonSave = document.querySelector('#appAddContact')
  const elH5 = document.querySelector('#modal1 h5')
  elInputFirstName.value = ''
  elInputSecondName.value = ''
  elInputPhone.value = ''
  elButtonSave.innerHTML = 'Добавить'
  elButtonSave.onclick = onClickAddContact
  elH5.innerHTML = 'Добавить контакт'
}

function renderModal1EditContact(contact) {
  const elModal1 = document.querySelector('#modal1')
  const elInputFirstName = elModal1.querySelector('#firstName')
  const elInputSecondName = elModal1.querySelector('#secondName')
  const elInputPhone = elModal1.querySelector('#phone')
  const elButtonSave = document.querySelector('#appAddContact')
  const elH5 = document.querySelector('#modal1 h5')

  const elInputHidden = document.querySelector('[type="hidden"]')
  elInputHidden.value = contact.id

  elInputFirstName.value = contact.firstName
  elInputSecondName.value = contact.secondName
  elInputPhone.value = contact.phone
  elButtonSave.innerHTML = 'Сохранить'
  elButtonSave.onclick = onClickEditContactConfirm
  elH5.innerHTML = 'Редактировать контакт'

  setTimeout(() => elInputFirstName.focus(), 100)
  setTimeout(() => elInputSecondName.focus(), 100)
  setTimeout(() => elInputPhone.focus(), 100)
}

function renderFavoriteStatus(isFav) {
  const elDivButtons = document.querySelector(
    '.col.s6.right-align.teal-text.text-lighten-5'
  )
  const elAddButton = elDivButtons.querySelector(
    'span.modal-close:nth-child(1)'
  )
  const elRemoveButton = elDivButtons.querySelector(
    'span.modal-close:nth-child(2)'
  )
  if (isFav) {
    elAddButton.style.display = 'none'
    elRemoveButton.style.display = 'inline'
  } else {
    elAddButton.style.display = 'inline'
    elRemoveButton.style.display = 'none'
  }
}

function renderContactDetail(contact) {
  renderFavoriteStatus(contact.isFavourite)

  const elDivModal2 = document.querySelector('#modal2')
  const elh5 = elDivModal2.querySelector('h5')
  const elB = elDivModal2.querySelector('b')
  const elDivContactDetail = elDivModal2.querySelector(
    '.wrap-content.contact-detail'
  )
  elDivContactDetail.setAttribute('detail-id', contact.id)
  elh5.innerHTML = contact.firstName + ' ' + contact.secondName
  elB.innerHTML = contact.phone
}
