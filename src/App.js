import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './sass/main.scss';

import Home from "./components/home/Home";
import About from './components/home/About';
import Projects from './components/home/Projects';
import Contact from './components/home/Contact';

function App() {
  return (
    <Router>
      
       <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        </Switch> 
       
        {/* <About />
        <Projects />
        <Contact /> 
        <Footer /> */}
    
    </Router>
   
  );
}

export default App;
