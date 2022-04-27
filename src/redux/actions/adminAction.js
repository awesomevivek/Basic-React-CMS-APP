import { ActionTypes } from "../constants/actionTypes";

export const setAdmins = (admins) => {
    return {
        type: ActionTypes.SET_ADMINS,
        payload: admins
    }
}

export const selectedAdmin = (admin) => {
    return {
        type: ActionTypes.SELECTED_ADMIN,
        payload: admin
    }
}