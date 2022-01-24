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

async function main() {
  const outsideData = await promisifyReadFile()
  console.log(outsideData)
}

main()
console.log('after main')
