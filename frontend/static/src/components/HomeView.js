import React, { Component } from 'react';
import AppBar from './AppBar';
import AppFooter from './AppFooter';
import { Link } from 'react-router-dom';

export default class HomeView extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: 'demo',
            password: 'demo'
        };
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    onLoginChange(e) {
        this.setState({
            login: e.target.value,
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value,
        });
    }
    loginUser() {
        console.log(this.state);
    }
    
    render() {
        return <div>
            <AppBar />
            <div class="center-app-box">
                <div class="main-app-box">
                    <img src="/static/img/logo.png" alt="Issue Tracker"/>
                    <input onChange={this.onLoginChange} placeholder="Login" value="demo" name="login" class="mt-2"/>
                    <input onChange={this.onPasswordChange} placeholder="Password" value="demo" name="password" type="password" class="mt-2"/>
                    <button onClick={this.loginUser} class="btn btn-primary mt-2">Sign In</button>
                </div>
            </div>
            <AppFooter />
            </div>;
    }
}