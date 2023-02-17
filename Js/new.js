function Person(name, age) {
  this.name = name
  this.age = age
}

var xm = new Person('lee', 18)
// console.log(xm.__proto__ === Person.prototype)


function _new() {
  //1.拿到传入的参数中的第一个参数，即构造函数名Func
  var Func = [].shift.call(arguments); 
  //2.创建一个空对象obj,并让其继承Func.prototype
  var obj = Object.create(Func.prototype); 
  //3.执行构造函数，并将this指向创建的空对象obj
  var result = Func.apply(obj, arguments); 
  //4.如果构造函数返回结果是对象，就直接返回，否则返回创建的对象obj
  return typeof result === "object" && result != null ? result : obj;
}
var aa = _new(Person, 'lee', 18)
console.log(aa)