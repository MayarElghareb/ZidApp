
import About from './LandingPage/About/About';
import Featured from './LandingPage/FeaturedApps/Featured';
import Footer from './LandingPage/Footer/Footer';
import NavBar from './LandingPage/NavBar/Nav_Bar';
import Apps from './LandingPage/OurApps/Apps';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <About/>
    <Apps/>
    <Featured/>
    <Footer/>
    </div>
  );
}

export default App;
