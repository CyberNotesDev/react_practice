import React, { Component } from 'react';

class Counter extends Component {
    // Any data a component needs
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <span>{this.state.count}</span>
                <button>Increment</button>
            </div>
        );
    }
    formatCount() {
        return this.state.count === 0 ? "Zero" : this.state.count;
    }
}

export default Counter;