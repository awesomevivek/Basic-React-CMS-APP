import Listadminaccount from "../modules/admin/Listadminaccount";
import AddNewAdminAccount from "../modules/admin/AddNewAdminAccount";
import AdminInfo from "../modules/admin/AdminInfo";
import Listcustomeraccount from "../modules/user/Listcustomeraccount";
import Addcustomeraccount from "../modules/user/Addcustomeraccount";
import Customerinfo from "../modules/user/Customerinfo";
import Dashboard from "../modules/dashboard/Index";
import Managepromocode from '../modules/promo/Managepromocode';
import Managepromotype from '../modules/promo/Managepromotype';
import Manageprivilege from '../modules/admin/Manageprivilege';
import ChangePassword from '../modules/admin/ChangePassword';
import Logout from "../modules/admin/Logout"; 

export const AppRoutes = {
    DASHBOARD: {
        caption: 'Dashboard',
        path: '/',
        component: Dashboard,
        exact: true
    },
    LIST_ADMIN: {
        caption: 'Admin List',
        path: '/listadminaccount',
        component: Listadminaccount
    },
    ADD_ADMIN: {
        caption: 'Add Admin',
        path: '/AddNewAdminAccount',
        component: AddNewAdminAccount
    },
    ADD_INFO: {
        caption: 'Admin Info',
        path: '/admininfo',
        component: AdminInfo
    },
    MANAGE_PRIVILAGE: {
        caption: 'Manage Privilage',
        path: '/managePrivilege',
        component: Manageprivilege
    },
    LIST_CUSTOMER: {
        caption: 'List customer account',
        path: '/listcustomeraccount',
        component: Listcustomeraccount
    },
    ADD_CUSTOMER: {
        caption: 'ADD customer account',
        path: '/addcustomeraccount',
        component: Addcustomeraccount
    },
    CUSTOMER_INFO: {
        caption: 'Customer Info',
        path: '/customerinfo',
        component: Customerinfo
    },
    PROMO_TYPES: {
        caption: 'Manage Promo Types',
        path: '/managePromoTypes',
        component: Managepromotype
    },
    PROMO_CODE: {
        caption: 'Manage Promo Code',
        path: '/managePromoCode',
        component: Managepromocode
    },
    PROMO_MECHANISM: {
        caption: 'Manage Promo Mechanism',
        path: '/managePromoMachanism',
        component: Listcustomeraccount
    },
    PROMO_TBC: {
        caption: 'Manage Promo TBC',
        path: '/managePromoTBC',
        component: Listcustomeraccount
    },
    NOTIFICATION_SETTINGS: {
        caption: 'Notification Settings',
        path: '/notificationSettings',
        component: Listcustomeraccount
    },
    MY_ACCOUNTS: {
        caption: 'My Accounts',
        path: '/myAccount',
        component: Listcustomeraccount
    },
    CHANGE_PASSWORD: {
        caption: 'Change Password',
        path: '/changePassword',
        component: ChangePassword
    },
    LOGOUT: {
        caption: 'Change Password',
        path: '/logout',
        component: Logout
    }
}