import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Project from './Components/Project';
import Sliders from './Components/Sliders';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Experience from './Components/Experience';

function App() {
  return (
    <div className="container-fluid">
      <div className="MyApp">
        <Navbar />
        <div className="MainArea">
          <Home />
          <Project />
          <Skills />
          <Experience />
          <Sliders />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
