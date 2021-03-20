import React, { Component } from 'react';
import AppBar from './AppBar';
import AppFooter from './AppFooter';

export default class HomeView extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return <div>
            <AppBar />
            <div class="center-app-box">
                <div class="main-app-box">
                    <img src="/static/img/logo.png" alt="Issue Tracker"/>
                    <input placeholder="Login" value="demo" name="login" class="mt-2"/>
                    <input placeholder="Password" value="demo" name="password" type="password" class="mt-2"/>
                    <button onClick="" class="btn btn-primary mt-2">Sign In</button>
                </div>
            </div>
            <AppFooter />
            </div>;
    }
}