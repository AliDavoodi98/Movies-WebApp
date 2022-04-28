import React, { Component } from 'react'
import './loginForm.css'

class LoginForm extends Component {
    handleSubmit = (e)=>{
        e.preventDefault();
    }

    render() { 
        return (
            <div className='loginform'>
                <h1>Login Form</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username" />
                        
                    </div>
                    <div className="form-group">
                        <label for="pass">Password</label>
                        <input type="text" className="form-control" id='pass' placeholder='Enter Your Password'/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;