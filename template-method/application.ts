import http from 'http'
import { route } from './route'

const PORT = 3000

class Application {
  run() {
    console.log('Server starting...')

    http
      .createServer((request, response) => {
        // リクエストの解析
        const method = request.method
        const url = request.url || '/'
        console.log(`[Request] method = ${method}, url = ${url}`)

        try {
          if (!method) {
            response.writeHead(400)
            response.end()
            return
          }

          // ルーティング
          const controller = route[url]

          if (!controller) {
            // 対応するコントローラがない場合は 404
            response.writeHead(404)
            response.end()
            return
          }

          // コントローラを実行
          const responseBody = controller.handle(method)
          response.writeHead(200, {
            'Content-Type': 'application/json; charset=UTF-8'
          })
          response.end(JSON.stringify(responseBody), 'utf-8')
        } catch (e) {
          // エラーが発生した場合は 500
          console.error(`[ERROR] method = ${method}, url = ${url}.`, e)
          response.writeHead(500)
          response.end()
        } finally {
          console.log(
            `[Response] method = ${method}, url = ${url}, statusCode = ${response.statusCode}`
          )
        }
      })
      .listen(PORT)

    console.log(`Server running at http://localhost:${PORT}`)
  }
}

new Application().run()
