import { Route, Routes } from 'react-router-dom'
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import Header from './components/Header';
import Main from './components/Main';
import FailedBooking from './components/FailedBooking';
import Footer from './components/Footer';
import './css/App.css';
import './css/Header.css'
import './css/Nav.css'
import './css/Hero.css'
import './css/Highlights.css'
import './css/Testimonials.css'
import './css/About.css'
import './css/Footer.css'
import './css/BookingPage.css'
import './css/BookingForm.css'
import './css/ConfirmedBooking.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        <Route path="/booking-failed" element={<FailedBooking/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
