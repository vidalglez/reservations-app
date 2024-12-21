import { useState, useEffect } from "react"

const BookingForm = () => {
    
    const [selectedTime, setSelectedTime] = useState('17:00')
    const [selectedOcassion, setSelectedOcassion] = useState('Birthday')
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
    const ocassions = ['Birthday', 'Anniversary', 'Date', 'Business meeting', 'Other']
    const [bookingDate, setBookingDate] = useState('')
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
        console.log(`Booking submitted with the following values ${selectedTime} ${selectedOcassion} ${bookingDate} ${guests}`)
    }

    useEffect(() => {
        console.log(selectedTime)
    }, [selectedTime])

    return (
        <div>
            <h1>Reserve a table now!</h1>
            <div className="booking-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" id="res-date" name="res-date" required onChange={handleDateChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time" name="res-time" required onChange={handleTimeChange}>
                            {availableTimes.map((time, index) => (
                                <option key={index} value={time} >{time}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" id="guests" name="guests" placeholder="1" min="1" max="10" required onChange={handleGuestsChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" name="occasion" onChange={handleOcassionChange}>
                            {
                                ocassions.map((ocassion, index) => (
                                    <option key={index} value={ocassion}>{ocassion}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button type="submit" className="yellow-button">Make your reservation</button>
                </form>
            </div>
        </div>
    )
}

export default BookingForm