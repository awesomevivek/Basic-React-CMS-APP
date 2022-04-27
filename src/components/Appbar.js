import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from "react-redux";
import {setDrawerOpenState} from '../redux/actions/appAction';
import Cookies from "js-cookie";
import { withRouter, useHistory } from 'react-router-dom';
import withAppContext from "../containers/withAppContext";

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const AppToolBar = ({changeLoggedState}) => {
      const history = useHistory();
      const open = useSelector((state) => state.appState.open); 
      const dispatch = useDispatch();

      const toggleDrawer = () => {
        dispatch(setDrawerOpenState(!open));
      }

      const handleLogout = () => {
          Cookies.remove('access-token');
          changeLoggedState(false);
          history.push('/');
      }

      return (
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              
            </Typography>
            <Tooltip title="Logout">
                <IconButton color="inherit" onClick={() => handleLogout()}>
                    <LogoutIcon />
                </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      )
  }

  export default withRouter(withAppContext(AppToolBar));
