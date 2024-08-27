import React, { useEffect, useState } from 'react'
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import './Character.css'
import AttributeList from './attributes/AttributeList';

const Character = () => {

    const [attributeList, setAttributeList] = useState([])

    useEffect(() => {
        createAttrList()
    }, [])

    const createAttrList = () => {
        const attrList = ATTRIBUTE_LIST.map((attr, index) => ({
                name: attr,
                id: index + 1,
                value: 10
        }))
        setAttributeList(attrList)
    }

    return (
        <div className="container">
            <div className="section">
                <AttributeList attributeList={attributeList}/>
            </div>
        </div>
    )
}

export default Character