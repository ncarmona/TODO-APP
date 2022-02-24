import { useState } from "react";
import { ITask } from "../../interfaces/ITask";
import { ITaskGroup } from "../../interfaces/ITaskGroup";
import { TaskComponent } from "../TaskComponent/TaskComponent";
import { CollapseComponent } from '../CollapseComponent/CollapseComponent'
import { NoTaskInGroupComponent } from "../NoTasksInGroupComponent/NoTaskInGroupComponent";

export const TaskGroupComponent = (group:ITaskGroup) => {
  const [collapsed, setCollapse] = useState(group.collapsable)

  const showCollapsable = ():JSX.Element => {
    let showCollapsableIcon:string = "w-6"
    if (!group.collapsable) showCollapsableIcon = "invisible"
    return <span className={showCollapsableIcon}><CollapseComponent state={collapsed} clickHandler={() => toggleCollapse()} /></span>
  }
  const toggleCollapse = ():void => setCollapse(!collapsed)
  const RenderTaskGroupList = ():JSX.Element => {
    let content:JSX.Element = <></>

    if (group.tasks.length === 0) content = <NoTaskInGroupComponent group={group.name} />
    else content = <> {group.tasks.map((t:ITask, index:number) => <TaskComponent {...t} key={index}/>)}</>

    return content
  }
  const collapsableTaskGroupList = ():JSX.Element => collapsed ? <></> : RenderTaskGroupList()
  return (
    <div className="bg-gray-100 mb-5 p-3 rounded drop-shadow-md">
      <div onClick={() => toggleCollapse()}>
        <h1 className="text-xl font-bold mb-5 uppercase flex cursor-pointer">{showCollapsable()} {group.name}</h1>
      </div>
      <div>
        {collapsableTaskGroupList()}
      </div>
    </div>
  )
}