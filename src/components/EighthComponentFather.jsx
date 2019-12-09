import React from 'react'
import Child from "./EighthComponentChild";

/**
 * This component is an example of father element with callback function for your child element handle some action.
 */

export default (props) => {
    const notification = place => alert(`Ok son I'll let you go to ${place}`)

    return (
        <div>
            <Child notification={notification}/>
        </div>
    )
}