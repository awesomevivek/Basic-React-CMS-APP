import * as React from "react";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import Login from "../modules/auth/Login";
import Main from './Main';
import Error from "../components/error/Error";
import withAppContext from "../containers/withAppContext";
import { createBrowserHistory } from 'history';
import ForgetPassword from "../modules/auth/ForgetPassword"; 
import ResetPassword from '../modules/auth/ResetPassword';

const history = createBrowserHistory();

const AuthSwith = ({logged}) => {  
    const location = useLocation();
    const pathName = location.pathname;
    if(logged) return (<Main />)
    if(pathName === '/forgetpassword') return <ForgetPassword />
    if(pathName === '/resetpassword') return <ResetPassword />
    return (<Login />)
}

const AppRouter = ({logged}, props) => {
    
    return (
            <Router history={history}>
                <Switch>                                                    
                    <Route 
                        path="/" 
                        component={() => (
                            <AuthSwith logged={logged} />
                        )} 
                    />  
                    <Route 
                        path="/" 
                        component={Login} 
                    />     
                    <Route path="*" component={Error} />
                                       
                </Switch> 
            </Router>                
    )
}

export default withAppContext(AppRouter);
