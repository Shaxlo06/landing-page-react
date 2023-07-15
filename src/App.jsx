import './App.css';
import Header from './Components/header/Header';
import Hero from './Components/hero/Hero';
import HeroBottom from './Components/hero-bottom/HeroBottom';
import Weekend from './Components/weekend/Weekend';
import Sleep from './Components/sleep/Sleep';
import Services from './Components/services/Services';
import Past from './Components/past/Past';
import Come from './Components/come/Come';
import Booked from './Components/booked/Booked';
import Footer from './Components/footer/Footer';


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <HeroBottom/>
        <Weekend/>
        <Sleep/>
        <Services/>
        <Past/>
        <Come/>
        <Booked/>
        <Footer/>
    </div>
  );
}

export default App;
