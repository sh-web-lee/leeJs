const reg = /(((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+)|(\[&@(\d{4})\])/gi
// const str = 'a[&@32121]1'
function transHyperName () {
  return function (chatItemInfo) {
    const hyperlinksReg = /(((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+)|(\[&@(\d{4})\])/gi
    const resContent = ''
    if (hyperlinksReg.test(chatItemInfo)) {
      resContent = chatItemInfo.replace(hyperlinksReg, (res) => {
        if (/(\[&@(\d{4})\])/.test(res)) {
          return res
        }
      })
    }
  }
}

var str = '[&@1234]dddhttp://www.baidu.com'
var res = str.replace(reg, 'aaa')
// console.log(res)

var resc = transHyperName(str)
// console.log(resc)
var res = '[&@1234]'
console.log(/\[&@(\d{4})\]/.test(res))