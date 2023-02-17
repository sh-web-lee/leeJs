/**
 * 
 * @param {Array} arr 
 * @returns 
 */
const removeDuplicateObj = (arr) => {
  let obj = {}
  arr = arr.reduce((newArr, next) => {
    obj[next.id] ? '' : (obj[next.id] = true && newArr.push(next))
    return newArr
  }, [])
  return arr
}

const arr = [
  { id: 1, name: 'lee' },
  { id: 2, name: 'Jesu' },
  { id: 3, name: 'Moe' },
  { id: 4, name: 'Lkas' },
  { id: 1, name: 'Askua' },
]

console.log(removeDuplicateObj(arr))