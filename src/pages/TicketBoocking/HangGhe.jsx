import React, { Component } from 'react'

export default class HangGhe extends Component {

    renderGhe=() =>{
        return
    }

  render() {
    return (
      <div className='text-light text-start ml-5 mt-3' style={{fontSize:30}}>
        {this.props.hangGhe.hang}{this.renderGhe()}
       
        </div>
    )
  }
}
