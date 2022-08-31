const wrapper = document.querySelector('.wrapper')

// const addWelcome = () => {
//   const div = document.createElement('div')
//   const h1 = document.createElement('h1')
//   h1.innerText = 'Hello'
//   div.append(h1)
//   wrapper.append(div)
// }

// const addWelcome = () => {
//   const div = `
//         <div class="hello">
//             <h1 class="title">Hello</h1>
//         </div>
//     `
//   wrapper.innerHTML = div
// }

// setTimeout(addWelcome, 2000)

// const friends = ['me', 'lynn', 'dal', 'mark']

// const list = `
//     <h1>People I love</h1>
//     <ul>
//         ${friends.map((friend) => `<li>${friend} </li>`).join(' ')}
//     </ul>
// `

// wrapper.innerHTML = list

// const styled = (aElement) => {
//   const el = document.createElement(aElement)
//   return (args) => {
//     const styles = args[0]
//     el.style = styles
//     return el
//   }
// }

// const title = styled('h1')`
//   background-color: red;
//   color: blue;
// `
// const subtitle = styled('span')`
//   color: green;
// `
// title.innerText = 'We just cloned'
// subtitle.innerText = 'Styled Components'
// document.body.append(title, subtitle)

// const isEmail = (email) => email.includes('@')
// console.log(isEmail('nico@nomad.com'))

// const CC_NUMBER = '6060'

// const displayName = `${'*'.repeat(10)}${CC_NUMBER}`
// console.log(displayName)

const name = 'Mr.Nicolas'
console.log(name.endsWith('Mr'))
