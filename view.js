function parseForm(elForm) {
  const entries = Array.from(elForm.querySelectorAll('input'))
  .map(elInput => [
    elInput.name,
    elInput === 'checkbox'
      ? elInput.checked
      : elInput.type === 'number'
      ? +elInput.value
      : elInput.value,
  ])
  return Object.fromEntries(entries)
}

function onClickAddContact(e) {
  e.preventDefault()
  const contact = parseForm(e.target.closest('form'))

  handleAddContact(contact)
}

const elButtonAddContact = document.querySelector('#appAddContact')

elButtonAddContact.onclick = onClickAddContact

const elDivButtons = document.querySelector(
  '.col.s6.right-align.teal-text.text-lighten-5'
)

const removeButton = elDivButtons.lastElementChild
removeButton.onclick = onCliclRemoveContact

function onCliclRemoveContact(e) {
  const el = e.target.closest('.container')
  console.log(el)
}

function renderContactDetail(contact) {}

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

  recentCalls.forEach(call => {
    const elLi = generateRecentCall(call.name, call.secondsAgo)
    elUlRecentCalls.appendChild(elLi)
  })
}

function renderSearch(items) {
  const elUlCollection = document.querySelector('.collection')
  elUlCollection.innerHTML = ''

  items.forEach(item => {
    const elLi = generateSearch(item.name)
    elUlCollection.appendChild(elLi)
  })
}

function generateContactContact(firstName, secondName, id) {
  const elLi = document.createElement('li')
  const elDivContainer = document.createElement('div')
  const elDivWrapper = document.createElement('div')
  const elDivCol1 = document.createElement('div')
  const elDivCol2 = document.createElement('div')
  const elDivCol3 = document.createElement('div')
  const elSpan1 = document.createElement('span')
  const elSpan2 = document.createElement('span')
  const elSpan3 = document.createElement('span')
  const elB = document.createElement('b')

  elLi.classList.add('contact')
  elLi.classList.add('modal-trigger')
  elLi.classList.add('collection-item')
  elLi.classList.add('transparent')
  elLi.classList.add('waves-effect')

  elLi.setAttribute('href', '#modal2')
  elLi.setAttribute('id', 'a7ca5816')

  elDivContainer.classList.add('container')
  elDivWrapper.classList.add('row', 'valign-wrapper')
  elDivContainer.setAttribute('id', id)
  elDivCol1.classList.add('col', 's4')
  elDivCol2.classList.add('col', 's4')
  elDivCol3.classList.add('col', 's4')

  elSpan1.classList.add(
    'teal',
    'darken-1',
    'teal-text',
    'text-lighten-4',
    'pic',
    'circle',
    'center-align',
    'material-symbols-outlined'
  )
  elSpan1.textContent = 'person'

  elB.textContent = firstName + ' ' + secondName
  elSpan3.classList.add('badge', 'new')
  elSpan3.textContent = 'phone'

  elLi.appendChild(elDivContainer)
  elDivContainer.appendChild(elDivWrapper)
  elDivWrapper.appendChild(elDivCol1)
  elDivWrapper.appendChild(elDivCol2)
  elDivWrapper.appendChild(elDivCol3)
  elDivCol1.appendChild(elSpan1)
  elDivCol2.appendChild(elSpan2)
  elDivCol3.appendChild(elSpan3)
  elSpan2.appendChild(elB)

  return elLi
}

function generateFavouriteCol(name) {
  const elDivFavorite = document.createElement('div')
  const elCardPanel = document.createElement('div')
  const elCenterAlign = document.createElement('div')
  const elIcon = document.createElement('span')
  const elName = document.createElement('span')

  elDivFavorite.classList.add('favorite', 'col', 's6', 'm4', 'l3', 'xl2')
  elCardPanel.classList.add(
    'card-panel',
    'teal',
    'lighten-2',
    'waves-effect',
    'waves-light'
  )
  elCenterAlign.classList.add('center-align')
  elIcon.classList.add(
    'transparent',
    'teal-text',
    'text-lighten-5',
    'pic',
    'center-align',
    'material-symbols-outlined'
  )
  elName.classList.add('white-text')
  elName.textContent = name
  elIcon.textContent = 'preson'

  elCenterAlign.appendChild(elIcon)
  elCardPanel.appendChild(elCenterAlign)
  elCardPanel.appendChild(elName)
  elDivFavorite.appendChild(elCardPanel)

  return elDivFavorite
}

function generateRecentCall(name, secondsAgo) {
  const elLi = document.createElement('li')
  const elIcon = document.createElement('i')
  const elTitle = document.createElement('span')
  const elTitleBold = document.createElement('b')
  const elDate = document.createElement('p')
  const elDateIcon = document.createElement('i')
  const elLink = document.createElement('a')
  const elPhoneIcon = document.createElement('i')

  elLi.classList.add(
    'recent-call',
    'waves-effect',
    'collection-item',
    'avatar',
    'transparent',
    'z-depth-1'
  )
  elIcon.classList.add('material-icons', 'circle', 'teal', 'darken-3')
  elTitle.classList.add('title')
  elLink.classList.add('secondary-content')
  elPhoneIcon.classList.add('material-icons')

  elIcon.textContent = 'person'
  elTitleBold.textContent = name
  elDateIcon.textContent = `${secondsAgo} секунд назад`
  elPhoneIcon.textContent = 'phone'

  elTitle.appendChild(elTitleBold)
  elDate.appendChild(elDateIcon)
  elLink.appendChild(elPhoneIcon)
  elLi.appendChild(elIcon)
  elLi.appendChild(elTitle)
  elLi.appendChild(elDate)
  elLi.appendChild(elLink)

  return elLi
}

function generateSearch(name) {
  const elLi = document.createElement('li')
  const elIcon = document.createElement('i')
  const elTitle = document.createElement('span')
  const elDescription = document.createElement('p')
  const elLink = document.createElement('a')
  const elPhoneIcon = document.createElement('i')

  elLi.classList.add('collection-item', 'avatar')
  elIcon.classList.add('material-icons', 'circle', 'green')
  elTitle.classList.add('title')
  elLink.classList.add('secondary-content')
  elPhoneIcon.classList.add('material-icons')

  elIcon.textContent = 'assessment'
  elTitle.textContent = name
  elDescription.textContent = ' '
  elPhoneIcon.textContent = ' '

  elLink.appendChild(elPhoneIcon)
  elLi.appendChild(elIcon)
  elLi.appendChild(elTitle)
  elLi.appendChild(elDescription)
  elLi.appendChild(elLink)

  return elLi
}
