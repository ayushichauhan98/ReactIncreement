import React, { Component } from 'react';
export default class App extends Component {
    constructor(props) {
        super(props)
        console.log('construct called...')
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <>
                <h1>Hello App is here class based Component</h1>
                <p>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.handleIncrement}>+</button> |
                    | <button onClick={this.handleDecrement}>-</button>
                </p>
                <hr />

            </>
        )

    }
    handleIncrement = () => {
        let icount = this.state.count
        icount++;
        this.setState({
            count: icount
        })
    }
    handleDecrement = () => {
        let icount = this.state.count
        icount--;
        if (icount >= 0) {
            this.setState({
                count: icount
            })
        } else {
            alert("value must be greater than Zero(0)")
        }
    }

}