import React, {Component} from "react";
import user from "../img/user_circle.png"
export default class Account extends Component{
    render(){
        return(
            <div className="content-account">
            <img src={user} className="account-avatar" />
            <p className="account-name">User Name</p>
            <a className="account-logout">Đăng xuất</a>
          </div>
        )
    }
}