import React, {Component} from "react";
import FaChevronRight from "../img/chevron_big_right.png"

export default class Title_home extends Component{
    render(){
        return(
             <div className="content-address">
                <p className="address-previous">Quản lý học phí</p>
                <img src={FaChevronRight} className="title_home-icon" />
                <h1 className="address-present">Danh sách lớp học</h1>
            </div> 
        )
    }
}