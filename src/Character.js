import React, { useEffect, useState } from 'react'
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import './Character.css'
import AttributeList from './attributes/AttributeList';
import ClassList from './classes/ClassList';

const Character = () => {

    const [attributeList, setAttributeList] = useState([])
    const [classList, setClassList] = useState([])

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
            value: 10
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
                criteriaPassed: checkClassCriteria(classobj)
            }))
        setClassList(cl)
    }

    const updateAttributeValue = (id, value) => {
        setAttributeList(prevAttrList =>
            prevAttrList.map(attr => attr.id === id ? {...attr, value: value} : attr
            )
        )
    }

    return (
        <div className="container">
            <div className="section">
                <AttributeList attributeList={attributeList} onUpdateAttrValue={updateAttributeValue}/>
            </div>
            <div className="section">
                <ClassList classList={classList} />
            </div>
        </div>
    )
}

export default Character