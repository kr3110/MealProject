import React, { Component } from 'react';

class Login extends Component {
    goToDashboard(event) {
        event.preventDefault();
        var Router = require('react-router');
        Router.browserHistory.push('/profile');
    }

    render() {
        return (
            <div className="row" id="login">
                <h2>Login</h2>
                <button className="btn btn-default">
                <img id="linkedin" src={require('../public/linkedin.png')} alt="" />
                </button>
                <br/>
                <p id="space"><br/></p>
                <button className="btn btn-default">
                <img id="facebook" src={require('../public/facebook.png')} alt="" />
                </button>
                <br/>
                <button className="btn btn-default" id="login-button" onClick={this.goToDashboard.bind(this)}>
                LOGIN
                </button>
            </div>
        )
    }
}

export default Login;