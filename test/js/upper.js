const toUpperCase = (str) => {
  return str.replace(/\b\S+\b/g, word => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  })
}

console.log(toUpperCase('hello, word, function titleCase1(str)'))