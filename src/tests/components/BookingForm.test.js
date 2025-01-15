import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "../../components/BookingForm"

describe("Validate BookingForm component", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

  test("Renders the BookingForm heading", () => {
    render(<BookingForm availableTimes={availableTimes} />)
    const headingElement = screen.getByText(/Reserve a table now!/i)
    expect(headingElement).toBeInTheDocument()
  })

  test("Handle the submit action", () => {
    const submitForm = jest.fn()
    render(
      <BookingForm
        availableTimes={availableTimes}
        submitForm={submitForm}
      />
    )

    const dateInput = screen.getByLabelText(/Choose date/i)
    const timeSelect = screen.getByLabelText(/Choose time/i)
    const guestsInput = screen.getByLabelText(/Number of guests/i)
    const occasionSelect = screen.getByLabelText(/Occasion/i)
    const form = screen.getByRole("form")

    fireEvent.change(dateInput, { target: { value: "2025-01-07" } })
    fireEvent.change(timeSelect, { target: { value: "19:00" } })
    fireEvent.change(guestsInput, { target: { value: "4" } })
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } })
    fireEvent.submit(form)

    expect(submitForm).toHaveBeenCalled()
  })

  test("Handle the submit button disabled when no date is selected", () => {
    const submitForm = jest.fn()
    render(
      <BookingForm
        availableTimes={availableTimes}
        submitForm={submitForm}
      />
    )

    const timeSelect = screen.getByLabelText(/Choose time/i)
    const guestsInput = screen.getByLabelText(/Number of guests/i)
    const occasionSelect = screen.getByLabelText(/Occasion/i)
    const button = screen.getByRole("button")

    fireEvent.change(timeSelect, { target: { value: "19:00" } })
    fireEvent.change(guestsInput, { target: { value: "4" } })
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } })

    expect(button).toBeDisabled()
  })

  test("Displays error message when dateError is present", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dateError="Selected date should be today or later"
      />
    )

    const errorMessage = screen.getByText(/Selected date should be today or later/i)
    expect(errorMessage).toBeInTheDocument()
  })
})
