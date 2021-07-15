Promise.allT = (arr) => new Promise((resolve, reject) => {
  var result = []
  arr.forEach((promise, index) => {
    Promise.resolve(promise).then(res => {
      result[index] = res
      ++index === arr.length && resolve(result)
    }).catch(err => reject(err))
  })
})

Promise.allT([1, 2, 3]).then(res => console.log(res))