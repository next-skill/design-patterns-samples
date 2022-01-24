import fs from 'fs'

function promisifyReadFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('README.md', (err, data) => {
      if (err) {
        return reject(err)
      } else {
        return resolve(data)
      }
    })
  })
}

const outsideData = promisifyReadFile()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.error(err)
  })

console.log(outsideData)
