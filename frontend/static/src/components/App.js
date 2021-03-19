import React, {Component} from "react";
import { render } from "react-dom";
import AppBar from "./AppBar";
import AppFooter from "./AppFooter";
import HomePage from "./HomePage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <HomePage />
            </div>);
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);