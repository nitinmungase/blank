import Carousel from './Components/carousel';
import Navbar from './Components/Navbar';
import Footerbar from './Components/footerbar';
import Card from './Components/Card';
//import './App.css';

function App() {
  return (
    <>
  {/* <Navbar title="Company1" aboutText="About"/> */}
   <Navbar/>
  <Carousel/>
  <Card/>
  <footer>
  <Footerbar/>
  </footer>
    </>
  );
}

export default App;
