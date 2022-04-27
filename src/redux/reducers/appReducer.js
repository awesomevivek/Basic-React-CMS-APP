import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    open: true 
}
export const appReducers = (state= initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_DRAWER_OPEN:            
            return {...state, open: payload};
    
        default:
            return state;
    }
}