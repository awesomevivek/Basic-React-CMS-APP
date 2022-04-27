import * as React from 'react'
//import { makeStyles, createStyles } from '@mui/material/styles'

import List from '@mui/material/List'

import Dashboard from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import Person from '@mui/icons-material/Person'
import PersonAdd from '@mui/icons-material/PersonAdd'
import ListIcon from '@mui/icons-material/List'
import Notifications from '@mui/icons-material/Notifications'
import Settings from '@mui/icons-material/Settings'
import Campaign from '@mui/icons-material/Campaign'
import keyIcon from '@mui/icons-material/VpnKeyOutlined';
import promoIcon from '@mui/icons-material/LocalActivityOutlined';
import mnpromoIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import proIcon from '@mui/icons-material/BookOnlineOutlined';
import probIcon from '@mui/icons-material/TollOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: Dashboard,
  },
  {
    name: 'Admin Users',
    Icon: Person,
    items: [
      {
        name: 'List Admin',
        Icon: ListIcon,
        link: '/listadminaccount',
      },
      {
        name: 'Add Admin',
        Icon: PersonAdd,
        link: '/AddNewAdminAccount'
      }      
    ],
  },
  {
    name: 'Customer',
    Icon: PeopleIcon,
    items: [
      {
        name: 'List Customer',
        Icon: ListIcon,
        link: '/listcustomeraccount',
      },
      {
        name: 'Add Customer',
        Icon: PersonAdd,
        link: '/addcustomeraccount'
      }      
    ],
  },
  {
    name: 'Promos',
    Icon: Campaign,
    items: [
      {
        name: 'Manage Promo Type',
        Icon: promoIcon,
        link: '/managePromoTypes'
      },
      {
        name: 'Manage Promo code',
        Icon: mnpromoIcon,
        link: '/managePromoCode'
      },
      {
        name: 'Promotion mechanism',
        Icon: proIcon,
        link: '/managePromoMachanism'
      },
      {
        name: 'TBC',
        Icon: probIcon,
        link: '/managePromoTBC'
      },
    ]
  },
  {
    name: 'Notification Settings',
    link: '/notificationSettings',
    Icon: Notifications,
  },
  {
    name: 'Setting',
    Icon: Settings,
    items: [
      {
        name: 'Change Password',
        Icon: keyIcon,
        link: '/changePassword'
      },
      {
        name: 'Log Out',
        Icon: LogoutOutlinedIcon,
        link: '/logout'
      }
      
    ],
  },
]

const AppMenu = () => {

  return (
    <List component="nav" disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

export default AppMenu
