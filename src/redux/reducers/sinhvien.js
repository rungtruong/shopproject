import { SV } from "../constants/actionType";

let DSSV = [{MaSV:'1', HoTen:'Forest',Tuoi:"18", Email:"forest.truong@styl.solutions"}];

const SinhVienReducer = (state = DSSV, action) => {
    switch (action.type) {
        case SV.ADD:
            const sinhVien = action.sinhVien;
            var updateState = [...state, sinhVien];
            return updateState;
        case SV.DELETE:
            const maSV = action.maSV;
            updateState = [...state];
            const index = updateState.findIndex(e => e.MaSV === maSV);
            updateState.splice(index, 1);
            return updateState;
        default:
            return [...state];
    }
}
export default SinhVienReducer;