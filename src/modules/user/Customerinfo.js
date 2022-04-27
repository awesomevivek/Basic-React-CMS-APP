import * as React from "react";
import { withRouter } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BreadCrumbs from "../../components/Breadcrumbs";

const CustomerInfo = ({afterSubmit, formLabel}) => {

  return (
    <>
    <BreadCrumbs title="Customer Account Detail" />
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography>Name: David Morrison</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography>Phone: 1-570-236-7033</Typography>
        </Grid>
        <Grid item xs={12} sm="6">
            <Typography>Email: morrison@gmail.com</Typography>
        </Grid>
        <Grid item xs={12} sm="6">
            <Typography>Password: 123456</Typography>
        </Grid>        
        <Grid item xs={6}>
            <Typography>Created At: {new Date().toLocaleDateString('en-US')}</Typography>
        </Grid>       
        <Grid item xs={6}>
            <Typography>Updated At: {new Date().toLocaleDateString('en-US')}</Typography>
        </Grid>   
      
      </Grid>      
    </Box>
    </>
  );
};

export default withRouter(CustomerInfo);
