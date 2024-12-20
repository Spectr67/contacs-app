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
    if (!query) return []

    const lowerCaseQuery = query.toLowerCase()

    return this.contacts.filter(
      contact =>
        contact.firstName.toLowerCase().includes(lowerCaseQuery) ||
        contact.secondName.toLowerCase().includes(lowerCaseQuery) ||
        contact.phone.toLowerCase().includes(lowerCaseQuery)
    )
  },

  addContactToRecentCallFromFavorite(name) {
    const recentCall = {
      nameOrPone: name,
      timestamp: Date.now(),
      duration: Math.floor(Math.random() * 30) + 1,
    }
    this.recentCalls.push(recentCall)
  },

  addContactToRecentCall(number) {
    const contact = this.contacts.find(c => c.phone === number)
    const recentCall = {
      nameOrPone: contact ? contact.firstName : number,
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

model.addContact({
  firstName: 'John',
  secondName: 'Rembo',
  phone: '1234567890',
})
model.addContact({
  firstName: 'John2',
  secondName: 'Rembo2',
  phone: '321',
})

// model.addContactToRecentCall("1234567890")
// model.addContactToRecentCall("0987654321")
console.log(model.recentCalls)
