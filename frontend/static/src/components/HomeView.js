import React, { Component } from 'react';
import AppBar from './AppBar';

export default class HomeView extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return <div>
            <AppBar />
            This is HomeView
            </div>;
    }
}