import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import ContactPage from './ContactPage';
import HomeView from './HomeView';

export default class HomePage extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return <Router>
            <Switch>
                <Route path="/" component={HomeView}></Route>
                <Route path="/contact" component={ContactPage}></Route>
            </Switch>
        </Router>;
    }
}