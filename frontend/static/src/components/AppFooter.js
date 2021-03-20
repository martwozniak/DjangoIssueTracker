import React, { Component } from 'react';

export default class AppFooter extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return <div class="mt-4 p-2">
            <div class="container">
            <strong>This is Django Issue Tracker App made by Mart Wozniak</strong>
            <p>This project using: Django, Node, Bootstrap, webpack</p>
            </div>
        </div>;
    }
}