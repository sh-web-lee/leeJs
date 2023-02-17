const _index = Math.floor(Math.random() * 13)
const indexArr = []

for (let i = 0; i < 4; i ++) {
  fy()
}
// 随机生成四个不相同的随机数
function fy () {
  const index = Math.floor(Math.random() * 13)
  if (indexArr.indexOf(index) === -1) {
    indexArr.push(index)
  } else {
    return fy()
  }
}
console.log(indexArr);