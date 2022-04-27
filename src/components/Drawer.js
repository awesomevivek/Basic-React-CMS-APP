import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useDispatch, useSelector } from "react-redux";
import {setDrawerOpenState} from '../redux/actions/appAction';
import AppMenu from './Menu/AppMenu';

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

  const AppDrawer = () => {
      const open = useSelector((state) => state.appState.open); 
      const dispatch = useDispatch();

      const toggleDrawer = () => {
          dispatch(setDrawerOpenState(!open));
      }

      return (
        <Drawer variant="permanent" open={open}>        
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: [1],
          }} 
        >
           <img src="assets/images/logo.png" alt="logo"/>
           <Tooltip title="Toggle View">
            <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <Divider />
        <List component="nav">
          <AppMenu />
          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer>
      )
  }

  export default AppDrawer;