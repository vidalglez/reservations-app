//import { useEffect } from "react"
//import { useNavigate } from "react-router-dom"

const BookingForm = ({
  availableTimes,
  selectedTime,
  selectedOcassion,
  handleTimeChange,
  handleDateChange,
  handleGuestsChange,
  handleOcassionChange,
  submitForm
}) => {
  const ocassions = [
    "Birthday",
    "Anniversary",
    "Date",
    "Business meeting",
    "Other",
  ]

  //const navigate = useNavigate()

  // useEffect(() => {
  //   console.log('inside seEffect', selectedTime)
  //   navigate("/confirmed-booking")
  // //}, [navigate])
  // }, [])

  return (
    <div className="booking-form">
      <h1>Reserve a table now!</h1>
      <div className="booking-form">
        <form aria-label="booking-form" onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="res-date"
              required
              onChange={handleDateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="res-time"
              required
              onChange={handleTimeChange}
            >
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              placeholder="1"
              min="1"
              max="10"
              required
              onChange={handleGuestsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              onChange={handleOcassionChange}
            >
              {ocassions.map((ocassion, index) => (
                <option key={index} value={ocassion}>
                  {ocassion}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="yellow-button extra-margin-button">
            Make your reservation
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingForm
