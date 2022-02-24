import { useState } from "react"
import { ITaskCreationResult } from "../../interfaces/ITaskCreationResult"
import { Messages } from '../../constants/TaskCreationResultMessages'
import { TaskCreationResultComponent } from '../TaskCreationResullt/TaskCreationResultComponent'
import { TaskDispatchers } from "../../store/dispatchers/taskDispatchers"
import { PlusIcon } from '@heroicons/react/outline'

export const TaskCreactorComponent = () => {
  const [ newTask, setNewTask ] = useState<string>("")
  const [ taskResult, setTaskResult] = useState<ITaskCreationResult | undefined>()
  const { createTask } = TaskDispatchers()
  const taskTextNotEmpty = (taskText:string):boolean => taskText.length !== 0
  const taskTrimmer = ():string => newTask.trimStart().trimEnd()

  const createSuccess = () => setTaskResult({
    success: true,
    message: Messages.success
  })
  const createError = () => setTaskResult({
    success: false,
    message: Messages.emptyText
  })
  const clearTaskCreationResult = () => setTaskResult(undefined)
  const clearTaskInputTimeout = () => setTimeout(() => clearTaskCreationResult(), 3000)
  const createNewTask = () => {
    const newTaskTextClear = taskTrimmer()
    console.log(newTaskTextClear, newTaskTextClear.length)

    if (taskTextNotEmpty(newTaskTextClear)) {
      createTask(newTaskTextClear)
      createSuccess()
      clearCreateTaskInput()
    } else {
      createError()
    }
    clearTaskInputTimeout()
  }
  const changeHandler = (e:any) => setNewTask(e.target.value)
  const clearCreateTaskInput = () => setNewTask("")
  return (
    <>
      <div className="flex justify-center">
        <input placeholder="Create your new Task" name="create-task" className="p-2 border-2 outline-none focus:border-purple-700 rounded border-grey-400 mr-3" value={newTask} onChange={(e) => changeHandler(e)} onFocus={() => clearTaskCreationResult} autoFocus={true}/>
        <button name="create-task" className="flex align-center p-2 bg-purple-700 hover:bg-purple-800 text-white rounded" onClick={() => createNewTask()}>
          <PlusIcon className="h-6"/> <span className="mr-1 uppercase tracking-wide">create</span>
        </button>
      </div>
      <div className="flex justify-center h-3.5">
        <TaskCreationResultComponent {...taskResult!} />
      </div>
    </>
  )
}