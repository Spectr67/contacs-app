function onclickAddNumberToBlock() {
  const elBlockDiv = document.querySelector('.block-div')
  const number = elBlockDiv.querySelector('span > span').textContent
  handleAddNumberToBlock(number)
  const elbody = document.querySelector('body')
  const elDivBlock = document.querySelector('.block-div')
  elbody.removeChild(elDivBlock)
}

function onClickOpenBlockDiv(number) {
  const elDivBlackModal = generateBlackListModal(number)
  const elBody = document.querySelector('body')
  elBody.appendChild(elDivBlackModal)
}

function onClickCloseBlockDiv(e) {
  const elbody = document.querySelector('body')
  const elDivBlock = e.target.closest('.block-div')
  elbody.removeChild(elDivBlock)
}

function onClickFavouriteRecentCall(e) {
  const elDivFavorite = e.target.closest('.favorite')
  const number = elDivFavorite.querySelector('.favorite-hidden').textContent
  handleGetRecentCalls(number)
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
  handleGetRecentCalls(phoneNumber)
}

function onClickSearchRecentCall(phoneNumber) {
  handleGetRecentCalls(phoneNumber)
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
