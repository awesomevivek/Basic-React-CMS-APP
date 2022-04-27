import React from 'react';

const AuthContext = React.createContext({
    logged: false,
    changeLoggedState: () => {}
});

export default AuthContext;
