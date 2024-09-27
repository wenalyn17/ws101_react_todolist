import { Component } from "react";

class HandlingClass extends Component {
    handleclass() {
        console.log("i am the class!")
    }
    render() {
        return (
            <>
            <h1> This is how to handle events in class Components </h1>
            <button onClick={this.handleclass}>Click me now!</button>
            </>
        )
    }
}
export default HandlingClass