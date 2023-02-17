const num = Math.floor(Math.random()*0xffffff).toString(16)
// const fNum = Math.ceil(num)
const generatorRandomHexColor = () => `#${ Math.floor(Math.random() * 0xffffff).toString(16) }`
console.log(generatorRandomHexColor())