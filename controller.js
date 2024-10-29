function handleAddContact(contact) {
  parseForm(contact)
  model.addContact(contact)
  renderContacts(model.getContacts())
  console.log(contmodel.getContacts())
}

function handleRemoveContact(id) {
  model.removeContactById(id)
  renderContacts(model.getContacts())
  renderFavourite(model.getFavourites())
}

function handleUpdateContact(contactId, newContact) {
  let id = +contactId;
  model.updateContactById(id, newContact)
  renderContacts(model.getContacts())
}

function handleSearchContact(query) {
  const results = model.getContactsByQuery(query)
  renderSearch(results)
}

function handleAddFavorite(id) {
  model.addFavouriteById(id)
  renderFavourite(model.getFavourites())
}

function handleRemoveFavorite(id) {
  model.removeFavouriteById(id)
  renderFavourite(model.getFavourites())
}

function handleGetContacts() {
  renderContacts(model.getContacts())
}

function handleGetRecentCalls() {
  renderRecentCalls(model.getCallList())
}

function handleGetFavorites() {
  renderFavourite(model.getFavourites())
}