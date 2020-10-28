let target = {
  a: 1, 
  b: 2,
}

function myProxy(target, handler) {

}

function deepClone(org, tar) {
  var tar = tar || {},
      toStr = Object.prototype.toString,
      arrType = '[object Array]';
  
  for (var key in org) {
    if (org.hasOwnProperty(key)) {
      if (typeof(org[key]) === 'object' && org[key] !== null) {
        tar[key] = toStr.call(org[key]) === arrType ? [] : {};
        deepClone(org[key], tar[key])
      } else {
        tar[key] = org[key]
      }
    } else {
      tar[key] = org[key]
    }
  }

  return tar;
}

let newObj = deepClone(target)
newObj.c = 3;
console.log(target)
console.log(newObj)