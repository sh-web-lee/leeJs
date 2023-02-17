const arr1 = [1, [2, 3], 4, 5, 6]
const res1 = arr1.flat(1)
// console.log('res1:', res1)

const arr2 = [1, [2, 3], [4, [5, 6]]]
const res2 = arr2.flat(2)
// console.log('res2:', res2);

const flatArray = (arr) => {
  let res = []
  arr.forEach(v => {
    if (typeof(v) !== 'object') {
      res.push(v)
      return res
    } else {
      return flatArray(v)
    }
  })
  return res
} 
const a = flatArray(arr2)
console.log('a:', a);