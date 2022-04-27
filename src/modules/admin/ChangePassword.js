import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BreadCrumbs from "../../components/Breadcrumbs";

const ChangePassword = ({afterSubmit, formLabel}) => {
  const [loading] = useState(false);

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  

  return (
    <>
    <BreadCrumbs title="Change Password" />
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
            
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
            autoComplete="new-password"
          />
        </Grid>
        
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={6}>
        <Button 
          fullWidth 
          color="primary"
          variant="contained" 
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
          onClick={() => !!afterSubmit && afterSubmit()}
          >
          Clear
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button 
          color="secondary"
          type="submit" 
          fullWidth 
          variant="contained" 
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
          >
          { loading ? 'Submitting...' : 'Update' }
        </Button>
      </Grid>
      </Grid>
      
    </Box>
    </>
  );
};

export default withRouter(ChangePassword);
