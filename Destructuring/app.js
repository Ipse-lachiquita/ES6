//object destructuring

const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfollow: false,
  },
  color: {
    theme: 'dark',
  },
}

//follow 변수에 destructuring 적용
//큰오브젝트에서 특정 변수나 그 안에 속한 작은 오브젝트에 접근할 수 있도록 해주는 거
const {
  notifications: { follow },
} = settings

console.log(follow)
/*
이런 걸 체크할 때 예전에는 이렇게 해야만 했다. 
단점
1.보기가 안좋다
2. followr값이 없던가 notifications 통채로 없던가
*/
