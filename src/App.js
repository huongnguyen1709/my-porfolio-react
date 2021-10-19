import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import './sass/main.scss';

import Home from "./components/home/Home";
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import NavBar from "./components/NavBar";
import Particles from './components/Particles';
import Footer from "./components/contact/Footer";

function App() {
  const location = useLocation();
  const pathname = location.pathname

  return (
    <div className='container'>
      <NavBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch> 

      {/* <Footer /> */}

      <Particles />
    </div>
    // <div className={
    //   pathname === '/' ? 'background_homepage' : 
    //   pathname === '/about' ? 'background_about' : 
    //   pathname === '/projects' ? 'background_projects' : 
    //   pathname === '/contact' ? 'background_contact' : null
    // }>
      
      
    // </div>
   
  );
}

export default App;
