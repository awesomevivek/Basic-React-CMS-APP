import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Addnewpromotype = ({afterSubmit, formLabel}) => {
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, phone, email, password, cpassword } = user;
    const res = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: {
          firstname: name,
          lastname: "",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone,
        email,
        password,
        username: email,
      }),
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid Username/Password");
    } else {
      window.alert(" Registration Success");
      setLoading(false);
      setUser({})
      !!afterSubmit && afterSubmit();
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography align="center" variant="h5" style={{margin: '0 0px 30px 0'}}>{ !!formLabel ? formLabel : 'Add New Promo Type' }</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            required
            fullWidth
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputs}
            label="Promo Type"
            autoFocus
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Updated By"
            type="text"
            id="updatedBy"
            name="updatedBy"
            value={'admin'}
            onChange={handleInputs}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="Created At"
            type="text"
            id="createdAt"
            name="createdAt"
            value={new Date().toLocaleDateString('en-US')}
            onChange={handleInputs}
            disabled
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
          Cancel
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
          { loading ? 'Submitting...' : 'Save' }
        </Button>
      </Grid>
      </Grid>
      
    </Box>
  );
};

export default withRouter(Addnewpromotype);
