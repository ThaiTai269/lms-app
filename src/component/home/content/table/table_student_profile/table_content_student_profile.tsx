import React from "react";
import {Studentprofile} from "../../../data/data_student_profile";
import { Link } from "react-router-dom";
import see from "../img/xem cac khoan da dong.png"


function Table_content_student_profile () {
    return(
        <div className="summary_sheet_name_detail">
            <div className="summary_sheet_name_detail_heading">
                <p className="item_heading_summary_order">STT</p>
                <p className="item_heading_summary_number">Số phiếu</p>
                <p className="item_heading_summary_code">Mã hóa đơn</p>
                <p className="item_heading_summary_date">Ngày thu</p>
                <p className="item_heading_summary_price">Số tiền</p>
                <p className="item_heading_summary_form">Hình thức thu</p>
                <p className="item_heading_summary_unit">Đơn vị thu</p>
                <p className="item_heading_summary_detail">Chi tiết</p>
            </div>

            <div className="summary_sheet_name_detail_content">
                <ul className="item_content_summary">
                {Studentprofile.map((student, index)=>{
                            return(
                                <li className="item_content_summary_item">
                                    <span className="item_content_summary_item--order">
                                        {index + 1}
                                    </span>
                                    <span className="item_content_summary_item--number">
                                        {student.detail_number}
                                    </span>
                                    <span className="item_content_summary_item--code">
                                        {student.detail_code}
                                    </span>
                                    <span className="item_content_summary_item--date">
                                        {student.fall_day }
                                    </span>
                                    <span className="item_content_summary_item--price">
                                        {student.amount_of_money}
                                    </span>
                                    <span className="item_content_summary_item--unit">
                                        {student.form_of_collection ? "Tiền mặt" : "Online"}
                                    </span>
                                    <span className="item_content_summary_item--detail">
                                        {student.revenue_unit }
                                    </span>
                                   
                                    <Link className="item_content_summary_item--link_link" to={'/studentprofile'}>
                                    <a href="" className="item_content_summary_item--link">
                                        <img src={see} alt="" className="item_content_summary_item--icon" />
                                    </a>
                                    </Link>
                                    

                                </li>
                            )
                        })}
                </ul>
            </div>
        </div>
    )
}

export default Table_content_student_profile