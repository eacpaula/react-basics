import React from 'react'

/**
 * This component is an example of the ways that you can export multiple components in the same file
 */
export const CompOne = (props) =>
    <React.Fragment>
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
    </React.Fragment>

export const CompTwo = (props) =>
    <React.Fragment>
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
    </React.Fragment>

export default (props) =>
    <React.Fragment>
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
    </React.Fragment>