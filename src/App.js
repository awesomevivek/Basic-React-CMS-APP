import React, { useState } from "react";
import AppRouter from "./navigations/AppRouter";
import AuthConext from './context/AuthContext';
import AuthManager from './modules/auth/service/AuthManager';

const App = () => {
    const [logged, setLogged] = useState(AuthManager.isLoggedIn());

    const changeLoggedState = (state) => {
        setLogged(state);
    }

    return (
        <AuthConext.Provider value={{logged, changeLoggedState}}>
            <AppRouter />
        </AuthConext.Provider>    
    )
}

export default App;