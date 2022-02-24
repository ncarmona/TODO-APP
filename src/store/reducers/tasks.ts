import { ITask } from '../../interfaces/ITask'
import { Actions } from '../actions'

const payload:ITask[] = []

export const tasks = (state=payload, action:any) => {
  const { type, data } = action
  const task:ITask = data
  const taskIndex:number = state.findIndex((t:ITask) => task.id === t.id)
  const taskFound:boolean = taskIndex !== -1
  let updatedObject = Object.assign(state, {...task})

  switch(type) {
    case Actions.getTasks:
    break
    case Actions.setDone:
      if (taskFound) {
        state[taskIndex].done = true
        state[taskIndex].archived = false
        state = [...updatedObject]
      }
    break

    case Actions.setUndone:
      if (taskFound) {
        state[taskIndex].done = false
        state[taskIndex].archived = false
        state = [...updatedObject]
      }
    break

    case Actions.setArchived:
      if (taskFound) {
        state[taskIndex].done = true
        state[taskIndex].archived = true
        state = [...updatedObject]
      }
    break
    case Actions.setUnarchived:
      if (taskFound) {
        state[taskIndex].done = true
        state[taskIndex].archived = false
        state = [...updatedObject]
      }
    break
    case Actions.createTask:
      const newTask:ITask = {
        id: Date.now().toString(),
        text: data.taskText,
        done: false,
        archived: false
      }
      state.push(newTask)
      state = [...updatedObject]
  }
  return state
}