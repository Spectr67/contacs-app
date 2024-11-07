function renderModal1EditContact(contact, id) {
  console.log(contact)
  const elModal1 = document.querySelector('#modal1')
  const elInputFirstName = elModal1.querySelector('#firstName')
  const elInputSecondName = elModal1.querySelector('#secondName')
  const elInputPhone = elModal1.querySelector('#phone')
  const elButtonSave = document.querySelector('#appAddContact')
  const elButtonReset = document.querySelector('#reset')

  elInputFirstName.value = contact.firstName
  elInputSecondName.value = contact.secondName
  elInputPhone.value = contact.phone
  elButtonSave.innerHTML = 'Save'

  elButtonSave.onclick = e => renderModalBack(e, id)
  elButtonReset.onclick = e => renderModalBack(e, id)
}

function renderModalBack(e, id) {
  e.preventDefault()
  const newContact = parseForm(e.target.closest('form'))
  handleUpdateContactEnd(id, newContact)
  const elModal1 = document.querySelector('#modal1')
  const elInputFirstName = elModal1.querySelector('#firstName')
  const elInputSecondName = elModal1.querySelector('#secondName')
  const elInputPhone = elModal1.querySelector('#phone')
  const elButtonSave = document.querySelector('#appAddContact')
  elInputFirstName.value = ''
  elInputSecondName.value = ''
  elInputPhone.value = ''
  elButtonSave.innerHTML = 'Добавить'
}

function renderSearch(searchedContacts) {
  const modal3 = document.querySelector('#modal3')
  const elUlCollection = modal3.querySelector('.collection')
  elUlCollection.innerHTML = ''
  searchedContacts.forEach(contact => {
    const elLi = generateSearch(contact)
    elUlCollection.appendChild(elLi)
  })
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

function renderContacts(contacts) {
  const elUlContacts = document.querySelector('#app-contacts')
  elUlContacts.innerHTML = ''
  contacts.forEach(contact => {
    const elLi = generateContactContact(
      contact.firstName,
      contact.secondName,
      contact.id
    )
    elUlContacts.appendChild(elLi)
  })
}

function renderFavourite(favourites) {
  const elDivFavorites = document.querySelector('#app-favorites')
  elDivFavorites.innerHTML = ''
  favourites.forEach(favorite => {
    const elDivFavorite = generateFavouriteCol(favorite.name)
    elDivFavorites.appendChild(elDivFavorite)
  })
}

function renderRecentCalls(recentCalls) {
  const elUlRecentCalls = document.querySelector('#app-recent-calls')
  elUlRecentCalls.innerHTML = ''
  recentCalls.forEach(recentCall => {
    const elLi = generateRecentCall(recentCall)
    elUlRecentCalls.appendChild(elLi)
  })
}
