import React, { Component } from 'react';

class Counter extends Component {
    // Any data a component needs
    state = {
        count: 0,
        // imgUrl: "https://picsum.photos/200"
    };
    render() {
        return (
            <div>
                {/* <img src={this.state.imgUrl} alt="Random Photo"/> */}
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
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;