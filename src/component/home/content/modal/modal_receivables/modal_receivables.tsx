import React from "react";
import cancel from "../img/fi_x-cancel.png"
import "../modal_receivables.css"

function Modal_receivables ({ setIsOpen_modal_reaceivables } : {setIsOpen_modal_reaceivables : any}) {
    return(
        <div className="modal_receivables">
            <div className="receivables_overlay">

            </div>
            <div className="receivables_body">
                 <div className="receivables_body_control">
                    <img src={cancel} alt="" className="receivables_body_control_icon"onClick={() => setIsOpen_modal_reaceivables(false)}/>
                </div>
                <div className="receivables_body_content">
                    
                    <div className="receivables_body_code">
                        <div className="receivables_body_code_item">
                            <p className="receivables_body_code_name">Số phiếu:</p>
                            <p className="receivables_body_code_number">121235</p>
                        </div>
                        <div className="receivables_body_code_item">
                            <p className="receivables_body_code_name">Mã hóa đơn:</p>
                            {/* <p className="receivables_body_code_number">121235</p> */}
                        </div>
                    </div>
                    <div className="receivables_body_table">
                        <div className="receivables_body_table_heading">
                            <div className="receivables_body_table_heading_item">
                                <div className="receivables_table_heading_order">STT</div>
                                <div className="receivables_table_heading_code">Mã </div>
                                <div className="receivables_table_heading_content">Nội dung thu</div>
                                <div className="receivables_table_heading_semester">Học kỳ</div>
                                <div className="receivables_table_heading_price">Số tiền (VNĐ)</div>
                            </div>
                            
                        </div>

                        <div className="receivables_body_table_body">

                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Modal_receivables;