const BookingForm = ({
  availableTimes,
  selectedTime,
  selectedOcassion,
  bookingDate,
  dateError,
  guests,
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

  const areInputsValidated = () => {
    if(bookingDate && selectedTime && guests && selectedOcassion && !dateError) {
      return true;
    }
    return false
  }

  const defineAvailableTimes = (availableTimes) => {
    if(!availableTimes){
      return [<option key={1} defaultValue={''} disabled value="No times available" >No times available</option>]
    }
    return availableTimes.map((time, index) => (
      <option key={index} value={time}>
        {time}
      </option>
    ))
  }

  return (
    <div className="booking-form">
      <h1>Reserve a table now!</h1>
      <div className="booking-form">
        <form aria-label="booking-form" onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="res-date"><span>*</span> Choose date</label>
            <input
              type="date"
              id="res-date"
              name="res-date"
              required
              onChange={handleDateChange}
              value={bookingDate}
            />
            {dateError && <span style={{color: "red", marginLeft: "10px"}}>{dateError}</span>} 
          </div>
          <div className="form-group">
            <label htmlFor="res-time"><span>*</span> Choose time</label>
            <select
              id="res-time"
              name="res-time"
              required
              onChange={handleTimeChange}
              value={selectedTime}
            >
              {defineAvailableTimes(availableTimes)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="guests"><span>*</span> Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              placeholder="1"
              min="1"
              max="10"
              required
              value={guests}
              onChange={handleGuestsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="occasion"><span>*</span> Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={selectedOcassion}
              onChange={handleOcassionChange}
            >
              {ocassions.map((ocassion, index) => (
                <option key={index} value={ocassion}>
                  {ocassion}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="mandatory">* Indicates mandatory fields</label>
          </div>
          <button aria-label="Submit Form" type="submit" className="yellow-button extra-margin-button" disabled={!areInputsValidated()}>
            Make your reservation
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingForm
