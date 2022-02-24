import { ITask } from "../../interfaces/ITask";
import { TaskDispatchers } from '../../store/dispatchers/taskDispatchers'
import { CheckIcon, ArchiveIcon } from '@heroicons/react/outline'

export const TaskComponent = (task:ITask) => {

  const { setTaskUndone, setTaskDone } = TaskDispatchers()

  const ShowDoneButton = ():JSX.Element => !task.done ? <DoneButton /> : <></>
  const ShowUndoButton = ():JSX.Element => task.done && !task.archived ? <UndoButton /> : <></>

  const DoneButton = ():JSX.Element => <button className="bg-purple-700 hover:bg-purple-800 uppercase text-white flex p-3 rounded" onClick={() => setTaskDone(task)}><CheckIcon className="h-6"/>done</button>
  const UndoButton = ():JSX.Element => <button className="bg-gray-600 uppercase hover:bg-gray-700 text-white flex p-3 rounded" onClick={() => setTaskUndone(task)}><ArchiveIcon className="h-6"/>Undo</button>

  return (
    <div className="bg-white flex justify-end mb-3 p-3 rounded">
      <span className="grow self-center">{task.text}</span>
      <div className="self-center">
        {ShowDoneButton()}
        {ShowUndoButton()}
      </div>
    </div>
  )
}