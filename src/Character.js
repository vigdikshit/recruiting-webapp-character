import React, { useEffect, useState } from 'react'
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import './Character.css'
import AttributeList from './attributes/AttributeList';
import ClassList from './classes/ClassList';
import ClassDetails from './classes/ClassDetails';

const Character = () => {

    const [attributeList, setAttributeList] = useState([])
    const [classList, setClassList] = useState([])
    const [selectedClass, setSelectedClass] = useState({})
    const [detailsClosed, setDetailsClosed] = useState(true)

    useEffect(() => {
        createAttrList()
    }, [])

    useEffect(() => {
        createClassList()
    }, [attributeList])

    const createAttrList = () => {
        const attrList = ATTRIBUTE_LIST.map((attr, index) => ({
            name: attr,
            id: index + 1,
            value: 10,
            modifierValue: 0
        }))
        setAttributeList(attrList)
    }

    const attributesMap = attributeList.reduce((map, {name, value}) => {
        map[name] = value;
        return map;
    }, {})


    const checkClassCriteria = (classobj) => {
        return Object.keys(attributesMap).every(key => classobj[key] <= attributesMap[key])
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

    const updateAttributeValue = (id, value) => {
        setAttributeList(prevAttrList =>
            prevAttrList.map(attr => attr.id === id ? {...attr, value: value} : attr
            )
        )
    }

    const updateModifierValue = (id, value) => {
        setAttributeList(prevAttrList =>
            prevAttrList.map(attr => attr.id === id ? { ...attr, modifierValue: value } : attr
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
        </div>
    )
}

export default Character