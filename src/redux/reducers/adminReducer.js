import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    admins: []
}
export const adminReducers = (state= initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ADMINS:            
            return {...state, adminList: payload};
        
        case ActionTypes.SELECTED_ADMIN:
            return {...state, selectedAdmin: payload}
    
        default:
            return state;
    }
}