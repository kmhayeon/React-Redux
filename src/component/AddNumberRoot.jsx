import React, {Component} from "react";
import AddNumber from "../component/AddNumber";

export default class AddNumberRoot extends Component{
    render() {
        return (
            <div className="App">
                <h1>Add Number Root</h1>
                <AddNumber></AddNumber>
            </div>
        );
    }
}
