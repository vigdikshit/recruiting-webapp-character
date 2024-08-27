import React, { useEffect, useState } from 'react'
import '../Character.css'

const ClassItem = ({ classItem, setCurrentClass }) => {

    const className = classItem.criteriaPassed ? 'red' : 'defaultColor'

    const showClassDetails = () => {
        setCurrentClass(classItem.name)
    }

    return (
        <div className={className}>
            <div onClick={showClassDetails}>{classItem.name}</div>
        </div>
    )
}

export default ClassItem