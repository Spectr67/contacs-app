function handleUpdateContact(id) {
  const contact = model.getContactById(+id)
  renderModal1EditContact(contact)
}
function handleConfirmUpdateContact(id, newContact) {
  console.log(id, newContact)
  model.updateContactById(+id, newContact)
  renderContacts(model.getContacts())
  renderContactDetail(model.getContactById(+id))
}
function handleSearchContact(searchParam) {
  const searchedContacts = model.getContactsByQuery(searchParam)
  renderSearch(searchedContacts)
}

function handleGetRecentCalls(number) {
  model.addContactToRecentCall(number)
  renderRecentCalls(model.getRecentCalls())
}

function handleAddContact(contact) {
  model.addContact(contact)
  renderContacts(model.getContacts())
}

function handleRenderContactDetail(id) {
  console.log(id)
  const idNumber = +id
  console.log(model.contacts)
  const contact = model.getContactById(idNumber)
  console.log(contact)
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
