import React, { useEffect, useState } from 'react'
import Skill from './Skill'

const SkillList = ({ skillList, onUpdateSkill, totalSkillPoints, criteria }) => {

    const showSkills = () => {
        return (
            <div>
                {skillList.map(skill => (
                    <Skill key={skill.id} skill={skill} onUpdateSkill={onUpdateSkill} criteria={criteria}/>
                ))}
            </div>
        )
    }

    return (
        <div>
            <div>
           <h1> Skills </h1>
            </div>
            <div>
                <h3>  Total skill points available : {totalSkillPoints}</h3>
            </div>
            {showSkills()}
        </div>
    )
}

export default SkillList