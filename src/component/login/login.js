import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from "../img/Frame.png";
import user from "../img/Union.png";
import pass from "../img/shield-keyhole-line.png"
import "./login.css";


export default class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        };
        console.log(data);
        
    };



    render() {
        return (
            <div className="login">
                <img class="logo" src={logo} alt="logo"/>
            <form className="form" onSubmit={this.handleSubmit}>
                <h1>Đăng nhập</h1>

                <div className="form-group">
                    <label class="user-lb">Tên đăng nhập</label>
                    <input id="email" type='email' className="form-control"
                    onChange={e => this.email = e.target.value}>
                    
                    </input>
                </div>

                <div className="form-group">
                    <label class="user-ps">Mật khẩu</label>
                    <input id="password" type='password' className="form-control"
                    onChange={e => this.password = e.target.value}>
                   
                    </input>
                </div>
                <p className="forgot-pw">
                    <Link className="forgot-pw" to={'/forgot'}>Quên mật khẩu?</Link>
                </p>
                <Link className="homepg" to={'/home'}><button className="btn-login">Đăng nhập</button></Link>

            </form>
            </div>

        )
    }
}


