import React, { useEffect, useState } from 'react'
import ClassItem from './ClassItem';

const ClassList = ({ classList }) => {

    const showClasses = () => {
        return (
            <div>
                {classList.map((item, index) => (
                    <div key={index} >
                        <ClassItem classItem={item} />
                    </div>
                ))
                }
            </div>
        )
    }

    return (
        <div>
             <h1>Classes</h1>
            {showClasses()}
        </div>
    )
}

export default ClassList