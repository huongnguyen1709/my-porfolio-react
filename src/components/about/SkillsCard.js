import React from 'react';

const SkillsCard = ({skill, index}) => {
    return (
        <div className={`card card--${index}`}>
            <div className={`card_picture card_picture--${index}`}></div>
            <div className="card_heading">
                <span className={`card_heading--span card_heading--span--${index}`}>{skill.name}</span>
            </div>
            <div className="card_details">
                <ul>
                    {
                        skill.languages && skill.languages.map((lang, index) => <li key={index}>{lang}</li> )
                    }
                </ul>
            </div> 
        </div>
    );
};

export default SkillsCard;