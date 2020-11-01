import React from 'react';
import "./style.scss";
import API from '../../utils/API';

function LoginForm(props) {
    let extraProps = {}
    if(props.className){ 
        extraProps.className = props.className;
    }
    let emailId = props.className ? props.className + "-login-email": "login-email";
    let emailHelpId = props.className ? props.className + "-login-email-help": "login-email-help";
    let passwordId = props.className ? props.className + "-login-password": "login-password";
    const handleSubmit = event => {
        // if the user hits enter or hits the button, this function will fire
        event.preventDefault();
        console.log("submit happened");
        API.testUserRouter()
        .then( data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
    }
    return (
        <form {...extraProps} onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor={emailId}>Email address</label>
                <input type="email" className="form-control" id={emailId} aria-describedby={emailHelpId} />
                <small id={emailHelpId} className="email-help-text form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor={passwordId}>Password</label>
                <input type="password" className="form-control" id={passwordId} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default LoginForm;