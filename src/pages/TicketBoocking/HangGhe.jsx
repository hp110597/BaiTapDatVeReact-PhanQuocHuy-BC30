import React, { Component } from "react";
import { connect } from 'react-redux';
import { DAT_GHE } from "../../redux/types/tiketBookingType";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;

      //Trạng thái ghế đã được người khác đặt rồi
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }


      //Xét trạng thái ghế đang chọn 
      let cssGheDangDat=""  
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe)
      if(indexGheDangDat !== -1){
        cssGheDangDat='gheDangChon'

      }
      

      return (
        <button onClick={()=>{
          const action = {
            type:DAT_GHE,
            payload:{
              ghe

            }
          }
          this.props.dispatch(action)
      

        }} disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
          {ghe.soGhe}
        </button>
      );
    });
  };


  renderSoHang=()=>{
    return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
      return <button className="rowNumber" key={index}>{hang.soGhe}</button>
    })
  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className="ms-4">
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
      </div>;
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-start ml-5 mt-1" style={{ fontSize: 30 }}>
        {this.renderHangGhe()}
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.ticketBookingReducer.danhSachGheDangDat
  }
}






export default connect(mapStateToProps)(HangGhe)