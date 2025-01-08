import { render, screen } from "@testing-library/react"
import BookingForm from "../../components/BookingForm"
//import { initializeTimes, updateTimes } from "../../reducers/AvailableTimesReducer"


describe("Validate BookingForm component", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  //const [state, dispatch] = useReducer(updateTimes, initializeTimes)

  test("Renders the BookingForm heading", () => {
    render(<BookingForm availableTimes={availableTimes} />)
    const headingElement = screen.getByText(/Reserve a table now!/i)
    expect(headingElement).toBeInTheDocument()
  })
})
