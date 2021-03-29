import React, { Component } from 'react';

class Counter extends Component {
    // Any data a component needs
    state = {
        count: 0,
        tags: []
        // imgUrl: "https://picsum.photos/200"
    };

    // we only use constructor if we wanna do handleIncrement() {};
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    renderTags() {
        if(this.state.tags.length === 0) return "There are no tags";

        return <ul>
        {/* If I don't add a key then the conosle will bitch at me */}
        { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
        </ul>;
    }

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
                <button onClick={this.handleIncrement} >Increment</button>
                { this.state.tags.length === 0 && "Please create a new tag!" }
                {this.renderTags()}
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