import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setAdmins} from '../../redux/actions/adminAction';
import axios from "axios";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Addnewpromotype from './Addnewpromotype';
import BreadCrumbs from "../../components/Breadcrumbs";
import Tables from '../../components/Table/Index';

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
    const [managePromoType, setManagePromoType] = React.useState(false);

    const columns = [
        {
          id: 'promotype',
          label: 'Promo Type',
          styles: {width: '45%', fontWeight: 'bold'}
        },
        {
          id: 'createdBy',
          label: 'Created BY',
          styles: {width: '25%', fontWeight: 'bold'}
        },
        {
          id: 'createdAt',
          label: 'Created At',
          styles: {width: '20%', fontWeight: 'bold'}
        },
        {
          id: 'actions',
          label: 'Action',
          styles: {width: '10%', fontWeight: 'bold'}
        }
      ];

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
    
    const handleAdminSelect = (e, admin) => {
        e.preventDefault();
      }

    const renderActions = (admin) => (
        <>
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
            promotype: <Typography>{admin.username}</Typography>,
            createdBy: <Typography>{admin.name.firstname + " " + admin.name.lastname}</Typography>,
            createdAt: <Typography>{new Date().toLocaleDateString('en-US')}</Typography>,
            actions: renderActions(admin)
          }))
      );
    
    return (
        <>
        <BreadCrumbs title="Manage Promo Type">
            <Button 
            variant="contained" 
            onClick={() => setManagePromoType(true)}
            >
                Add New Promo Type
            </Button>     
        </BreadCrumbs>       
        <Grid container>            
            <Grid container>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Tables
                        columns={columns}
                        rowData={renderRows()} 
                        hideToolbar={true}
                    />   
                    </Paper>
                </Grid>
            </Grid>
            <Modal                
                open={managePromoType}
                onClose={() => setManagePromoType(!managePromoType)}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                 <Box style={style}>
                     <Addnewpromotype afterSubmit={() => setManagePromoType(false)} />
                </Box>
            </Modal>
        </Grid>
        </>
        );
    }

export default Managepromocode;