import { combineReducers } from "redux";
import SinhVienReducer from "./sinhvien"

const rootReducer = combineReducers({
    DSSV: SinhVienReducer
})

export default rootReducer;