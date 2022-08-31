import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "../../redux/types/tiketBookingType";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="mt-5">
        <button className="gheDuocChon"></button>{" "}
        <span className="text-light" style={{ fontSize: "30px" }}>
          {" "}
          Ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon"></button>{" "}
        <span className="text-light" style={{ fontSize: "30px" }}>
          {" "}
          Ghế đang đặt
        </span>
        <br />
        <button style={{ marginLeft: "0" }} className="ghe"></button>{" "}
        <span className="text-light" style={{ fontSize: "30px" }}>
          {" "}
          Ghế chưa đặt
        </span>
        <div className="mt-5">
          <table class="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          const action = {
                            type: HUY_GHE,
                            payload: {
                              soGhe: gheDangDat.soGhe,
                            },
                          };
                          this.props.dispatch(action);
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.ticketBookingReducer.danhSachGheDangDat,
});

export default connect(mapStateToProps)(ThongTinDatGhe);
