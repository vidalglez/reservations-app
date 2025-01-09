import { useReducer, useState } from "react"
import BookingForm from "./BookingForm"
import Reserved from "../assets/images/reserved-img.png"
import { initializeTimes, updateTimes } from "../reducers/AvailableTimesReducer"

const BookingPage = () => {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes)
  const [selectedTime, setSelectedTime] = useState("17:00")
  const [selectedOcassion, setSelectedOcassion] = useState("Birthday")
  const [bookingDate, setBookingDate] = useState("")
  const [guests, setGuests] = useState(1)

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value)
  }

  const handleDateChange = (e) => {
    console.log('Selected Date: ', e.target.value)
    const selectedDate = new Date(e.target.value)
    dispatch({ type: "SET_AVAILABLE_TIMES", payload: selectedDate })
    setBookingDate(e.target.value)
  }

  const handleGuestsChange = (e) => {
    setGuests(e.target.value)
  }

  const handleOcassionChange = (e) => {
    setSelectedOcassion(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      `Booking submitted with the following values ${selectedTime} ${selectedOcassion} ${bookingDate} ${guests}`
    )
  }

  return (
    <section className="booking-page-section">
      <div className="booking-page">
        <div>
          <h2 className="display-title">Little Lemon</h2>
          <h3 className="display-sub-title">Chicago</h3>
        </div>
        <div>
          <img src={Reserved} alt="" className="reserved-image" />
        </div>
        <BookingForm
          availableTimes={state.availableTimes}
          selectedTime={selectedTime}
          selectedOcassion={selectedOcassion}
          bookingDate={bookingDate}
          guests={guests}
          handleTimeChange={handleTimeChange}
          handleDateChange={handleDateChange}
          handleGuestsChange={handleGuestsChange}
          handleOcassionChange={handleOcassionChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  )
}

export default BookingPage
