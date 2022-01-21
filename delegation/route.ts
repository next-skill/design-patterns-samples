import { Controller } from './controller'
import { HelloController } from './controller/HelloController'
import { TaskController } from './controller/TaskController'
import { UserController } from './controller/UserController'

type Route = {
  [path: string]: Controller
}

export const route: Route = {
  '/': new HelloController(),
  '/users': new UserController(),
  '/tasks': new TaskController()
}
