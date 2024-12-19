import BookingForm from "./BookingForm"
const BookingPage = () => {
  return (
    <section className="booking-page-section">
      <div className="booking-page">
        <div>
          <h2 className="display-title">Little Lemon</h2>
          <h3 className="display-sub-title">Chicago</h3>
        </div>
        <div></div>
        <BookingForm />
      </div>
    </section>
  )
}

export default BookingPage
