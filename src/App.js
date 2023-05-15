import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Project from './Components/Project';
import Sliders from './Components/Sliders';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {

  return (
    <div className="container-fluid">
      <div className="MyApp">
        <Navbar />
        <div className="MainArea">
          <Home />
          <Project />
          <Skills />
          <Sliders />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
