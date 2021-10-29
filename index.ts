const nickname = "nini"
const age = 24
const gender = "male"

const sayHi = (nickname: string, age: number, gender: string): string => {
  return `Hello ${nickname}, you are ${age}, you are a ${gender}`
}

console.log(sayHi(nickname, age, gender))