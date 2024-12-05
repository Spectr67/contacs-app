const model = {
  currentId: 0,
  contacts: [],
  recentCalls: [],

  getContactById(id) {
    const findedContact = this.contacts.find(c => c.id === id)
    return findedContact
  },

  getNextId() {
    return ++this.currentId
  },

  getContacts() {
    return this.contacts
  },

  getRecentCalls() {
    return this.recentCalls
  },

  getFavourites() {
    return this.contacts.filter(contact => contact.isFavourite)
  },

  getContactsByQuery(query) {
    return this.contacts.filter(contact => 
      contact.phone.includes(query) ||
      contact.firstName.includes(query) ||
      contact.secondName.includes(query)
    )
  },

  addContactToRecentCall(number) {
    const recentCall = {
      number: number,
      timestamp: Date.now(),
      duration: Math.floor(Math.random() * 30) + 1,
    }
    this.recentCalls.push(recentCall)
  },

  addContact(contact) {
    contact.id = this.getNextId()
    this.contacts.push(contact)
  },

  addFavouriteById(id) {
    this.updateContactById(id, { isFavourite: true })
  },

  updateContactById(id, updatedContact) {
    delete updatedContact.id
    const findedContact = this.contacts.find(contact => contact.id === id)
    findedContact && Object.assign(findedContact, updatedContact)
  },

  removeContactById(id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  },
  
  removeFavouriteById(id) {
    this.updateContactById(id, { isFavourite: false })
  },
}
