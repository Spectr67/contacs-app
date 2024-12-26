const contacts = [
  {
    firstName: 'John',
    secondName: 'Rembo',
    phone: '1234567890',
  },
  {
    firstName: 'Corben',
    secondName: 'Dallas',
    phone: '321',
  },
]

function findContactsByQuery(query) {
  return findContactsByQueries(queryToArray(query), contacts)
}

function queryToArray(query) {
  return query
    .trim()
    .split(' ')
    .filter(q => q !== '')
}

function findContactsByQueries(queries, contacts) {
  let findedContacts = []
  queries.forEach(query => {
    const result = helper(query, contacts)
    findedContacts.push(result)
  })
  return removeClones(findedContacts.flat())
}

function helper(query, contacts) {
  return contacts.filter(
    contact =>
      compareWords(query, contact.firstName) ||
      compareWords(query, contact.secondName) ||
      compareWords(query, contact.phone)
  )
}

function compareWords(a, b) {
  return b.toLowerCase().includes(a.toLowerCase())
}

const removeClones = arr => Array.from(new Set(arr))

// function sum(a, b) {
//   return a + b
// }

// let sss = removeClones([1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4])

// let arr = [[1], [2, [3, [4]]]]
// let arr2 = arr.flat(3)
// arr2

// sss

// let obj = { x: 42 }
// let set = new Set([obj, {}, obj, obj, obj])
// let array = Array.from(set)
// array

// const xx = Object.assign([], { 0: 'a', 1: 'b', 2: 'c' })
// xx

// let array10 = Array.from({ length: 10 })

// array10

// let nodesList = document.querySelectorAll('button')
// let nodesArray = Array.from(nodesList)
// let textContents = nodesArray.map(node => node.textContent)
