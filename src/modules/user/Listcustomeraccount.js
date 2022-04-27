import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { setAdmins, selectedAdmin } from "../../redux/actions/adminAction";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Tables from '../../components/Table/Index';
import BreadCrumbs from "../../components/Breadcrumbs";

const Listcustomeraccount = () => {
  const adminList = useSelector((state) => state.adminList.adminList);
  const dispatch = useDispatch();
  const history = useHistory();

  const columns = [
    {
      id: 'userId',
      label: 'User ID',
      styles: {width: '15%', fontWeight: 'bold'}
    },
    {
      id: 'name',
      label: 'Name',
      styles: {width: '25%', fontWeight: 'bold'}
    },
    {
      id: 'email',
      label: 'Email',
      styles: {width: '25%', fontWeight: 'bold'}
    },
    {
      id: 'phone',
      label: 'Phone',
      styles: {width: '15%', fontWeight: 'bold'}
    },
    {
      id: 'OnBoardingStatus',
      label: 'On Boarding Status',
      styles: {width: '10%', fontWeight: 'bold'}
    },
    {
      id: 'actions',
      label: 'Action',
      styles: {width: '10%', fontWeight: 'bold'}
    }
  ];

  const fetchAdminUsers = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/users")
      .catch((error) => {
        console.log("Error: ", error);
      });
    dispatch(setAdmins(response.data));
  };

  useEffect(() => {
    fetchAdminUsers();
    dispatch(selectedAdmin(null));
  }, []);

  const handleAdminSelect = (e, admin) => {
    e.preventDefault();
    dispatch(selectedAdmin(admin));
    history.push("/addcustomeraccount")
  }

  const renderPrivilege = () => (
    <NavLink to="/customerinfo">
      <button
          type="button"
          title="View"
          className="btn btn-round btn-success btn-sm"
      >
          <i className="feather icon-eye"></i>
      </button>
  </NavLink>
  );

  const renderActions = (admin) => (
    <>
       <NavLink to="/customerinfo">
                <button
                    type="button"
                    title="View"
                    className="btn btn-round btn-success btn-sm"
                >
                    <i className="feather icon-eye"></i>
                </button>
          </NavLink>
          <button
            type="button"
            title="Update"
            className="btn btn-round btn-warning btn-sm ml-1"
            onClick={(e) => handleAdminSelect(e, admin)}
          >
            <i className="feather icon-edit"></i>
          </button>
          <button
            type="button"
            title="Delete"
            className="btn btn-round btn-danger btn-sm ml-1"
          >
            <i className="feather icon-trash"></i>
          </button>
    </>
  )

  const renderRows = () => (
    adminList &&
      adminList.map((admin) => ({
        userId: <Typography>{admin.username}</Typography>,
        name: <Typography>{admin.name.firstname + " " + admin.name.lastname}</Typography>,
        email: <Typography>{admin.email}</Typography>,
        phone: <Typography>{admin.phone}</Typography>,
        OnBoardingStatus: renderPrivilege(),
        actions: renderActions(admin)
      }))
  );

  return (
    <>
      <BreadCrumbs title="List Customer Accounts">
        <NavLink to="/AddCustomeraccount">
          <Button variant="contained">
              Add New Customer +
          </Button>
        </NavLink>
      </BreadCrumbs>
      <Grid container>
        <Grid container>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Tables
                columns={columns}
                rowData={renderRows()} 
                hideToolbar={true}
              />
            </Paper>
          </Grid>
        </Grid>        
      </Grid>
    </>
  );
};

export default Listcustomeraccount;
