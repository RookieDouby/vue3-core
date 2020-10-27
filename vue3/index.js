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


// let arr = [
//   { name: '小明', age: 23 },
//   { name: '小黄', age: 26 },
//   { name: '小李', age: 40 },
//   { name: '小张', age: 38 },
//   { name: '小胡', age: 28 },
//   { name: '小曹', age: 27 },
// ]

// let persons = new Proxy(arr, {
//   get(arr, prop) {
//     return arr[prop]
//   },
//   set(arr, prop, value) {
//     arr[prop] = value;
//   },
// })

var obj = {
  a: 1,
  b: 2,
}

// 1获取原型
// var proto = Object.getPrototypeOf(obj)
// console.log(proto);
// console.log(obj.__proto__);
// console.log(Object.prototype)

// 2设置原型
// Object.setPrototypeOf(obj, { c: 3, d: 4 })
// console.log(obj)

// 3 获取对象的可扩展性, freeze 和 seal方法的区别就是对象属性值是否可以修改，
// var extensible = Object.isExtensible(obj);
// console.log(extensible);

// Object.freeze(obj);
// var extensible2 = Object.isExtensible(obj);
// console.log(extensible2)

// 4.获取自由属性[[GetOwnProperty]]
Object.setPrototypeOf(obj, {c: 3, d: 4})
console.log(Object.getOwnPropertyNames(obj))
