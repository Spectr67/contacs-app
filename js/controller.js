function handleUpdateContact(id) {
  const contact = model.getContactById(+id)
  renderModal1EditContact(contact)
}
function handleConfirmUpdateContact(id, newContact) {
  model.updateContactById(+id, newContact)
  renderContacts(model.getContacts())
  renderContactDetail(model.getContactById(+id))
  renderFavourite(model.getFavourites())
}
function handleSearchContact(searchParam) {
  const searchedContacts = model.getContactsByQuery(searchParam)
  renderSearch(searchedContacts)
}

function handleGetRecentCalls(number) {
  model.addContactToRecentCall(number)
  renderRecentCalls(model.getRecentCalls())
}
function handleRecentCallFromFavorite(name) {
  model.addContactToRecentCallFromFavorite(name)
  renderRecentCalls(model.getRecentCalls())
}

function handleAddContact(contact) {
  if (!contact || Object.keys(contact).length === 0) {
    return
  }
  model.addContact(contact)
  renderFavoriteStatus()
  storage.contacts.save(model.getContacts())
  renderContacts(model.getContacts())
}

function handleRenderContactDetail(id) {
  const idNumber = +id
  const contact = model.getContactById(idNumber)
  renderContactDetail(contact)
}

function handleRemoveContact(id) {
  const idNumber = +id
  if (id) {
    model.removeContactById(idNumber)
    renderContacts(model.getContacts())
    renderFavourite(model.getFavourites())
  }
}

function handleAddFavorite(id) {
  const idNumber = +id
  model.addFavouriteById(idNumber)
  renderFavourite(model.getFavourites())
  let isFav = true
  renderFavoriteStatus(isFav)
}

function handleRemoveFavorite(id) {
  const idNumber = +id
  model.removeFavouriteById(idNumber)
  renderFavourite(model.getFavourites())
  renderFavoriteStatus()
}
renderContacts(model.getContacts())
