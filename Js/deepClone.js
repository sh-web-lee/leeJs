var obj = {
  a: 1,
  b: 2
}

const { port1, port2 } = new MessageChannel()
// console.log(port1, port2);
port1.onmessage = obj
port2.onmessage = msg => {
  console.log(msg);
}