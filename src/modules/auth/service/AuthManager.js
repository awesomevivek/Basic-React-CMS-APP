import LocalStorageCache from "../../../utils/LocalStorageCache";
import Cookies from 'js-cookie';

const logout = (redirectLoginForm = true) => {
    LocalStorageCache.clearCache();
    redirectLoginForm && AuthManager.logoutEvent();
};

const checkLogin = () => {
    return Boolean(Cookies.get('access-token'))
}

const setAccessToken = (token) => {
    Cookies.set('login_success', true);
    Cookies.set("access-token", token);
}

const isLoggedIn = () => checkLogin()

const AuthManager = {
    logout,
    isLoggedIn,
    setAccessToken,
    logoutEvent: () => {}
};

export default AuthManager;