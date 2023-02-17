/* 在一个HTML文档中选中所有加粗的文本。 */

var strongs = document.getElementsByTagName("strong");
var s = window.getSelection();

if(s.rangeCount > 0) s.removeAllRanges();

for(var i = 0; i < strongs.length; i++) {
  var range = document.createRange();
  range.selectNode(strongs[i]);
  s.addRange(range);
}