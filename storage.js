// function save(entitiesName, entities) {
//   const stringifiedEntities = JSON.stringify(entities)
//   localStorage.setItem(entitiesName, stringifiedEntities)
// }

// function restore(entitiesName) {
//   const stringifiedEntities = localStorage.getItem(entitiesName)
//   const parsedEntities = JSON.parse(stringifiedEntities)
//   return parsedEntities
// }

// const storage = {
//   contacts: {
//     save: contacts => save('contacts', contacts),
//     restore: () => restore('contacts'),
//   },
//   resentCalls: {
//     save: resentCalls => save('resentCalls', resentCalls),
//     restore: () => restore('resentCalls'),
//   },
//   blockedPhones: {
//     save: blockedPhones => save('blockedPhones', blockedPhones),
//     restore: () => restore('blockedPhones'),
//   },
// }
// document.addEventListener('DOMContentLoaded', () => {
//   storage.contacts.restore()
//   storage.resentCalls.restore()
//   storage.blockedPhones.restore()
// })
