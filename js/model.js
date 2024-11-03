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
    return this.contacts.filter(contact => {
      return (
        contact.phone.includes(query) ||
        contact.firstName.includes(query) ||
        contact.secondName.includes(query)
      )
    })
  },

  addContactToRecentCall(number) {
    let contact = {
      number: number,
      secondsAgo: Math.floor(Date.now() / 1000),
      duration: Math.floor(Math.random() * 30) + 1,
    }

    this.recentCalls.push(contact)
  },
  addContact(contact) {
    let newContact = contact
    newContact.id = this.getNextId()
    this.contacts.push(newContact)
  },
  addFavouriteById(id) {
    this.updateContactById(id, { isFavourite: true })
  },

  updateContactById(id, updatedContact) {
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

model.addContactToRecentCall('4353535')
model.getRecentCalls()
const result = model.getRecentCalls()
result

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
  phone: '+3333',
  timestamp: 0,
  duration: 0,
}

// model.addRecentCall(newRecentCall)

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
