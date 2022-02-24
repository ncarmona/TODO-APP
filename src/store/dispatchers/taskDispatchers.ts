import { useDispatch } from "react-redux"
import { ITask } from "../../interfaces/ITask"
import { Actions } from "../actions"

export const TaskDispatchers = ():any => {
  const dispatcher = useDispatch()
  
  const setTaskDone = (task:ITask) => dispatcher({type: Actions.setDone, data: task})
  const setTaskUndone = (task:ITask) => dispatcher({type: Actions.setUndone, data: task})
  const createTask = (taskText:string) => dispatcher({type: Actions.createTask, data: {taskText}})

  return { setTaskDone, setTaskUndone, createTask }
}