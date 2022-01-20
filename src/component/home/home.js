import axios from "axios";
import React, { Component } from "react";
import "./home.css";
import Sidebar from "./sidebar/sidebar";
import Content from "./Content/home-content"

export default class Home extends Component {


    render() {
        return (
            <div className="homepg">
                <Sidebar />
                <Content /> 
            </div>
        )
    }
}