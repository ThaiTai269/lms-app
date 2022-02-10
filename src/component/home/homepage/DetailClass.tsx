import React, { Component } from "react";
import "./home.css";
import "../content/table/detail_class.css"
import Sidebar from "../sidebar/sidebar";
import Detail_Class from "../content/home-detail";



export default class Home extends Component {


    render() {
        return (
            <div className="home">
                <Sidebar />
                <Detail_Class/>
            </div>
        )
    }
}