const elDivButtons = document.querySelector('#detail-icons')
const elButtonAddContact = document.querySelector('#appAddContact')
const elButtonAddFavorite = elDivButtons.querySelector('span:nth-child(1)')
const elButtonRemoveFavorite = elDivButtons.querySelector('span:nth-child(2)')
const elButtonRemove = elDivButtons.querySelector('span:last-child')
const elLiRecentCall = document.querySelector('#app-recent-calls>.recent-call')
const elIntupSearch = document.querySelector('#search')
const elButtonEdit = elDivButtons.querySelector('span.modal-close:nth-child(3)')

elButtonAddContact.onclick = onClickAddContact
elButtonRemove.onclick = onClickRemoveContact
elButtonAddFavorite.onclick = onClickAddFavorite
elButtonRemoveFavorite.onclick = onClickRemoveFavorite
elLiRecentCall.onclick = onClickDetailRecentCall
elIntupSearch.oninput = onInputSearch
elButtonEdit.onclick = onClickUpdateContact
