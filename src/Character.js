import React, { useEffect, useState } from 'react'
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import './Character.css'
import AttributeList from './attributes/AttributeList';
import ClassList from './classes/ClassList';
import ClassDetails from './classes/ClassDetails';
import SkillList from './skills/SkillList';

const Character = () => {

    const [attributeList, setAttributeList] = useState([])
    const [classList, setClassList] = useState([])
    const [skillList, setSkillList] = useState([])
    const [selectedClass, setSelectedClass] = useState({})
    const [detailsClosed, setDetailsClosed] = useState(true)
    const [totalIntelligencePoints, setTotalIntelligencePoints] = useState(0)
    const [totalSkillPoints, setTotalSkillPoints] = useState(0)

    useEffect(() => {
        createAttrList()
        createSkillList()
    }, [])

    useEffect(() => {
        createClassList()
    }, [attributeList])

    useEffect(() => {
        if (skillList.length > 0) {
            setTotalSkillPoints(getTotalSkillPoints())
            checkSkill()
        }
    }, [skillList])

    const createAttrList = () => {
        const attrList = ATTRIBUTE_LIST.map((attr, index) => ({
            name: attr,
            id: index + 1,
            value: 10,
            modifierValue: 0
        }))
        setAttributeList(attrList)
    }

    const createClassList = () => {
        const cl = Object.entries(CLASS_LIST)
            .map(([key, classobj]) => ({
                name: key,
                criteriaPassed: checkClassCriteria(classobj),
                value: classobj
            }))
        setClassList(cl)
    }

    const createSkillList = () => {
        const skillList = SKILL_LIST.map((skill, index) => ({
            name: skill.name,
            id: index + 1,
            attrModifier: skill.attributeModifier,
            skillValue: 0,
            modifierValue: 0,
            total: 0
        }))
        setSkillList(skillList)
    }

    const getTotalSkillPoints = () => {
        return skillList ? skillList.find(skill => skill.attrModifier === 'Intelligence').modifierValue * 4 + 10 : 0
    }

    const checkSkill = () => {
        const totalIntellPoints = skillList.filter(skill => skill.attrModifier === 'Intelligence')
            .reduce((sum, skill) => sum + skill.total, 0)
        setTotalIntelligencePoints(totalIntellPoints)
    }

    const attributesMap = attributeList.reduce((map, {name, value}) => {
        map[name] = value;
        return map;
    }, {})


    const checkClassCriteria = (classobj) => {
        return Object.keys(attributesMap).every(key => classobj[key] <= attributesMap[key])
    }

    const updateAttributeValue = (id, value) => {
        setAttributeList(prevAttrList =>
            prevAttrList.map(attr => attr.id === id ? {...attr, value: value} : attr
            )
        )
    }

    const updateModifierValue = (a, value) => {
        setAttributeList(prevAttrList =>
            prevAttrList.map(attr => attr.id === a.id ? { ...attr, modifierValue: value } : attr
            )
        )
        setSkillList(prevSkillList =>
            prevSkillList.map(skill => skill.attrModifier === a.name ? {
                ...skill, modifierValue: value,
                total: value + skill.skillValue
            } : skill
            )
        )
    }

    const updateSkill = (id, skillVal) => {
        setSkillList(prevSkillList =>
            prevSkillList.map(skill => skill.id === id ? {
                ...skill, skillValue: skillVal
                , total: skillVal + skill.modifierValue
            } : skill
            )
        )
    }

    const setCurrentClass = (name) => {
        const cls = Object.entries(CLASS_LIST).find(([key]) => key === name)
        setSelectedClass(cls[1])
        setDetailsClosed(false)
    }

    const closeClassDetails = () => {
        setDetailsClosed(true)
    }

    return (
        <div className="container">
            <div className="section">
                <AttributeList attributeList={attributeList} onUpdateAttrValue={updateAttributeValue}  onUpdateModifier={updateModifierValue}/>
            </div>
            <div className="section">
                <ClassList classList={classList} setCurrentClass={setCurrentClass}/>
            </div>
            {!detailsClosed && <div className="section">
                <ClassDetails selectedClass={selectedClass} closeClassDetails={closeClassDetails}/>
            </div>}
            <div className="section">
                <SkillList skillList={skillList} onUpdateSkill={updateSkill} 
                    totalSkillPoints={totalSkillPoints} criteria={totalSkillPoints>totalIntelligencePoints}/>
            </div>
        </div>
    )
}

export default Character