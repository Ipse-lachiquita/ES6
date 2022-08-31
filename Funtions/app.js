// const emails = [
//   'nco@no.com',
//   'naver@google.com',
//   'lynn@gmail.com',
//   'nico@nomad.com',
//   'nico@gmail.com',
// ]

// const gmail = emails.filter((potato) => potato.includes('@gmail'))
// const noGmail = emails.filter((potato) => !potato.includes('@gmail'))

// const cleaned = emails.map((email, index) => ({
//   username: email.split('@')[0],
//   index,
// }))

// /*
// emails.forEach((email) => {
//   cleaned.push(email.
// })
// */

// console.log(gmail)
// console.log(noGmail)
// console.log('=========')
// console.table(cleaned)

// function sayHi(aName = 'Anon') {
//   return 'Hello ' + aName
// }

// const sayHi = (aName = 'Anon') => 'Hello ' + aName
// console.log(sayHi())

// const add = (a, b) => a + b
// console.log(`Hello How are you ${add(6, 6)}`)

const wrapper = document.querySelector('.wrapper')

const addWelcome = () => {
  const div = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.innerText = 'Hello'
  div.append(h1)
  wrapper.append(div)
}

setTimeout(addWelcome, 5000)
