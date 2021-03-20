import React, { Component } from 'react';
import {MDCTopAppBar} from '@material/top-app-bar';

export default class AppBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div class="navigation-bar">
            <div class="container">
                <div class="main-navigation-flex">
                    <div class="left-side-item">
                            Issue Tracker<span class="author">by Mart Wozniak</span>
                    </div>

                    <div class="right-side-menu">
                        <a href="/contact">Contact</a>
                        <a href="/" class="ml-2">Login</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}