import React from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import SkillsCard from './SkillsCard';

const CardSlider = ({skills}) => {
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 700
    }

    return (
        <div className='slider-container'>
            <MdChevronLeft size={40} className='slider-icon left' onClick={slideLeft} />
            <div id='slider'>
                {
                    skills && skills.map((skill, index) =>  <SkillsCard key={index+1} skill={skill} index={index+1} />)
                }
            </div>
            <MdChevronRight size={40} className='slider-icon right' onClick={slideRight} />
        </div>
    );
};

export default CardSlider;