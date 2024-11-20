function renderModal1AddContact() {
  const elModal1 = document.querySelector('#modal1')
  const elInputFirstName = elModal1.querySelector('#firstName')
  const elInputSecondName = elModal1.querySelector('#secondName')
  const elInputPhone = elModal1.querySelector('#phone')
  const elButtonSave = document.querySelector('#appAddContact')
  const elh5 = document.querySelector('#modal1  h5')
  elInputFirstName.value = ''
  elInputSecondName.value = ''
  elInputPhone.value = ''
  elButtonSave.innerHTML = 'Добавить1'
  elButtonSave.onclick = onClickAddContact
  elh5.innerHTML = 'Добавить контакт'
}

function renderModal1EditContact(contact) {
  const elModal1 = document.querySelector('#modal1')
  const elInputFirstName = elModal1.querySelector('#firstName')
  const elInputSecondName = elModal1.querySelector('#secondName')
  const elInputPhone = elModal1.querySelector('#phone')
  const elButtonSave = document.querySelector('#appAddContact')
  const elButtonReset = document.querySelector('#reset')
  const elh5 = document.querySelector('#modal1  h5')

  const elInputHidden = document.querySelector('[type="hidden"]')
  elInputHidden.value = contact.id

  elInputFirstName.value = contact.firstName
  elInputSecondName.value = contact.secondName
  elInputPhone.value = contact.phone
  elButtonSave.innerHTML = 'Сохранить'
  elButtonSave.onclick = onClickEditContactConfirm
  elh5.innerHTML = 'Редактировать контакт'

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
