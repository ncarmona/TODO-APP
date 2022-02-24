import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ITask } from '../../interfaces/ITask'
import { store } from '../../store/store'
import { TaskComponent } from './TaskComponent'


describe("TaskComponent", () => {
  const todoTask:ITask = {
    id: "0",
    text: "This is a todo task",
    archived: false,
    done: false
  }
  const doneTask:ITask = {
    id: "1",
    text: "This is a done task",
    archived: false,
    done: true
  }

  it("Task text must render", () => {
    render(<Provider store={store}><TaskComponent {...todoTask} /></Provider>)
    const doneTaskScreen = screen.getByText(todoTask.text)

    expect(doneTaskScreen).toBeInTheDocument()
  })
  it("Todo tasks must have done button", () => {
    render(<Provider store={store}><TaskComponent {...todoTask} /></Provider>)
    const todoTaskScreen = screen.getByText("done")

    expect(todoTaskScreen).toBeInTheDocument()    
  })
  it("Done tasks must have undo button", () => {
    render(<Provider store={store}><TaskComponent {...doneTask} /></Provider>)
    const doneTaskScreen = screen.getByText("Undo")

    expect(doneTaskScreen).toBeInTheDocument()    
  })
})