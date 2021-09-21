import React from 'react';
import quizApp from '../../imgs/projects/quiz-app.png'
import dragdropColor from '../../imgs/projects/drag-drop-color.png'

const Projects = () => {
    return (
        <div className="projects">
            <h2 className="heading-projects">My Work</h2>

            <div className="projects_container">
                <div className="project">
                    <img src={quizApp} alt="Project 1" className="project_img" />
                    <h5 className="project_name">Quiz App</h5>
                    <div className="project_skill--1">React</div>
                    <div className="project_skill--2">TypeScript</div>
                    <div className="project_skill--3">Styled-component</div>
                    <button className="btn btn--view">View Demo</button>     
                    <button className="btn btn--github">Github</button>
                    
                </div>
                <div className="project">
                <img src={dragdropColor} alt="Project 2" className="project_img" />
                    <h5 className="project_name">Drag Drop Color</h5>
                    <div className="project_skill--1">React</div>
                    <div className="project_skill--2">CSS</div>
                 
                    <button className="btn btn--view">View Demo</button>     
                    <button className="btn btn--github">Github</button>
                </div>
                <div className="project">Project 3</div>
                <div className="project">Project 4</div>
                <div className="project">Project 5</div>
                <div className="project">Project 6</div>
            </div>
            
        </div>
    );
};

export default Projects;