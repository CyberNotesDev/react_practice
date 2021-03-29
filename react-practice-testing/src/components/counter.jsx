import React, { Component } from 'react';

class Counter extends Component {
    // Any data a component needs
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }
    formatCount() {
        // This is called destucturing... It puts count as a variable for this.state
        // It would look like this const count = this.state.count;
        // It for easier use!
        const { count } = this.state
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;