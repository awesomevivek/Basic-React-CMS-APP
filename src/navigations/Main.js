import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {AppRoutes} from './Routes';
import ErrorBoundary from '../components/ErrorBoundary';
import CssBaseline from '@mui/material/CssBaseline';
import AppToolBar from '../components/Appbar';
import AppDrawer from '../components/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Main = () => {
    return (
        <Router>                    
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppToolBar />
                <AppDrawer />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        p: 2
                    }}
                >
                    <Toolbar />
                    <ErrorBoundary>  
                        <Switch>
                            {
                                Object.values(AppRoutes).map((route) => {
                                    return <Route key={route.path} path={route.path} exact={!!route.exact} component={route.component} />
                                })
                            }
                        </Switch>
                    </ErrorBoundary> 
                </Box> 
            </Box>                
        </Router>
    )
}

export default Main;
