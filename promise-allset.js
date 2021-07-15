Promise.allSet = arr => Promise.all(arr.map(p => Promise.resolve(p).then(res => {
  return { status: 'fulfilled', value: res }
}, err => {
  return { status: 'rejected', reason: err }
})))

var p1 = Promise.reject(1),
  p2 = Promise.resolve(2),
  p3 = Promise.resolve(3)
Promise.allSet([p1, p2, p3]).then(results => console.log(results)).catch(e => console.log(e))