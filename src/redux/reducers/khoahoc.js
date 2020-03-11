import { KH } from "../constants/actionType";

let DSKH=[];

const KhoaHocReducer =(state=DSKH, action)=>{
    switch (action.type) {
        case KH.GET:
            var updateState =[...action.danhSachKhoaHoc];
            return updateState;    
        default:
            return [...state];
    }
}

export default KhoaHocReducer;