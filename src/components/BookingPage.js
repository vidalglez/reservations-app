import { useState } from "react"
import BookingForm from "./BookingForm"

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ])
  const [selectedTime, setSelectedTime] = useState("17:00")
  const [selectedOcassion, setSelectedOcassion] = useState("Birthday")
  const [bookingDate, setBookingDate] = useState("")
  const [guests, setGuests] = useState(1)

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value)
  }

  const handleDateChange = (e) => {
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
        <div></div>
        <BookingForm
          availableTimes={availableTimes}
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
