import React, {useState} from 'react';
import CardSlider from './CardSlider';


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
            I have a passion in designing and building website, playing with animation and UI effects in front-end web development. I am self-motivation, willing to learn new things & new skills. My hobbies are reading, traveling, and talking with people. Feel free to check out my skills & projects ! <br></br>
            <br></br>  
            In 2 years, I have built many websites from the online courses and from my school. <br></br>
            <br></br>  
            <u>Education</u> : <br></br>  
            &nbsp; • &nbsp; Bachelor of Engineering of Information & Communication Technology <br></br>  
            &nbsp; &nbsp; &nbsp; at Turku University of Applied Sciences <br></br> 
            <br></br>  
            <u>Achievements</u> : <br></br>  
            &nbsp; &nbsp; • &nbsp; Full Stack Open 2021, University of Helsinki & Houston Inc. <br></br>  
            &nbsp; &nbsp; • &nbsp; GraphQL, Full Stack Open 2021, University of Helsinki & Houston Inc.  <br></br> 
            &nbsp; &nbsp; • &nbsp; TypeScript, Full Stack Open 2021, University of Helsinki & Houston Inc.  <br></br> 
            &nbsp; &nbsp; • &nbsp; CI/CD, Full Stack Open 2021, University of Helsinki & Houston Inc.  <br></br> 
            </p>
            
          
            {/* <i class="fas fa-arrow-left icon_arrow" ></i>
                <div className="card_container">
                
                    {
                        skills && skills.map((skill, index) => {
                            let position = index > 0 ? "nextCard" : index === 0 ? 
                            "activeCard" : "prevCard";
                            return <SkillsCard key={index+1} skill={skill} index={index+1} cardStyle={position} />
                        } )
                    }
                    
                </div>
                <i class="fas fa-arrow-right icon_arrow" onClick={onSlide}></i> */}
                   <CardSlider skills = {skills} />
                   
        
        </div>
    );
};

export default About;