import React, { useEffect, useState } from 'react'
import '../Character.css'

const ClassItem = ({ classItem }) => {

    const className = classItem.criteriaPassed ? 'red' : 'defaultColor'

    return (
        <div className={className}>
            {classItem.name}
        </div>
    )
}

export default ClassItem