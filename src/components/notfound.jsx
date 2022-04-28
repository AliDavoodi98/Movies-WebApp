import React, { Component } from 'react'
import './notfound.css'

class Notfound extends Component {
    state = {  } 
    render() { 
        return (
            <div className='notfoun'>
            <h1>Oops!...</h1>
            <h2>    Wrong input!</h2>
            <h3>              Please try again!</h3>
            </div>
        );
    }
}
 
export default Notfound;