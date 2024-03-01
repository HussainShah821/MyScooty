import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MyNavbar from './Assets/Components/Navbar';
import HomeCard from './Assets/Components/HomeCard';
import { Routes, Route } from 'react-router';
import Reservation from './Assets/Components/ReservationCard';
import Contact from './Assets/Components/ContactCard';

function App() {
  return (
   <>
   <MyNavbar />
   <Routes>
   <Route path="/" element={<HomeCard />}></Route>
   <Route path="/Contact" element={<Contact />}></Route>
   <Route path="/Reservation" element={<Reservation />}></Route>
   </Routes>
   
   
 
   </>
  );
}

export default App;
