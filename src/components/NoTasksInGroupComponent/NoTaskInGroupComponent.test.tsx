import { render, screen } from '@testing-library/react'
import { NoTaskInGroupComponent } from './NoTaskInGroupComponent'

describe("No task in group component", () => {
  it("Message shows correctly", () => {
    const prop = "todo"
    const expectedMessage:string = "No " + prop + " tasks."

    render(<NoTaskInGroupComponent group={prop} />)
    const messageInScreen = screen.getByText(expectedMessage)

    expect(messageInScreen).toBeInTheDocument()
  })
})