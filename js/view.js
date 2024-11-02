const elDivButtons = document.querySelector('#detail-icons')
const elButtonAddContact = document.querySelector('#appAddContact')
const elButtonAddFavorite = elDivButtons.querySelector('span:nth-child(1)')
const elButtonRemoveFavorite = elDivButtons.querySelector('span:nth-child(2)')
const elButtonRemove = elDivButtons.querySelector('span:last-child')

elButtonAddContact.onclick = onClickAddContact
elButtonRemove.onclick = onClickRemoveContact
elButtonAddFavorite.onclick = onClickAddFavorite
elButtonRemoveFavorite.onclick = onClickRemoveFavorite

const elLiRecentCall = document.querySelector('#app-recent-calls>.recent-call')
elLiRecentCall.onclick = onClickDetailRecentCall

const elButtonEdit = elDivButtons.querySelector('span.modal-close:nth-child(3)')

// elEditButton.onclick = onClickUpdateContact

// function onClickUpdateContact(e) {
//   const elDivId = e.target.closest('.wrap-content.contact-detail')
//   const id = elDivId.getAttribute('detail-id')
//   const elForm = e.target.closest('form')
//   // const newContact = parseForm(e.target.closest('form'))
//   console.log(newContact)
//   console.log(newContact,id)
// }
