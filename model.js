const model = {
  currentId: 0,
  contacts: [],
  recentCalls: [],

  getContactId(contact) {
    return contact.id
  },

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

  getCallList() {
    return this.recentCalls
  },
  addContactCall(contact) {
    this.recentCalls.push(contact)
  },
  getFavourites() {
    return this.contacts.filter(contact => contact.isFavourite)
  },

  getContactsByQuery(query) {
    return this.contacts.filter(contact => {
      return (
        contact.phone.includes(query) ||
        contact.firstName.includes(query) ||
        contact.secondName.includes(query)
      )
    })
  },

  addContact(contact) {
    let newContact = contact
    newContact.id = this.getNextId()
    this.contacts.push(newContact)
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
  phone: '123456789',
  isFavourite: false,
  id: 11,
}

model.addContact(newContact)
model.getContacts()
model.getContactById(11)

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
