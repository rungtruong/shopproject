import { KH } from "../constants/actionType"
import Axios from "axios"




export const actSaveAll = () => {
    return (dispatch) => {
        Axios({
            method: "GET",
            url: "http://5e686b32d426c00016b7da0c.mockapi.io/dskh"
        }).then(res => {
            console.log(res.data);
            dispatch(actGetAll(res.data));
        }).catch(err => {
            console.log(err);
        });
    }
}

export const actGetAll = (danhSachKhoaHoc) => {
    return {
        type: KH.GET, danhSachKhoaHoc
    }
}