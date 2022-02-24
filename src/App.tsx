import { useSelector } from "react-redux";
import { TaskCreactorComponent } from "./components/TaskCreatorComponent/TaskCreatorComponent";
import { TaskGroupComponent } from "./components/TaskGroupComponent/TaskGroupComponent";
import { ITask } from "./interfaces/ITask";
import { ITaskGroup } from "./interfaces/ITaskGroup";

function App() {
  const taskList:ITask[] = useSelector((state:any) => state.tasks)

  const getTodoTasks = (taskList:ITask[]):ITask[] => taskList.filter((t:ITask) => !t.done)
  const getDoneTasks = (taskList:ITask[]):ITask[] => taskList.filter((t:ITask) => t.done && !t.archived)

  const createGroup = (name: string, collapsable:boolean, taskList:ITask[]):ITaskGroup => {
    return {
      tasks: taskList,
      name: name,
      collapsable: collapsable
    }
  }

  const todoGroup = ():ITaskGroup => createGroup("todo", false, getTodoTasks(taskList))
  const doneGroup = ():ITaskGroup => createGroup("done", true, getDoneTasks(taskList))

  return (
    <div className="flex-col p-3">
      <div className="mt-3 mb-8">
        <TaskCreactorComponent />
      </div>
      <div className="md:w-3/6 md:m-auto">
        <TaskGroupComponent {...todoGroup()} />
        <TaskGroupComponent {...doneGroup()} />
      </div>
    </div>
  );
}

export default App;
