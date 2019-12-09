import React, { useState } from 'react'

/**
 * This component is an example of hooks function component
 */
export default props => {
    const [number, setNumber] = useState(props.number)

    return(
        <div>
            <div>Number: { number }</div>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <button onClick={() => setNumber(number - 1)}>Degrade</button>
        </div>
    )
}