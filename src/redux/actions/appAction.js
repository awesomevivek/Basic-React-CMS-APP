import { ActionTypes } from "../constants/actionTypes";

export const setDrawerOpenState = (open) => {
    return {
        type: ActionTypes.SET_DRAWER_OPEN,
        payload: open
    }
}