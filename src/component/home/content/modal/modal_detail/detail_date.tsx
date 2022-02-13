import React from "react";
import calendar from "../img/u_calendar-alt.png";

function Detail_date(value:any){
    return(
        <div className="detail_date">
            <div className="form_detail-date">
                <p className="status_date">{value.status_date}</p>
                <div className="form_date">
                    <span className="date_target">{value.date_target}</span>
                    <img src={calendar} alt=""  className="select_date_icon"/>
                </div>
            </div>
            

        </div>
    )
}
export default Detail_date