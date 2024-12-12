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
    return this.recentCalls.toReversed()
  },

  getFavourites() {
    return this.contacts.filter(contact => contact.isFavourite)
  },

  getContactsByQuery(query) {
    return query
      ? this.contacts.filter(
          contact =>
            contact.firstName.includes(query) ||
            contact.phone.includes(query) ||
            contact.secondName.includes(query)
        )
      : []
  },

  addContactToRecentCall(number) {
    const contact = this.contacts.find(c => c.number === number)
    const recentCall = {
      nameOrPone: contact ? contact.name : number,
      timestamp: Date.now(),
      duration: Math.floor(Math.random() * 30) + 1,
    }
    this.recentCalls.push(recentCall)
  },
  //  ??????????????????
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

// model.addContact({ name: "John", number: "1234567890" })
// model.addContactToRecentCall("1234567890")
// model.addContactToRecentCall("0987654321")
// console.log(model.recentCalls)
