import React from 'react';
import "./style.scss";

function LoginForm(props) {
    let extraProps = {}
    if(props.className){ 
        extraProps.className = props.className;
    }
    let emailId = props.className ? props.className + "-login-email": "login-email";
    let emailHelpId = props.className ? props.className + "-login-email-help": "login-email-help";
    let passwordId = props.className ? props.className + "-login-password": "login-password";
    
    return (
        <form {...extraProps}>
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