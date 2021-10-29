const nickname = "nini"
const age = 24
const gender = "male"

const sayHi = (nickname: string, age: number, gender: string) => {
  console.log(`Hello ${nickname}, you are ${age}, you are a ${gender}`)
}

sayHi(nickname, age, gender)