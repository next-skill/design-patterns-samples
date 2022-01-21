import http from 'http'

const PORT = 3000

class Application {
  run() {
    console.log('Server starting...')

    http
      .createServer((request, response) => {
        const method = request.method
        const url = request.url
        console.log(`[Request] method = ${method}, url = ${url}`)

        const responseBody = { message: 'hello' }

        response.end(JSON.stringify(responseBody), 'utf-8')
        console.log(`[Response] method = ${method}, url = ${url}`)
      })
      .listen(PORT)

    console.log(`Server running at http://localhost:${PORT}`)
  }
}

new Application().run()
