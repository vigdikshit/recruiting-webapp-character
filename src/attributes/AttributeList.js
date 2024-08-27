import React, { useEffect, useState } from 'react'
import Attribute from './Attribute';

const AttributeList = ({ attributeList }) => {

    const showAttributes = () => {
        return (
            <div>
                {attributeList.map(attr => (
                    <Attribute key={attr.id} attr={attr}/>
                ))}
                </div>
        )
    }

    return (
        <div>
            {showAttributes()}
        </div>
    )
}

export default AttributeList