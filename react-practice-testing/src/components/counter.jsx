import React, { Component } from 'react';

class Counter extends Component {
    // Any data a component needs
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
        // imgUrl: "https://picsum.photos/200"
    };
    render() {

        let myStyle = {
            fontWeight: 'bold',
            fontSize: 50,
            backgroundColor: 'lightBlue'
        }

        if(this.state.count === 0) {
            myStyle.backgroundColor = "yellow";
        }

        return (
            <div>
                {/* <img src={this.state.imgUrl} alt="Random Photo"/> */}
                <span style={ myStyle }>{this.formatCount()}</span>
                <button>Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li>{ tag }</li>) }
                </ul>
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