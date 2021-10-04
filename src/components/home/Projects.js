import React from 'react';
import quizApp from '../../imgs/projects/quiz-app.png'
import dragdropColor from '../../imgs/projects/drag-drop-color.png'
import marioBlog from '../../imgs/projects/mario-blog.png'
import NavBar from './NavBar';

const Projects = () => {
    return (
        <div className="projects">
            <NavBar />
            <h2 className="heading-projects">My Work</h2>

            <div className="projects_container">
                <div className="project">
                    <img src={quizApp} alt="Quiz-App" className="project_img" />
                    <h5 className="project_name">Quiz App</h5>
                    <div className="project_skill--1">React</div>
                    <div className="project_skill--2">TypeScript</div>
                    <div className="project_skill--3">Styled-component</div>
                    <button className="btn btn--view">View Demo</button>     
                    <button className="btn btn--github">Github</button>
                    
                </div>
                <div className="project">
                <img src={dragdropColor} alt="Drag-Drop-Color" className="project_img" />
                    <h5 className="project_name">Drag Drop Color</h5>
                    <div className="project_skill--1">React</div>
                    <div className="project_skill--2">CSS</div>
                 
                    <button className="btn btn--view">View Demo</button>     
                    <button className="btn btn--github">Github</button>
                </div>
                <div className="project">
                <img src={marioBlog} alt="Mario-Blog" className="project_img" />
                    <h5 className="project_name">Mario Blog</h5>
                    <div className="project_skill--1">React</div>
                    <div className="project_skill--2">Redux</div>
                    <div className="project_skill--3">React Router</div>
                    <div className="project_skill--4">Firebase</div>
                 
                    <button className="btn btn--view">View Demo</button>     
                    <button className="btn btn--github">Github</button>
                </div>
                
            </div>
            
        </div>
    );
};

export default Projects;