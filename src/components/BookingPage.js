import { useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import BookingForm from "./BookingForm"
import Reserved from "../assets/images/reserved-img.png"
import { initializeTimes, submitAPI, updateTimes } from "../reducers/AvailableTimesReducer"

const BookingPage = () => {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes)
  const [selectedTime, setSelectedTime] = useState(state.availableTimes[0])
  const [selectedOcassion, setSelectedOcassion] = useState("Birthday")
  const [bookingDate, setBookingDate] = useState('')
  const [guests, setGuests] = useState(1)
  const [submitResult, setSubmitResult] = useState(false)
  const [dateError, setDateError] = useState(undefined)

  const navigate = useNavigate()

   useEffect(() => {
    if(submitResult) {
      navigate("/confirmed-booking", {state: { selectedTime, selectedOcassion, bookingDate, guests }})
    }
  }, [navigate, submitResult, selectedTime, selectedOcassion, bookingDate, guests])

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value)
  }

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value + "T00:00:00")
    const today = new Date()
    today.setHours(0, 0, 0 ,0)
    if(selectedDate >= today) {
      setDateError(undefined)
    } else {
      setDateError('Selected date should be today or later')
      setBookingDate('')
      return
    }
    dispatch({ type: "SET_AVAILABLE_TIMES", payload: selectedDate })
    setBookingDate(e.target.value)
  }

  const handleGuestsChange = (e) => {
    setGuests(e.target.value)
  }

  const handleOcassionChange = (e) => {
    setSelectedOcassion(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    if(bookingDate && selectedTime && guests && selectedOcassion && !dateError) {
      setSubmitResult(submitAPI({selectedTime, selectedOcassion, bookingDate, guests}))
    }
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
          dateError={dateError}
          guests={guests}
          handleTimeChange={handleTimeChange}
          handleDateChange={handleDateChange}
          handleGuestsChange={handleGuestsChange}
          handleOcassionChange={handleOcassionChange}
          submitForm={submitForm}
        />
      </div>
    </section>
  )
}

export default BookingPage
