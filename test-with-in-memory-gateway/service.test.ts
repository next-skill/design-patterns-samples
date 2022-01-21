import { Task, TaskGateway, TaskService } from './service'

class TaskInMemoryGateway implements TaskGateway {
  constructor(private tasks: Task[] = []) {}

  find(_id: number): Task | undefined {
    throw new Error('Method not implemented.')
  }

  count(): number {
    return this.tasks.length
  }

  insert(title: string): Task {
    const ids = this.tasks.map((t) => t.id)
    const nextId = Math.max(...ids) + 1
    const task = { id: nextId, title: title }
    this.tasks.push(task)
    return task
  }
}

describe('TaskService', () => {
  test('success to register 3rd task', () => {
    // 準備
    const taskGateway = new TaskInMemoryGateway([
      { id: 1, title: 'task1' },
      { id: 2, title: 'task2' }
    ])
    const taskService = new TaskService(taskGateway)

    // 実行
    taskService.registerTask('task3')

    // 検証
    expect(taskGateway.count()).toBe(3)
  })

  test('fail to register 4th task', () => {
    // 準備
    const taskGateway = new TaskInMemoryGateway([
      { id: 1, title: 'task1' },
      { id: 2, title: 'task2' },
      { id: 3, title: 'task3' }
    ])
    const taskService = new TaskService(taskGateway)

    // 実行
    expect(() => taskService.registerTask('task4')).toThrowError()
  })
})
