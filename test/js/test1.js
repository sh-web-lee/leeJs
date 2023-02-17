var regexp = /<[^>]+>.*/g

 
// （以下都是常见的格式化后的代码）
 
// 例子1
var str1 = document.querySelector('.box').innerHTML
var str2 = '<img src="https://img.willdesk.com/test/chat/4875/2022/05/11/1652249482281_screens.png" alt="">asd'
console.log(str1.replace(regexp, ''))
 