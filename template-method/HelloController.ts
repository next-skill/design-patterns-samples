import { AbstractController } from './abstractController'

export class HelloController extends AbstractController {
  beforeHandle(): void {
    console.log('beforeHandle in HelloController')
  }

  handleGet() {
    return { message: 'hello' }
  }

  handlePost() {
    throw new Error('Method not implemented.')
  }

  afterHandle(): void {
    console.log('after handle in HelloController')
  }
}
