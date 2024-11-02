function onClickDetailRecentCall(e) {
  const elLi = e.currentTarget
  const id = elLi.getAttribute('contact-id')
  handleGetRecentCalls(id)
}

// function eTargetGetID(e) ??
function onClickAddContact(e) {
  e.preventDefault()
  const contact = parseForm(e.target.closest('form'))
  handleAddContact(contact)
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
  console.log(id, 'fsfgs')
  handleRemoveFavorite(id)
}
