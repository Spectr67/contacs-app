const model = {
  currentId: 0,
  contacts: [],
  recentCalls: [],
  blackList: [],

  getNextId() {
    return ++this.currentId
  },

  getContacts() {
    return this.contacts
  },

  getContactById(id) {
    return this.contacts.find(c => c.id === id)
  },

  getRecentCalls() {
    return this.recentCalls.toReversed()
  },

  getFavourites() {
    return this.contacts.filter(contact => contact.isFavourite)
  },

  findContactsByQuery(query) {
    if (query === '') return []
    return this.contacts.filter(
      contact =>
        compareWords(query, contact.firstName) ||
        compareWords(query, contact.secondName) ||
        compareWords(query, contact.phone)
    )
  },

  addRecentCallByPhone(phone) {
    const findedContact = this.contacts.find(c => c.phone === phone)
    const recentCall = {
      isFromContacts: !!findedContact,
      phone: phone,
      timestamp: Date.now(),
      duration: Math.floor(Math.random() * 30) + 1,
      contact: findedContact,
    }
    this.recentCalls.push(recentCall)
    console.log(findedContact)
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
  firstName: 'Corben',
  secondName: 'Dallas',
  phone: '321',
})

// // model.addContactToRecentCall("1234567890")
// // model.addContactToRecentCall("0987654321")
// console.log(model.recentCalls)

// model.addRecentCallByPhone('321')
// console.log(model.recentCalls[0].phone)
// console.log(model.recentCalls[0].contact)

// function compareWords(a, b) {
//   return b.toLowerCase().includes(a.toLowerCase())
// }

// let fined = model.findContactsByQuery('O2')

// console.log(fined.length)

// console.log(compareWords('foo', 'foo'))
// console.log(compareWords('foo', 'Foo'))
// console.log(compareWords('Foo', 'Foo'))
// console.log(compareWords('foo', 'bar'))
