Nomad Coder Nico "ES6의 정석"

Variables

[const 와 let 의 차이점]
const: 변하지 않는다. 읽기 전용 (read-only).
let: var와 같다. 변경이 가능.
기본적으로 const를 사용해야한다는 마인드를 가지자.
만약 variable 값을 overwrite 해야하는 상황이 일어나면 let을 사용하자.

[Dead Zone]
예)
cosole.log(myName);
var myName = "nico";
-> log는 undefined가 찍힌다.
이유는 자바스크립트 내부에서 이렇게 처리해주기 때문
hoisting 하기 때문에 variable들이 미리 끌어올려진다는 거다.
hoisting이란 프로그램이 시작하면 그들이 제일 위로 가는걸 말한다.
뭐든지 top으로 올라간다는 말.
좋지않다 이건. 실제로 에러를 내야하는데 undefined를 하기때문에.

cosole.log(myName);
let myName = "nico";
-> log는 error가 찍힌다.
hoisting을 하지 않고 top으로 끌어올리지 않는다.
언어가 멍청한 짓을 안하게 막아준다는 의미 . error를 낸다는건.
이게 바로 let의 temporal dead zone이라고 한다.

[Block Scope]
let과 const의 장점은
scope: 버블, variable들이 접근가능한지 아닌지를 감지해준다.

에)
if(true) {
const hello = "hi";
let hi = "hello";
}
console.log(hello);
console.log(hi);
-> error : hello, hi 변수가 if문 안에 block 안에만 존재한다는 의미다. 그래서 에러 { } block scope

예)
if(true) {
var hello = "hi";
}
console.log(hello);
-> Console hi 라고 찍힘. 와냐하면 var를 쓰면 block scope 같은건 없다.
if나 while, for 구문 안에 var로 변수를 만들 수 있고 계속 그 변수를 사용할 수 있다. (접근이 가능하다는 말.)
var은 function scope를 가진다. function scope 란 var가 function 안에 접근할 수 있다는 뜻.

[Arrow Functions]
좀 더 보기 좋게 만든 function
arrow 는 기본적으로 "=>" 의미한다.
예)현재
const names = ['nico', 'lynn']
const hearts = names.map(item => item + "하트");
console.log(hearts);
예)이전
const names = ['nico', 'lynn']
function addHeart(item) {
return item + "하트";
}
const hearts = names.map(addHeart);
console.log(hearts);

['this' in Arrow Functions]
arrow function의 this는 window를 가르킨다.
this를 사용하고 싶으면 arrow function을 사용하면 안된다.
Arrow function을 사용하면 안되는 상황
예)
const nico = {
name: 'Nico',
age: 24,
addYear: () => {
this.age++
},
}

const button = document.querySelector('button')
const handleClick = () => {
console.log(this)
}
button.addEventListener('click', handleClick)

destructuring(비구조화)
비구조화는 object나 array, 그 외 요소들 안의 변수를 바깥으로 끄집어 내서 사용할 수 있도록 하는 것.
