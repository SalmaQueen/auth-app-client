import React, { Component } from 'react'
import '../css/Button.css'

export default class FloatingButton extends Component {
    
    render() {
        return (
            <div className="content">
                <button className="btn btn-secondary bg-dark text-white edit">Make a request</button>

            </div>
        )
    }
}
