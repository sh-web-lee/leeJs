// 16进制
const randomHexA = () => `#${ Math.random().toString(16).substring(2, 8) }`

const randomHexB = () => `#${ Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0') }`


// rgb
const randomHexC = () => `(${ Math.floor(Math.random() * 256) }, ${ Math.floor(Math.random() * 256) }, ${ Math.floor(Math.random() * 256) })`

console.log(randomHexC())