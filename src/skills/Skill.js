import React, { useEffect, useState } from 'react'

const Skill = ({ skill, onUpdateSkill, criteria }) => {

    const [skillVal, setSkillVal] = useState(skill.skillValue)

    useEffect(() => {
        console.log(criteria)
        onUpdateSkill(skill.id, skillVal)
    }, [skillVal, skill.modifierValue])

    const increment = () => {
        if((skill.attrModifier ==='Intelligence' && criteria) || skill.attrModifier !== 'Intelligence'){
            setSkillVal(skillVal + 1)
        }else {
            alert("You need more skill points! Upgrade intelligence to get more")
        }
    }

    const decrement = () => {
        setSkillVal(skillVal - 1)
    }

    return (
        <div>
            {skill.name} : {skillVal} (Modifier: {skill.attrModifier}) : {skill.modifierValue}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            total: {skill.total}
        </div>
    )
}

export default Skill