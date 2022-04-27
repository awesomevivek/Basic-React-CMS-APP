import { combineReducers } from "@reduxjs/toolkit";
import { adminReducers } from "./adminReducer";
import { appReducers } from "./appReducer";

const reducers = combineReducers({
    adminList: adminReducers,
    appState: appReducers  
});

export default reducers;