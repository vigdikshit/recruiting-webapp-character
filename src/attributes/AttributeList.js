import React, { useEffect, useState } from 'react'
import Attribute from './Attribute';

const AttributeList = ({ attributeList, onUpdateAttrValue, onUpdateModifier }) => {

    const showAttributes = () => {
        return (
            <div>
                {attributeList.map(attr => (
                    <Attribute key={attr.id} attr={attr} onUpdateAttrValue={onUpdateAttrValue} onUpdateModifier={onUpdateModifier}/>
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