import React from 'react'

/**
 * This component is an example of the child of another component
 */
export default (props) =>
    <div>
        <p>
            {props.name}
            <strong>
                {props.lastname}
            </strong>
        </p>
    </div>