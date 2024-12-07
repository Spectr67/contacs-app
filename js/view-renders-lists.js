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
    const elDivFavorite = generateFavouriteCol(favorite)
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

function renderSearch(searchedContacts) {
  const modal3 = document.querySelector('#modal3')
  const elUlCollection = modal3.querySelector('.collection')
  elUlCollection.innerHTML = ''
  searchedContacts.forEach(contact => {
    const elLi = generateSearch(contact)
    elUlCollection.appendChild(elLi)
  })
}
