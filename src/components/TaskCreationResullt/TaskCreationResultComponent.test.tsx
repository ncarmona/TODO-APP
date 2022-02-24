import { render, screen } from '@testing-library/react'
import { Messages } from "../../constants/TaskCreationResultMessages"
import { ITaskCreationResult } from "../../interfaces/ITaskCreationResult"
import { TaskCreationResultComponent } from "./TaskCreationResultComponent"

describe("TaskCreationResultComponent", () => {
  const resultSuccess:ITaskCreationResult = {
    message: Messages.success,
    success: true
  }
  const resultEmptyText:ITaskCreationResult = {
    message: Messages.emptyText,
    success: false
  }
  let waitingUserInput:ITaskCreationResult

  it("Message success", () => {
    render(<TaskCreationResultComponent {...resultSuccess}/>)
    const success = screen.getByText(Messages.success)

    expect(success).toBeInTheDocument()
  })
  it("Empty text error", () => {
    render(<TaskCreationResultComponent {...resultEmptyText}/>)
    const emptyText = screen.getByText(Messages.emptyText)

    expect(emptyText).toBeInTheDocument()
  })
  it("Waiting for user input", () => {
    render(<TaskCreationResultComponent {...waitingUserInput}/>)
  })
})