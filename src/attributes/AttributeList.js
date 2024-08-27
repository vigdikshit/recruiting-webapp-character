import React, { useEffect, useState } from 'react'
import Attribute from './Attribute';

const AttributeList = ({ attributeList, onUpdateAttrValue }) => {

    const showAttributes = () => {
        return (
            <div>
                {attributeList.map(attr => (
                    <Attribute key={attr.id} attr={attr} onUpdateAttrValue={onUpdateAttrValue}/>
                ))}
                </div>
        )
    }

    return (
        <div>
             <h1>Attributes</h1>
            {showAttributes()}
        </div>
    )
}

export default AttributeList