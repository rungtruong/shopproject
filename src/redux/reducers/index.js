import { combineReducers } from "redux";
import SinhVienReducer from "./sinhvien"
import KhoaHocReducer from "./khoahoc";

const rootReducer = combineReducers({
    DSSV: SinhVienReducer,
    DSKH: KhoaHocReducer,
})

export default rootReducer;