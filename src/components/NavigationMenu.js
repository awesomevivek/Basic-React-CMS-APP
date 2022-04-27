import * as React from 'react';
import {forwardRef} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import {NavLink} from 'react-router-dom';
import List from '@mui/material/List';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';

const NavigationMenus = () =>  {
  const [open, setOpen] = React.useState(false);
  return (
  <React.Fragment>    
      <ListItem to="/listadminaccount" 
      component={forwardRef((props, ref) => <NavLink exact {...props} innerRef={ref} />)}
      onClick={() => setOpen(!open)}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Admin list" />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>    
      <ListItem to="/listcustomeraccount" 
      component={forwardRef((props, ref) => <NavLink exact {...props} innerRef={ref} />)}
      onClick={() => setOpen(!open)}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="User list" />
      </ListItem>
    <ListItem>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Promo" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </React.Fragment>
  )
}

export default NavigationMenus;
