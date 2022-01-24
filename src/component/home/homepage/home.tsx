
import React, { Component } from "react";
import "./home.css";
import Sidebar from "../sidebar/sidebar";
import Content from "../content/home-content"


export default class Home extends Component {


    render() {
        return (
            <div className="home">
                <Sidebar />
                <Content />
            </div>
        )
    }
}