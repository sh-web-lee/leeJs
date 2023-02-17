const reg = /\b((https|http|ftp|rtsp|mms):\/\/)?([a-z0-9\.\/])+\b/g

let rep =   /^((https|http|ftp|rtsp|mms):\/\/)?([a-z0-9\.\/])+$/g
let domain = "aaa.com 666@baidu.com here you are.Wow~!"
domain.split(" ").map((v)=>{
    console.log(v.match(rep))
})

const regx = /([a-z|\d])\.]+/g

const urlmatch = (str, reg) => {
  return str.replace(reg, res=> {
    return `<a href="${res}" target="_blank">${res}</a>`
  })
}

const url = 'shweblee@ga.com'
// const url = 'loading.io'
console.log(urlmatch(url, reg))