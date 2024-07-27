import './App.css';
import About from './Components/About-Section/About';
import HeroSection from './Components/Hero-Section/HeroSection';
import Learning from './Components/Section-3/Learning';
import Footer from './Components/Section-4/Footer';
import Card from './Components/Section-Card/Card';


function App() {
  return (
   <>
     <div><HeroSection></HeroSection></div>
     <div><About></About></div>
     <div><Learning></Learning></div>
     <div><Card></Card></div>
     <div><Footer></Footer></div>
   
   </>
  );
}

export default App;
