import { Link, useLocation } from "react-router-dom"

const ConfirmedBooking = () => {
  const location = useLocation()
  const { selectedTime, selectedOcassion, bookingDate, guests } =
    location.state || {}
  return (
    <section className="booking-page-section">
      <div className="booking-page">
        <div>
          <h2 className="display-title">Little Lemon - Congratulations!</h2>
          <h3 className="display-sub-title">Your booking has been confirmed</h3>
          <p className="confirmation-details">
            We will be waiting for you next <span>{bookingDate}</span> at{" "}
            <span>{selectedTime} pm</span> to celebrate your <span>{selectedOcassion}</span> with a total
            of <span>{guests}</span> guests. We will be happy to share an amazing experience
            in our restaurant
          </p>
          <p className="confirmation-details cite">Regards,</p>
          <p className="confirmation-details signature"><span className="little-lemon-team">Little Lemon Team</span></p>
        </div>
        <div className="yellow-button">
          <Link aria-label="Back to Home" to="/">Back to Home</Link>
        </div>
      </div>
    </section>
  )
}

export default ConfirmedBooking
