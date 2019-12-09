import React, { Component } from 'react'

/**
 * This component is an example of component based in class
 */
export default class NinethComponent extends Component {
    render() {
        return <h1>{this.props.value || 'Default' }</h1>
    }
}