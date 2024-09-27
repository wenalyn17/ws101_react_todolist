import React from "react";
import './navbar.css';

function Navbar(props) {
     const {name} = props;

     return (
        <div>
            <h1>Hello There!</h1>
            <h3> My name is {name}</h3>
        </div>
     )
}

export default Navbar;