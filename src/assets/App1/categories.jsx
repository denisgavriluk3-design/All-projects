import React, { Component } from 'react'

export class categories extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            Categories: [{
                key: 'all',
                name: 'все'
            },
            {
                key: 'chairs',
                name: 'стулья'
            },
            {
                key: 'tables',
                name: 'столи'
            },
            {
                key: 'sofa',
                name: 'девани'
            },
            {
                key: 'light',
                name: 'свет'
            },]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.Categories.map(el => (
                    <div key={el.key} 
                    onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default categories