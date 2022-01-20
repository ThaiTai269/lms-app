import React, {Component} from "react";
import Account from "./account/account";
import Title_home from "./title/title-home";

export default class Content extends Component{
    render(){
        return(
            <div className="home-content">
                <Account />
                <Title_home />
            </div>
        )
    }
}