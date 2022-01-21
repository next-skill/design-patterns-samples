import { Controller } from '../controller'

export class UserController implements Controller {
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
