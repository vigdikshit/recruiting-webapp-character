import React, { useEffect, useState } from 'react'

const Attribute = ({attr}) => {

    const [val, setVal] = useState(attr.value)

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