import { useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import BookingForm from "./BookingForm"
import Reserved from "../assets/images/reserved-img.png"
import { initializeTimes, fetchAPI, submitAPI, updateTimes } from "../reducers/AvailableTimesReducer"

const BookingPage = () => {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes)
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedOcassion, setSelectedOcassion] = useState("Birthday")
  const [bookingDate, setBookingDate] = useState('')
  const [guests, setGuests] = useState(1)
  const [submitResult, setSubmitResult] = useState(undefined)
  const [dateError, setDateError] = useState(undefined)
  const [timeError, setTimeError] = useState(undefined)

  const navigate = useNavigate()

  useEffect(() => {
    fetchAPI(new Date()).then((result) => {
      dispatch({ type: "SET_AVAILABLE_TIMES", payload: result })
    })
  }, [])

  useEffect(() => {
    const selecteBookingDate = new Date(bookingDate + "T00:00:00")
    if(bookingDate && bookingDate.length > 0){
      fetchAPI(selecteBookingDate).then((result) => {
        dispatch({ type: "SET_AVAILABLE_TIMES", payload: result })
      })
    }
  }, [bookingDate])

   useEffect(() => {
    if(submitResult) {
      navigate("/confirmed-booking", {state: { selectedTime, selectedOcassion, bookingDate, guests }})
    }
    if(submitResult === false) {
      navigate("/booking-failed")
    }
  }, [navigate, submitResult, selectedTime, selectedOcassion, bookingDate, guests])

  const handleTimeChange = (e) => {
    if(!e.target.value || e.target.value === '' || e.target.value.length === 0) {
      setSelectedTime('')
      setTimeError('Please choose a time to book')
    } else {
      setSelectedTime(e.target.value)
      setTimeError(undefined)
    }
  }

  const handleBlurDateChange = (e) => {
    if(!e.target.value || e.target.value === '' || e.target.value.length === 0) {
      setDateError('Please choose a date to book')
    }
  }

  const handleBlurTimeChange = (e) => {
    if(!e.target.value || e.target.value === '' || e.target.value.length === 0) {
      setTimeError('Please choose a time to book')
    }
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
      e.target[4].disabled = true
      submitAPI({selectedTime, selectedOcassion, bookingDate, guests}).then((result) => {
        setSubmitResult(result)
      }).catch((result) => {
        setSubmitResult(result)
      })
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
          timeError={timeError}
          dateError={dateError}
          guests={guests}
          handleTimeChange={handleTimeChange}
          handleBlurTimeChange={handleBlurTimeChange}
          handleDateChange={handleDateChange}
          handleBlurDateChange={handleBlurDateChange}
          handleGuestsChange={handleGuestsChange}
          handleOcassionChange={handleOcassionChange}
          submitForm={submitForm}
        />
      </div>
    </section>
  )
}

export default BookingPage
