import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
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
            <tbody>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
