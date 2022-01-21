import { AbstractController } from './abstractController'

export class UserController extends AbstractController {
  handleGet() {
    return {
      users: [
        {
          id: 1,
          name: 'Alice'
        },
        {
          id: 2,
          name: 'Bob'
        }
      ]
    }
  }
  handlePost() {
    throw new Error('Method not implemented.')
  }
}
