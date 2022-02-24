import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ITask } from '../../interfaces/ITask'
import { ITaskGroup } from '../../interfaces/ITaskGroup'
import { store } from '../../store/store'
import { TaskGroupComponent } from './TaskGroupComponent'

describe("TaskCreatorComponent", () => {
  const task1:ITask = {
    id: "0",
    text: "Task 1",
    done: true,
    archived: false
  }
  const task2:ITask = {
    id: "1",
    text: "Task 2",
    done: true,
    archived: false
  }

  const taskGroupEmpty:ITaskGroup = {
    collapsable: false,
    name: "group created for testing purposes.",
    tasks: []
  }
  const taskGroupNotEmpty:ITaskGroup = {
    collapsable: false,
    name: "group created for testing purposes.",
    tasks: [task1, task2]
  }
  const taskGroupCollapsable:ITaskGroup = {
    collapsable: true,
    name: "group created for testing purposes.",
    tasks: []
  }

  it("Task group must show task group name", () => {
    render(<TaskGroupComponent {...taskGroupEmpty} />)
    const taskGroupTitle = screen.getByText(taskGroupEmpty.name)

    expect(taskGroupTitle).toBeInTheDocument()
  })
  it("Task group without task must show 'No <name> tasks in non collapsable taskgroup.'", () => {
    render(<TaskGroupComponent {...taskGroupEmpty} />)
    const expectedNoTaskString = "No " + taskGroupEmpty.name + " tasks."
    const taskGroupTitle = screen.getByText(expectedNoTaskString)

    expect(taskGroupTitle).toBeInTheDocument()    
  })
  it("Task group without task must NOT show 'No <name> tasks in collapsable taskgroup.'", () => {
    render(<TaskGroupComponent {...taskGroupCollapsable} />)
    const expectedNoTaskString = "No " + taskGroupCollapsable.name + " tasks."
    const taskGroupTitle = screen.queryByText(expectedNoTaskString)

    expect(taskGroupTitle).not.toBeInTheDocument()
  })
  it("All tasks must appear inside the task group", () => {
    render(<Provider store={store}><TaskGroupComponent {...taskGroupNotEmpty} /></Provider>)
    const getTask1 = screen.getByText(task1.text)

    expect(getTask1).toBeInTheDocument()
  })
})