import React, { Component } from 'react'

/**
 * This component is an example of component based in class
 */
export default class TenthComponent extends Component {
    state = {
        number: this.props.number
    }

    increment = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    degrade = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render(){
        return(
            <div>
                <div>Number: { this.state.number }</div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.degrade}>Degrade</button>
            </div>
        )
    }
}