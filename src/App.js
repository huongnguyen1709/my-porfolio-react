import {
  Switch,
  Route,
} from "react-router-dom";

import './sass/main.scss';

import Home from "./components/home/Home";
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import NavBar from "./components/NavBar";
import Particles from './components/Particles';

function App() {

  return (
    <div className='container'>
      <NavBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch> 

      <Particles />
    </div>
 
  );
}

export default App;
