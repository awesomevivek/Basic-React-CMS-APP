import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {setAdmins} from '../../redux/actions/adminAction';
import axios from "axios";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: '#FFF',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '20px',
    opacity: 1
  };

const Managepromocode = () => {
    const adminList = useSelector((state) => state.adminList.adminList);
    const dispatch = useDispatch();

    const [addNewAdmin, setAddNewAdmin] = React.useState(false);

    const fetchAdminUsers = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/users')
        .catch((error) => {
            console.log("Error: ", error);
        });
        dispatch(setAdmins(response.data));       
    }

    useEffect(() => {
        fetchAdminUsers();
    }, []);
    
    const renderAdminRows = adminList && adminList.map(admin => (
        <tr>            
            <TableCell>{admin.username}</TableCell>
            <TableCell>{admin.name.firstname + ' ' + admin.name.lastname}</TableCell>
            <TableCell>{admin.email}</TableCell>
            <TableCell>{admin.phone}</TableCell>
            <TableCell>{admin.phone}</TableCell>
            <TableCell align="right">
            <button type="button" title='View' className="btn btn-round btn-success btn-sm"><i className="feather icon-eye"></i></button>
            <button type="button" title='Update' className="btn btn-round btn-warning btn-sm ml-1"><i className="feather icon-upload"></i></button>
            <button type="button" title='Delete' className="btn btn-round btn-danger btn-sm ml-1"><i className="feather icon-trash"></i></button>
                {/* <IconButton size="small" color="primary">
                    <EditIcon />
                </IconButton>
                <IconButton size="small" color="secondary">
                    <DeleteIcon />
                </IconButton> */}
            </TableCell>
        </tr>
    ));

    return (
        <>
        <div className="breadcrumbbar">
        <div className="row align-items-center">
            <div className="col-md-8 col-lg-8">
            <h4 className="page-title">Manage promo code</h4>
                <div className="breadcrumb-list">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item"><NavLink to="#">Manage promo code</NavLink></li>
                    </ol>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 text-right">
            <Button 
                  variant="contained" 
                  onClick={() => setAddNewAdmin(true)}
                  >
                      Add New promo Code
                  </Button> 
            </div>
        </div>
    </div>
        <Grid container>
            <Grid container>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Table size="medium" aria-label="a dense table">
                        <TableHead className="thead-light">
                                <TableRow>
                                    <TableCell><strong>Promo ID</strong></TableCell>
                                    <TableCell><strong>Promo title</strong></TableCell>
                                    <TableCell><strong>Promo type</strong></TableCell>
                                    <TableCell><strong>Start date and time</strong></TableCell>
                                    <TableCell><strong>End date and time</strong></TableCell>
                                    <TableCell align="right"><strong>Action</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {renderAdminRows}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
            <Modal                
                open={addNewAdmin}
                onClose={() => setAddNewAdmin(!addNewAdmin)}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                 <Box style={style}>
                     {/* <AddNewAdminAccount afterSubmit={() => setAddNewAdmin(false)} /> */}
                </Box>
            </Modal>
        </Grid>
        </>
        );
    }

export default Managepromocode;