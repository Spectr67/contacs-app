const model = {
  currentId: 0,
  contacts: [],
  recentCalls: [],

  getNextId() {
    return ++this.currentId
  },

  getContacts() {
    return this.contacts
  },

  getCallList() {
    return this.recentCalls
  },

  getFavourites() {
    return this.contacts.filter(contact => contact.isFavourite)
  },

  getContactsByQuery(query) {
    return this.contacts.filter(contact => {
      return (
        contact.moblieNumber.includes(query) ||
        contact.firstName.includes(query) ||
        contact.secondName.includes(query)
      )
    })
  },

  addContact(contact) {
    contact.id = this.getNextId()
    this.contacts.push(contact)
  },

  removeContactById(id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  },

  updateContactById(id, updatedContact) {
    const findedContact = this.contacts.find(contact => contact.id === id)
    findedContact && Object.assign(findedContact, updatedContact)
  },

  addFavouriteById(id) {
    this.updateContactById(id, { isFavourite: true })
  },

  removeFavouriteById(id) {
    this.updateContactById(id, { isFavourite: false })
  },
}

const newContact = {
  firstName: 'John',
  secondName: 'Doe',
  moblieNumber: '123456789',
  isFavourite: false,
}

const newRecentCall = {
  time: 0,
  date: 0,
  duration: 0,
}

// model.addContact(newContact)
// console.log(model.getContacts())

// // model.removeContactById(1)
// console.log(model.getContacts())

// const updatedContact = {
//   firstName: 'Jane',
//   secondName: 'Doe',
//   mobelieNumber: '987654321',
//   isFavourite: true,
// }

// model.updateContactById(1, updatedContact)
// console.log(model.getContacts())

// const foundContacts = model.getContactsByQuery('987654321')
// console.log(foundContacts)

// // model.addFavouriteById(1)
// console.log(model.getFavourites())

// // model.removeFavouriteById(1)
// console.log(model.getFavourites())
// console.log(model.getContacts())
