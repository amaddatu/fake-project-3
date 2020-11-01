import React from 'react';
import LoginForm from '../components/LoginForm';

function Login(props){
    return (
        <div className="container">
            <h1>Login</h1>
            <LoginForm className="full-page-login" />
        </div>
    )
}
export default Login;