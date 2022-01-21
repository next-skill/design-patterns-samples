export abstract class AbstractController {
  handle(method: string): any {
    switch (method) {
      case 'GET':
        return this.handleGet()
      case 'POST':
        return this.handlePost()
      default:
        throw new Error(`Invalid method. method = ${method}.`)
    }
  }

  abstract handleGet(): any

  abstract handlePost(): any
}
