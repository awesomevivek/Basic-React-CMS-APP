import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAdmins } from "../../redux/actions/adminAction";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Manageprivilege = () => {
  const adminList = useSelector((state) => state.adminList.adminList);
  const dispatch = useDispatch();

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
  }, []);

  const renderAdminRows =
    adminList &&
    adminList.map((admin) => (
      <tr>
        <TableCell>{admin.username}</TableCell>
        <TableCell>
        <FormGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
          <FormControlLabel 
            control={<Checkbox defaultChecked />} label="Read Only" 
          />
          <FormControlLabel 
            control={<Checkbox defaultChecked />} label="Read and Write" 
          />
          <FormControlLabel 
            control={<Checkbox defaultChecked />} label="User Access" 
          />
          <FormControlLabel 
            control={<Checkbox defaultChecked />} label="Manager Access" 
          />
          <FormControlLabel 
            control={<Checkbox defaultChecked />} label="Full Access" 
          />
          <FormControlLabel 
            control={<Checkbox defaultChecked />} label="Admin" 
          />
        </FormGroup>
        </TableCell>
        <TableCell align="right">
          <button
            type="button"
            title="View"
            className="btn btn-round btn-success btn-sm"
          >
            <i className="feather icon-settings"></i>
          </button>          
        </TableCell>
      </tr>
    ));

  return (
    <>
      <div className="breadcrumbbar">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-8">
            <h4 className="page-title">Manage Privilages</h4>
            <div className="breadcrumb-list">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                  <NavLink to="#">Manage Privilages</NavLink>
                </li>
              </ol>
            </div>
          </div>          
        </div>
      </div>
      <Grid container>
        <Grid container>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Table size="medium" aria-label="a dense table">
                <TableHead className="thead-light">
                  <TableRow>
                    <TableCell width="20%">
                      <strong>User id</strong>
                    </TableCell>
                    <TableCell width="70%">
                      <strong>Privilages</strong>
                    </TableCell>                    
                    <TableCell align="right" width="10%">
                      <strong>Action</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{renderAdminRows}</TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Manageprivilege;
