import React from 'react'

/**
 * Multiple components in the same file
 */
const CompOne = props =>  
    <div>
        <h1>{props.title}</h1>
    </div>

const CompTwo = props =>  
    <div>
        <h1>{props.title}</h1>
    </div>

const CompThree = props =>  
    <div>
        <h1>{props.title}</h1>
    </div>

export { CompOne, CompTwo, CompThree }