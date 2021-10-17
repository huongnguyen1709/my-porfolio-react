import React from 'react';
import {
    Switch,
    Route,
    useLocation
  } from "react-router-dom";

  import Home from "./home/Home";
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import NavBar from "./home/NavBar";

import backgroundHome from '../imgs/background/background_home.png'
import backgroundAbout from '../imgs/background/background_about.jpeg'
import Particles from './Particles';

const Background = () => {
    const location = useLocation();
    const pathname = location.pathname
    console.log(pathname)

 

    return (

     <div className={
            pathname === '/' ? 'background_homepage' : 
            pathname === '/about' ? 'background_about' : 
            pathname === '/projects' ? 'background_projects' : 
            pathname === '/contact' ? 'background_contact' : null
            }>
          
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
};

export default Background;