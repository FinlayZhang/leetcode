Promise.race1 = arr => new Promise((resolve, reject) => arr.forEach(item => Promise.resolve(item).then(res => resolve(res), err => reject(err))))

Promise.race1([4,5,6]).then(results => console.log(results)).catch(e => console.log(e))