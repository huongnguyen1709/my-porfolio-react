import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import './sass/main.scss';

// import Home from "./components/home/Home";
// import About from './components/about/About';
// import Projects from './components/projects/Projects';
// import Contact from './components/contact/Contact';
// import NavBar from "./components/home/NavBar";

import backgroundHome from './imgs/background/background_home.png'
import backgroundAbout from './imgs/background/background_about.jpeg'
import Background from "./components/Background";

function App() {
  // const location = useLocation();
  // const pathname = location.pathname
  // console.log(location)



  // const homepage = {
  //   backgroundImg:backgroundHome
  // }

  // const aboutpage = {
  //   backgroundImg: `linear-gradient(
  //     rgba(0, 0, 0, 0.5) 100%,
  //     rgba(0, 0, 0, 0.5) 100%
  //   ), ${backgroundAbout}`
  // }

  return (
    <Router>
      <Background />
        {/* <NavBar />
       <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        </Switch>  */}
    
    </Router>
   
  );
}

export default App;
