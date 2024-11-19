function generateContactContact(firstName, secondName, id) {
  const elLi = document.createElement('li')
  elLi.onclick = onClickContactDetail
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
  elLi.setAttribute('contact-id', id)

  elDivContainer.classList.add('container')
  elDivWrapper.classList.add('row', 'valign-wrapper')
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
  elIcon.textContent = name

  elCenterAlign.appendChild(elIcon)
  elCardPanel.appendChild(elCenterAlign)
  elCardPanel.appendChild(elName)
  elDivFavorite.appendChild(elCardPanel)

  return elDivFavorite
}

function generateRecentCall(recentCall) {
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
  elTitleBold.textContent = recentCall.number
  elDateIcon.textContent =
    `${recentCall.secondsAgo} секунд назад,` +
    ' ' +
    'длительность' +
    ' ' +
    recentCall.duration
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

// function generateSearch(contact) {
//   console.log(contact)
//   const elLi = document.createElement('li')
//   const elIcon = document.createElement('i')
//   const elTitle = document.createElement('span')
//   const elDescription = document.createElement('p')
//   const elLink = document.createElement('a')
//   const elPhoneIcon = document.createElement('i')

//   elLi.classList.add('collection-item', 'avatar')
//   elIcon.classList.add('material-icons', 'circle', 'green')
//   elTitle.classList.add('title')
//   elLink.classList.add('secondary-content')
//   elPhoneIcon.classList.add('material-icons')
//   elPhoneIcon.onclick = () => onClickSearchRecentCall(contact.phone)
//   elIcon.textContent = 'assessment'
//   elTitle.textContent = `${contact.firstName} ${contact.secondName}`
//   elDescription.textContent = `${contact.phone}`
//   elPhoneIcon.textContent = 'phone'

//   elLink.appendChild(elPhoneIcon)
//   elLi.appendChild(elIcon)
//   elLi.appendChild(elTitle)
//   elLi.appendChild(elDescription)
//   elLi.appendChild(elLink)

//   return elLi
// }
function h(tagName, text, attrs, listener, children) {
  const el = document.createElement(tagName)
  el.textContent = text
  el.onclick = listener
  Object.entries(attrs ?? {}).forEach(attr => {
    el.setAttribute(attr[0], attr[1])
  })
  children?.forEach(child => el.appendChild(child))

  return el
}

function generateSearch(contact) {
  return h('li', '', { class: 'collection-item avatar' }, null, [
    h('i', 'assessment', { class: 'material-icons circle green' }),
    h('span', `${contact.firstName} ${contact.secondName}`, { class: 'title' }),
    h('p', `${contact.phone}`),
    h('a', '', { class: 'secondary-content' }, null, [
      h('i', 'phone', { class: 'material-icons' }, () =>
        onClickSearchRecentCall(contact.phone)
      ),
    ]),
  ])
}
