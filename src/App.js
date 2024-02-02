import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MyNavbar from './Assets/Components/Navbar';
import Home from './Assets/Components/Home';
import ContactCard from './Assets/Components/ContactCard';
import Reservation from './Assets/Components/ReservationCard';

function App() {
  return (
   <>
   <MyNavbar />
   <Home />
   <Reservation />
   </>
  );
}

export default App;
