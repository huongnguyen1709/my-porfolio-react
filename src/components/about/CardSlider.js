/* eslint-disable no-restricted-globals */
import React from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import SkillsCard from './SkillsCard';

const CardSlider = ({skills}) => {
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        if(screen.width === 428 || screen.width < 428) {
            slider.scrollLeft = slider.scrollLeft - 328
        }
        if(screen.width === 375 || screen.width < 375) {
            slider.scrollLeft = slider.scrollLeft - 175
        }
        else slider.scrollLeft = slider.scrollLeft - 900
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        if(screen.width === 428 || screen.width < 428) {        
            slider.scrollLeft = slider.scrollLeft + 328
        }
        else if(screen.width === 375 || screen.width < 375) {        
            slider.scrollLeft = slider.scrollLeft + 175
        }
        else slider.scrollLeft = slider.scrollLeft + 900
    }

    return (
        <div className='slider-container'>
            <MdChevronLeft size={35} className='slider-icon left' onClick={slideLeft} />
            <div id='slider'>
                {
                    skills && skills.map((skill, index) =>  
                        <SkillsCard key={index+1} skill={skill} index={index+1} />
                    )
                }
            </div>
            <MdChevronRight size={35} className='slider-icon right' onClick={slideRight} />
        </div>
    );
};

export default CardSlider;