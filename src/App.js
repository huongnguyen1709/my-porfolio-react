import './sass/main.scss';

import Home from "./components/home/Home";
import About from './components/home/About';
import Projects from './components/home/Projects';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="container">   
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
