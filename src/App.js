import { Route, Routes } from 'react-router-dom'
import BookingPage from './components/BookingPage';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './css/App.css';
import './css/Header.css'
import './css/Nav.css'
import './css/Hero.css'
import './css/Highlights.css'
import './css/Testimonials.css'
import './css/About.css'
import './css/Footer.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
