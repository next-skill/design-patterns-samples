export type Task = {
  id: number
  title: string
}

const MAX_TASK_COUNT = 3

export class TaskService {
  constructor(private taskGateway: TaskGateway) {}

  registerTask(title: string) {
    // タスクは最大数までしか登録できない
    const taskCount = this.taskGateway.count()
    if (taskCount >= MAX_TASK_COUNT) {
      throw new Error(`The maximum number of tasks already registered.`)
    }

    this.taskGateway.insert(title)
  }
}

export interface TaskGateway {
  find(id: number): Task | undefined
  count(): number
  insert(title: string): Task
}

// 未実装だが、実際にはこのクラス内で SQL を発行したりする
export class TaskMySQLGateway implements TaskGateway {
  find(_id: number): Task | undefined {
    throw new Error('Method not implemented.')
  }
  count(): number {
    throw new Error('Method not implemented.')
  }
  insert(_title: string): Task {
    throw new Error('Method not implemented.')
  }
}
