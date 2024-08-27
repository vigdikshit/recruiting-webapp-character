import React, { useEffect, useState } from 'react'

const ClassDetails = ({ selectedClass, closeClassDetails }) => {


    return (
        <>
            <div>
                <h1> Class Minimum requirements </h1>
                <ul>{
                    Object.entries(selectedClass).map(([key, value]) => (
                        <li key={key}>
                            {key}:{value}
                        </li>
                    ))
                }
                </ul>
            </div>
            <div>
                <button onClick={closeClassDetails}>Close</button>
            </div>
        </>
    )
}

export default ClassDetails