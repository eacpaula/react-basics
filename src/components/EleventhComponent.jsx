import React from 'react'

/**
 * This component is an example of class hooks component
 */
export default class EleventhComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            number: this.props.number
        }
    }

    render(){
        return(
            <div>
                <div>Number: { this.state.number }</div>
                <button onClick={() => this.setState({number: this.state.number + 1})}>Increment</button>
                <button onClick={() => this.setState({number: this.state.number - 1})}>Degrade</button>
            </div>
        )
    }
}