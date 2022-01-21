import { Controller } from '../controller'

export class HelloController implements Controller {
  handleGet() {
    return { message: 'hello' }
  }

  handlePost() {
    throw new Error('Method not implemented.')
  }
}
