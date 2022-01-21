import { AbstractController } from './abstractController'
import { HelloController } from './HelloController'
import { TaskController } from './TaskController'
import { UserController } from './UserController'

type Route = {
  [path: string]: AbstractController
}

export const route: Route = {
  '/': new HelloController(),
  '/users': new UserController(),
  '/tasks': new TaskController()
}
