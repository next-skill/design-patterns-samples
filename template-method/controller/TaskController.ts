import { AbstractController } from '../abstractController'

export class TaskController extends AbstractController {
  handleGet() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Controller を実装する'
        },
        {
          id: 2,
          title: 'Service を実装する'
        }
      ]
    }
  }
  handlePost() {
    throw new Error('Method not implemented.')
  }
}
