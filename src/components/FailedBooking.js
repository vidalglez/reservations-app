import { Link } from "react-router-dom"

const FailedBooking = () => {
  return (
    <section className="booking-page-section">
      <div className="booking-page">
        <div>
          <h2 className="display-title">Booking Failed</h2>
          <p className="confirmation-details">
            Sorry, we couldn't process your booking, we apologize for this inconvenient, we are researching about this issue. Please try again later.
          </p>
        </div>
        <div className="yellow-button">
          <Link aria-label="Back to Home" to="/">Back to Home</Link>
        </div>
      </div>
    </section>
  )
}

export default FailedBooking
