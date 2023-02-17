/**
emjio1是长度为2个字节的表情，例如❤🎗等
emjio2是一般的表情，例如💔🧡等
**/

let emoji1 = /[^\x00-\xff]/g
let emoji2 = /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/g
var regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;

const emoFn = (reg, str) => {
  return str.replace(reg, res => {
    if (reg.test(res)) {
      return `<b class="wd-cus-emoji">${res}</b>`
    }
  })
}

console.log(emoFn(regStr, 'a在干嘛d🤣https://www.baidu.com'))
