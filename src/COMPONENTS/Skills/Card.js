import React from "react";

const Card = (props) => {
  return (
    <div className='skill-card btn_shadow'>
      <div className='skills-list'>
        {props.skills.map((skill, index) => (
          <div key={index} className='skill'>
            <div className='short'>{skill.title}</div>
            <div className='full'>{skill.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

