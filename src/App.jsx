import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/globalcomp/Navbar/navbar'
import Footer from './Components/globalcomp/Footer/footer'
import Home from './Components/landingcomp/Home/home'
import About from './Components/landingcomp/About/about'
import Cars from './Components/landingcomp/Cars/cars'
import Booking from './Components/landingcomp/Booking/booking'
import Contact from './Components/landingcomp/Contact/contact'
import ScrollToTop from './Components/globalcomp/Navbar/ScrollToTop'



function App() {
  return (
    <>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>

        <Footer/> 
    </>
  )
}

export default App