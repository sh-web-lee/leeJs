// var pattern=/\[&(.*?)\*((\w|-)+)\]/gi;
// // var regex = new RegExp(pattern, 'g');
// var matchstr='[&1][&*627cc780-43d5-e231-0d02-39f54898733a][&&*c008cd36-f10a-759c-0bc6-38cf9350a699]';
// var arr=matchstr.match(pattern);
// console.log(arr);

// var arr = ['[&*62d7fe18-ff4c-b466-e9df-a2595d25f7b9]', '[&*62d7fe18-ff4c-b466-e9df-a2595d25fb79]']
// var msg = '[&*62d7fe18-ff4c-b466-e9df-a2595d25f7b9][&*62d7fe18-ff4c-b466-e9df-a2595d25fb79][&1]'

// const removeRepeatItem = (arr, msg) => {
//   return msg.replace(/\[&\*((\w|-)+)\]/gi, '')
// }

// console.log(removeRepeatItem(arr, msg))

// const path = require('path')

// const name = path.basename('https://img.willdesk.com/test/chat/4875/2022/05/10/1652167745408_Willdesk公测邀请.docx')

// console.log(name)

const getImgAlt = (content) => {
  let res = null
  var regex = /(.*?)<img.*?alt="(.*?)".*?>/ig

  res = content.replace(regex, '$1$2').replace(/amp;/gi, '')
  return res
}

// console.log(getImgAlt())

const getLinkAlt = (content) => {
  let res = null
  var regex = /(.*?)<a.*?name="(.*?)".*?>/ig

  res = content.replace(regex, '$1$2').replace(/amp;/gi, '')
  console.log(res)
  const index = res.search(']')
  const result = res.substring(0, index + 1)
  return result
}

// console.log(getLinkAlt())

const getLibsAlit = () => {
  var str = '<img src="blob:http://localhost:8080/bd75cda8-1abb-4c62-bb44-a292f39a5a4d" alt="[&amp;*ba691d65-181b-21ac-e6d6-2d477898edba]" title="screenPic.png" style="max-height: 100px; max-width: 100px; vertical-align: bottom; border-radius: 10px; margin: 0px 2px;"><a download="Willdesk公测邀请.docx" name="[&amp;&amp;*b664f3c0-205a-8d6d-33be-62727122b733]">Willdesk公测邀请.docx</a><img src="blob:http://localhost:8080/bd75cda8-1abb-4c62-bb44-a292f39a5a4d" alt="[&amp;*ba691d65-181b-21ac-e6d6-2d477898asd]" title="screenPic.png" style="max-height: 100px; max-width: 100px; vertical-align: bottom; border-radius: 10px; margin: 0px 2px;">'
  const regx = /\[&(.*?)\*((\w|-)+)\]/gi
  return str.match(regx)
  
}

const transformRight = (content) => {
  const regx = /\[&(.*?)\*((\w|-)+)\]/gi

  // 匹配到图片和附件的转换资源名
  const matchAlt = content.match(regx)
  var targetAlt = matchAlt.map(item => {
    return item.replace(/amp;/gi, '')
  })
  return targetAlt.join('')
}

// transformRight()

var content = 'asd<a download="Willdesk公测邀请.docx" name="[&amp;&amp;*41ef8303-9b61-48a7-3225-ae9ec97641e5]">Willdesk公测邀请.docx</a>'
var contentImg = '[&*abc0f2c1-b973-25e7-8bcb-ad84e4d043d4]'
// var content = '<a download="Willdesk公测邀请.docx" name="[&amp;&amp;*790dc8d9-305a-0b6e-19d6-2f653c059aa6]">Willdesk公测邀请.docx</a>'
const fn = (content) => {
  const regx = /\[&(.*?)\*((\w|-)+)\]/gi

  // 匹配到图片和附件的转换资源名
  const matchAlt = content.match(regx)
  return targetAlt = matchAlt.map((item, index) => {
    return item.replace(/amp;/gi, '')
  })
}
// console.log(getImgAlt1(content))
// console.log(getLinkAlt1(content))

// console.log(111, getLinkAlt(content))
// console.log('img:', getImgAlt(contentImg))

