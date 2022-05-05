import React, {useState} from 'react';
import CardSlider from './CardSlider';

import Footer from "../Footer";


const About = () => {
    const [skills, setSkills] = useState([
        {
            name: 'Front-end',
            languages: ['HTML', 'CSS - SASS', 'JavaScript - React', 'Redux - React Router', 'TypeScript', 'Web Accessibility']
        },

        {
            name: 'Back-end',
            languages: ['Nodejs', 'Express', 'REST API']
        },

        {
            name: 'Database',
            languages: ['Firebase', 'MongoDB']
        },

        {
            name: 'Testing',
            languages: ['Jest', 'Cypress']
        }
    ])

    return (
        <div className='about'>
            <h2 className="heading-about">About Me</h2>
            <p className="introduce">Hi, I'm Huong. 
            I have a passion in designing and building website, playing with animation and UI effects in front-end web development. I am self-motivation and optimistic that promote myself to overcome the problem without
giving up. I am curious and constantly learning to keep myself updated. My hobbies are reading, traveling, and talking with people. <br></br>
            <br></br>  
            Feel free to check out my skills & projects !
            <br></br>  
            <u>Education</u> : <br></br>  
            &nbsp; • &nbsp; Bachelor of Engineering of Information & Communication Technology at Turku University of Applied Sciences <br></br> 
            <br></br>  
            <u>Achievements</u> : <br></br>  
            &nbsp; &nbsp; • &nbsp; Full Stack Open 2021, University of Helsinki & Houston Inc. <br></br>  
            &nbsp; &nbsp; • &nbsp; GraphQL, Full Stack Open 2021, University of Helsinki & Houston Inc.  <br></br> 
            &nbsp; &nbsp; • &nbsp; TypeScript, Full Stack Open 2021, University of Helsinki & Houston Inc.  <br></br> 
            &nbsp; &nbsp; • &nbsp; CI/CD, Full Stack Open 2021, University of Helsinki & Houston Inc.  <br></br> 
            </p>
    
            <CardSlider skills = {skills} />

            <Footer />
        
        </div>
    );
};

export default About;