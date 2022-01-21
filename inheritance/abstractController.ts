export abstract class AbstractController {
  handle(method: string): any {
    this.beforeHandle()

    let res: any
    switch (method) {
      case 'GET':
        res = this.handleGet()
        break
      case 'POST':
        res = this.handlePost()
        break
      default:
        throw new Error(`Invalid method. method = ${method}.`)
    }

    this.afterHandle()

    return res
  }

  protected beforeHandle(): void {}

  protected abstract handleGet(): any

  protected abstract handlePost(): any

  protected afterHandle(): void {}
}
