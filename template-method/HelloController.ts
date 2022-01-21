import { AbstractController } from './abstractController'

export class HelloController extends AbstractController {
  handleGet() {
    return { message: 'hello' }
  }
  handlePost() {
    throw new Error('Method not implemented.')
  }
}
