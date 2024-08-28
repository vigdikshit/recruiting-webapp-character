import React, { useEffect, useState } from 'react'

const Attribute = ({attr, onUpdateAttrValue, onUpdateModifier}) => {

    const [val, setVal] = useState(attr.value)
    const [prevVal, setPrevVal] = useState(attr.value)
    const [modifierValue, setModifierValue] = useState(attr.modifierValue)
    const [increment, setIncrement] = useState(false)
    const [decrement, setDecrement] = useState(false)

    useEffect(() => {
        onUpdateAttrValue(attr.id, val)
     }, [val]) 

    useEffect(() => {
        onUpdateModifier(attr, modifierValue)
    }, [modifierValue])

    useEffect(() => {
        if (increment) {
            if (val > 10 && val === prevVal + 2) {
                setPrevVal(val)
                setModifierValue(modifierValue + 1)
            } else if (val < 10) {
                setModifierValue(modifierValue + 1)
            } else if (val === 10) {
                setModifierValue(0)
                setPrevVal(10)
            }
        } else if (decrement) {
            if (val > 10 && val === prevVal - 2) {
                setPrevVal(val)
                setModifierValue(modifierValue - 1)
            } else if (val < 10) {
                setModifierValue(modifierValue - 1)
            } else if (val === 10) {
                setModifierValue(0)
                setPrevVal(10)
            }
        }

    }, [increment, decrement, val])

    const incrementValue = () => {
        setVal(val + 1)
        setDecrement(false)
        setIncrement(true)
    }

    const decrementValue = () => {
        setVal(val - 1)
        setIncrement(false)
        setDecrement(true)
    }

    return (
        <div>
            {attr.name} : {val} (Modifier: {attr.modifierValue})
            <button onClick={() => incrementValue()}>+</button>
            <button onClick={() => decrementValue()}>-</button>
        </div>
    )
}

export default Attribute