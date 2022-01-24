import { Component, ReactNode } from "react";
import caret_down from "../img/caret_down.png";
import "./table-list-class.css";
import icon_button from "../img/icon button.png";

export default class Table_list_class extends Component{
    render() {
        return(
            <div className="table_content">
                <div className="table_content_content">
                <div className="table_heading_list_class">
                    <div className="table_heading_nav">
                        <div className="table_heading_select">
                    <span className="table_heading_title">Hệ đào tạo</span>
                    <div className="table_heading_form_select">
                        <span className="select_name">Theo tín chỉ </span>
                        <img src={caret_down} className="select_icon_img"/>
                        <div className="from_select_list">
                            <ul className="select_list">
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Theo tín chỉ</a> 
                                </li>
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Theo tháng</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                        </div>

                        <div className="table_heading_select">
                    <span className="table_heading_title">Niên khóa</span>
                    <div className="table_heading_form_select">
                        <span className="select_name">Chọn niên khóa</span>
                        <img src={caret_down} className="select_icon_img"/>
                        <div className="from_select_list">
                            <ul className="select_list">
                                <li className="select_item">
                                   <a href="#" className="select_item_link">2020 - 2021</a> 
                                </li>
                                <li className="select_item">
                                   <a href="#" className="select_item_link">2019 - 2020</a> 
                                </li>
                                <li className="select_item">
                                   <a href="#" className="select_item_link">2018 - 2019</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                        </div>

                        <div className="table_heading_select">
                    <span className="table_heading_title">Khoa</span>
                    <div className="table_heading_form_select">
                        <span className="select_name">Chọn khoa</span>
                        <img src={caret_down} className="select_icon_img"/>
                        <div className="from_select_list">
                            <ul className="select_list">
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Quản trị kinh doanh</a> 
                                </li>
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Kế toán - kiểm toán</a> 
                                </li>
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Tài chính ngân hàng</a> 
                                </li>
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Kinh tế đối ngoại</a> 
                                </li>
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Hệ thống thông tin</a> 
                                </li>
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Tất cả</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                        </div>

                        <div className="table_heading_select">
                    <span className="table_heading_title">Ngành</span>
                    <div className="table_heading_form_select">
                        <span className="select_name">Chọn nghành</span>
                        <img src={caret_down} className="select_icon_img"/>
                        <div className="from_select_list">
                            <ul className="select_list">
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Kiểm toán</a> 
                                </li>
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Kế toán</a> 
                                </li>
                                <li className="select_item">
                                   <a href="#" className="select_item_link">Tất cả</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                        </div>

                        <div className="table_heading_search">

                        </div>
                    </div>
                    <input type='text' className="heading_search_input" placeholder="Nhập tên hoặc mã lớp học">
                    </input>
                
                </div>
                </div>
                
                <div className="table_content_list_class">
                <div className="content_list_class__heading">
                        <p className="content_list_class__heading_item">STT</p>
                        <p className="content_list_class__heading_item">Mã lớp</p>
                        <p className="content_list_class__heading_item">Tên lớp</p>
                        <p className="content_list_class__heading_item">Số lượng biểu phí</p>
                        <p className="content_list_class__heading_item">Ngày cập nhật</p>
                    </div>
                    <div className="content_list_class">
                   
                    <div className="content_list_class__content">
                        <p className="content_list_class__content_item__id_class">1</p>
                        <p className="content_list_class__content_item__code_class">19 123 03A</p>
                        <p className="content_list_class__content_item__name_class">KT_19A</p>
                        <p className="content_list_class__content_item__quanity_class">1</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content bg_light_grey">
                        <p className="content_list_class__content_item__id_class">2</p>
                        <p className="content_list_class__content_item__code_class">19 123 03B</p>
                        <p className="content_list_class__content_item__name_class">KT_19B</p>
                        <p className="content_list_class__content_item__quanity_class">2</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content">
                        <p className="content_list_class__content_item__id_class">3</p>
                        <p className="content_list_class__content_item__code_class">19 123 03A</p>
                        <p className="content_list_class__content_item__name_class">KT_19A</p>
                        <p className="content_list_class__content_item__quanity_class">1</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content bg_light_grey">
                        <p className="content_list_class__content_item__id_class">4</p>
                        <p className="content_list_class__content_item__code_class">19 123 03B</p>
                        <p className="content_list_class__content_item__name_class">KT_19B</p>
                        <p className="content_list_class__content_item__quanity_class">2</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content">
                        <p className="content_list_class__content_item__id_class">5</p>
                        <p className="content_list_class__content_item__code_class">19 123 03A</p>
                        <p className="content_list_class__content_item__name_class">KT_19A</p>
                        <p className="content_list_class__content_item__quanity_class">1</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content bg_light_grey">
                        <p className="content_list_class__content_item__id_class">6</p>
                        <p className="content_list_class__content_item__code_class">19 123 03B</p>
                        <p className="content_list_class__content_item__name_class">KT_19B</p>
                        <p className="content_list_class__content_item__quanity_class">2</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content">
                        <p className="content_list_class__content_item__id_class">1</p>
                        <p className="content_list_class__content_item__code_class">19 123 03A</p>
                        <p className="content_list_class__content_item__name_class">KT_19A</p>
                        <p className="content_list_class__content_item__quanity_class">1</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content bg_light_grey">
                        <p className="content_list_class__content_item__id_class">8</p>
                        <p className="content_list_class__content_item__code_class">19 123 03B</p>
                        <p className="content_list_class__content_item__name_class">KT_19B</p>
                        <p className="content_list_class__content_item__quanity_class">2</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    </div>
                    
                </div>
                <div className="table_footer_list_class"></div>
                </div>
                
            
        )
    }
}