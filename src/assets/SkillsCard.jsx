import React from 'react'

const SkillsCard = (props) => {
    return (
        <div data-aos="zoom-in" className="skill-box">
            <img src={props.img} alt={props.name} />
            <h5>{props.name}</h5>
        </div>
    )
}

export default SkillsCard