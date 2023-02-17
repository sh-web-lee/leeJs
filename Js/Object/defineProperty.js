const obj = {
  a: 1
}

Object.defineProperty(obj, 'a', {
  get () {
    console.log('visited')
  },
  set () {
    console.log('change')
  }
})
obj.a