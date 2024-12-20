const elDivButtons = document.querySelector('#detail-icons')
const elButtonAddContact = document.querySelector('#appAddContact')
const elButtonAddFavorite = elDivButtons.querySelector('span:nth-child(1)')
const elButtonRemoveFavorite = elDivButtons.querySelector('span:nth-child(2)')
const elButtonRemove = elDivButtons.querySelector('span:last-child')
const elLiRecentCall = document.querySelector('#app-recent-calls>.recent-call')
const elIntupSearch = document.querySelector('#search')
const elButtonEdit = elDivButtons.querySelector('span:nth-child(3)')
const elFab = document.querySelector('#elFab')

elButtonRemove.onclick = onClickRemoveContact
elButtonAddFavorite.onclick = onClickAddFavorite
elButtonRemoveFavorite.onclick = onClickRemoveFavorite
elIntupSearch.oninput = onInputSearch
elButtonEdit.onclick = onClickUpdateContact
elFab.onclick = onClickOpenModalAddContact
