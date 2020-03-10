import { SV } from "../constants/actionType"

export const actAddSinhVien = (sinhVien) => {
    return {
        type: SV.ADD,
        sinhVien
    }
}

export const actDeleteSinhVien = (maSV) => {
    return {
        type: SV.DELETE,
        maSV
    }
}