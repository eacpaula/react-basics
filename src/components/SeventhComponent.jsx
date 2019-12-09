import React from 'react'

/**
 * This component is an example of build some array into a component
 */

const itens = ['item1', 'item2', 'item3', 'item4', 'item5']

export default (props) => {
    const buildItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {buildItens(itens)}
        </ul>
    )
}