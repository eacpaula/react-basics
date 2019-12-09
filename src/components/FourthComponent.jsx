import React from 'react'

/**
 * this is an example of the common mistake, please don`t do it!
 */
// export default (props) => 
//     <div>
//         <h1>{props.title}</h1>
//         <p>{props.message}</p>
//     </div>
//     <div>
//         <h1>{props.title}</h1>
//         <p>{props.message}</p>
//     </div>

/**
 * Solution one, using another element to wrap the previous elements
 */
// export default (props) =>
//     <div>
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.message}</p>
//         </div>
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.message}</p>
//         </div>
//     </div>

/**
 * Solution two, using React.Fragment to wrap the previous elements
 */
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