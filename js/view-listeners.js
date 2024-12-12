function onClickFavouriteRecentCall() {
  // console.log(e)
  // const elDivFavorite = e.target.closest('.favorite')
  // const elSpanName = elDivFavorite.querySelector('span')
  // const favorite = [favorite.phone, (favorite.name = elSpanName)]
  // handleGetRecentCalls(favorite.phone, favorite.firstName)
}

function onClickOpenModalAddContact() {
  renderModal1AddContact()
}

function onClickAddContact(e) {
  e.preventDefault()
  const contact = parseForm(e.target.closest('form'))
  handleAddContact(contact)
}

function onClickEditContactConfirm(e) {
  e.preventDefault()
  const editedContact = parseForm(e.target.closest('form'))
  handleConfirmUpdateContact(editedContact.id, editedContact)
}

function onClickUpdateContact(e) {
  const elDivId = e.target.closest('.wrap-content.contact-detail')
  const id = elDivId.getAttribute('detail-id')
  handleUpdateContact(id)
}

function onInputSearch() {
  const searchParam = elIntupSearch.value
  handleSearchContact(searchParam)
}

function onClickDetailRecentCall(e) {
  const elLi = e.currentTarget
  const phoneNumber = elLi.querySelector('span.title').textContent
  const name = document.querySelector('#modal2 h5').textContent
  console.log(name)
  handleGetRecentCalls(phoneNumber, name)
}

function onClickSearchRecentCall(phoneNumber, name) {
  handleGetRecentCalls(phoneNumber, name)
}

function onClickContactDetail(e) {
  const elLi = e.currentTarget
  const id = elLi.getAttribute('contact-id')
  handleRenderContactDetail(id)
}

function onClickRemoveContact(e) {
  const elDivId = e.target.closest('.wrap-content.contact-detail')
  const id = elDivId.getAttribute('detail-id')
  handleRemoveContact(id)
}

function onClickAddFavorite(e) {
  const elDivId = e.target.closest('.wrap-content.contact-detail')
  const id = elDivId.getAttribute('detail-id')
  handleAddFavorite(id)
}

function onClickRemoveFavorite(e) {
  const elDivId = e.target.closest('.wrap-content.contact-detail')
  const id = elDivId.getAttribute('detail-id')
  handleRemoveFavorite(id)
}
