import React, { useEffect, useState } from 'react'

const Attribute = ({attr, onUpdateAttrValue}) => {

    const [val, setVal] = useState(attr.value)

    useEffect(() => {
        onUpdateAttrValue(attr.id, val)
     }, [val])

    const updateValue = (action) => {
        if(action === '+') setVal(val+1)
        else if(action === '-') setVal(val-1)
    }    

    return (
        <div>
            {attr.name} : {val} 
            <button onClick={() => updateValue('+')}>+</button>
            <button onClick={() => updateValue('-')}>-</button>
        </div>
    )
}

export default Attribute