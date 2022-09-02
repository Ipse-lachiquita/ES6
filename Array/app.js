// const friends = ['nico', 'lynn', 'dal', 'mark']
// const friends = Array.of('nico', 'lynn', 'dal', 'mark')
// const buttons = document.querySelectorAll('button')
// const buttons = document.getElementsByClassName('btn')

// //Array.from(buttons) 를 사용하면 HTML 컬렉션 (array-like object) 이였던 buttons이 Array로 변경된다.
// const ar = Array.from(buttons)
// ar.forEach((button) => {
//   button.addEventListener('click', () => console.log('Click!!!'))
// })

const friends = [
  'nico@gmail.com',
  'lynn@naver.com',
  'dal@yahoo.com',
  'mark@hotmail.com',
  'flynn@gorea.com',
]

console.log(friends.includes('nico@gmail.com'))

// const check = () => friends.findIndex((friend) => friend.includes('@gorea.com'))

// let target = check()

// friends.fill('*'.repeat('5'), 1, 3)

// if (target !== -1) {
//   // console.log(target)
//   // const username = friends[target].split('@')[0]
//   // const email = 'korea.com'
//   // friends[target] = `${username}@${email}`
//   // target = check()
//   friends.fill('*'.repeat(5), target)
// }

// console.log(friends)
