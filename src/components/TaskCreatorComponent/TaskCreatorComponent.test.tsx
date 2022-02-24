import { render, screen, waitFor } from "@testing-library/react"
import { ITask } from "../../interfaces/ITask"
import { TaskCreactorComponent } from "./TaskCreatorComponent"
import user from '@testing-library/user-event'
import { Provider, useSelector } from "react-redux"
import { store } from "../../store/store"
import { Messages } from "../../constants/TaskCreationResultMessages"
const spacesTask:ITask = {
  id: "0",
  text: "   ",
  archived: false,
  done: false
}
const blankTask:ITask = {
  id: "1",
  text: "",
  archived: false,
  done: false
}
const validTask:ITask = {
  id: "2",
  text: "My task text",
  archived: false,
  done: false
}

describe("TaskCreatorComponent", () => {
  const placeholderText = "Create your new Task"
  const taskButtonSubmit = () => user.click(screen.getByRole("button"))
  const { emptyText, success } = Messages

  it("Task text with length = 0 must NOT be created.", () => {
    render(<Provider store={store}><TaskCreactorComponent /></Provider>)

    user.click(screen.getByRole("button"))
    const taskCreationResult = screen.getByText(emptyText)
  
    expect(taskCreationResult).toBeInTheDocument()
  })

  it("Task with only blank spaces must NOT be created.", () => {
    render(<Provider store={store}><TaskCreactorComponent /></Provider>)

    user.type(screen.getByPlaceholderText(placeholderText), spacesTask.text)
    user.click(screen.getByRole("button"))
    const taskCreationResult = screen.getByText(emptyText)

    expect(taskCreationResult).toBeInTheDocument()
  })

  it("Task created", () => {
    render(<Provider store={store}><TaskCreactorComponent /></Provider>)
    user.type(screen.getByPlaceholderText(placeholderText), validTask.text)
    user.click(screen.getByRole("button"))
    const taskCreationResult = screen.getByText(success)
    expect(taskCreationResult).toBeInTheDocument()    
  })
})