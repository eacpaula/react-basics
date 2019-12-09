import React from 'react'

/**
 * This component is an example of child propagation to father element/component
 */
export default props => 
    <div>
        <button onClick={() => { props.notification('Shopping') }}>
            I'll go out dad
        </button>
    </div>