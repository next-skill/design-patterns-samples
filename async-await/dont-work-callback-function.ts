import fs from 'fs'

function doSomething() {
  let fileContent

  fs.readFile('README.md', (err, data) => {
    if (err) {
      throw err
    }

    fileContent = data
  })

  console.log(fileContent) // undefined
}

doSomething()
