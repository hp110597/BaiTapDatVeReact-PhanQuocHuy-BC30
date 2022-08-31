import { DAT_GHE, HUY_GHE } from "../types/tiketBookingType"


const stateDefault = {
    danhSachGheDangDat:[
        // {soGhe:1,gia:1000}
    ]

}

export const ticketBookingReducer=(state=stateDefault,action)=>{
    switch(action.type){
        case DAT_GHE:{
            let {ghe}=action.payload
            let danhSachGheDangDatUpdate=[...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe)
            if(index!==-1){
                danhSachGheDangDatUpdate.splice(index,1)
            }else{
                danhSachGheDangDatUpdate.push(ghe)
            }
            state.danhSachGheDangDat=danhSachGheDangDatUpdate
            return{...state}
        }
        case HUY_GHE:{
            let {soGhe}=action.payload
            let danhSachGheDangDatUpdate=[...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe===soGhe)
            if(index!==-1){
                danhSachGheDangDatUpdate.splice(index,1)
            }
            state.danhSachGheDangDat=danhSachGheDangDatUpdate
            return{...state}

        }
        default: return {...state}
    }
}

