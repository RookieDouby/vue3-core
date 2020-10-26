// const target = {
//   a: 1,
//   b: 2,
// }

// const proxy = new Proxy(target, {
//   get(target, prop) {
//     return `This is property value ${target[prop]}`;
//   },
//   set(target, prop, value) {
//     target[prop] = value;
//     console.log(target[prop])
//   },
// })

// console.log(target.a)
// console.log(proxy.a)
// proxy.b = 3;
// console.log(target.b)


let arr = [
  { name: '小明', age: 23 },
  { name: '小黄', age: 26 },
  { name: '小李', age: 40 },
  { name: '小张', age: 38 },
  { name: '小胡', age: 28 },
  { name: '小曹', age: 27 },
]

let persons = new Proxy(arr, {
  get(arr, prop) {
    return arr[prop]
  },
  set(arr, prop, value) {
    arr[prop] = value;
  },
})