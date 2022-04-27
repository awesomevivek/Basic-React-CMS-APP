import React, { useState } from "react";
import { NavLink, useHistory, withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { selectedAdmin } from "../../redux/actions/adminAction";

const AddNewAdminAccount = ({afterSubmit, formLabel}) => {
  const [loading, setLoading] = useState(false);
  const admin = useSelector((state) => state.adminList.selectedAdmin);
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  React.useEffect(() => {
    if(!!admin && !!admin.id) {
      setUser({
        id: admin.id,
        name: admin.name.firstname + " " + admin.name.lastname,
        phone: admin.username,
        email: admin.email,
        password: admin.password,
        cpassword: admin.password,
        username: admin.username
      })
    }
  }, [])

  const getVariables = () => {
    const { name, phone, email, password } = user;
      
    return {
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
        username: email
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = !!admin && !!admin.id ? 
    await fetch(`https://fakestoreapi.com/users/${selectedAdmin.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getVariables()),
    }) : 
    await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getVariables()),
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid Username/Password");
    } else {
      window.alert(" Saved Successfully");
      !!admin && !!admin.id && dispatch(selectedAdmin(null)); 
      setLoading(false);
      setUser({});
      history.push("/listadminaccount");
      !!afterSubmit && afterSubmit();
    }
  };

  return (
    <>
    <div className="breadcrumbbar">
      <div className="row align-items-center">
        <div className="col-md-8 col-lg-8">
          <h4 className="page-title">Add New Customer Accounts</h4>
          <div className="breadcrumb-list">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item">
                <NavLink to="#">Add New Customer Accounts</NavLink>
              </li>
            </ol>
          </div>
        </div>        
      </div>
    </div>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            required
            fullWidth
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputs}
            label="Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Mobile Number"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleInputs}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputs}
            label="Email Address"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="User Name"
            id="username"
            name="username"
            value={user.username}
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
            label="Created By"
            type="text"
            id="createdBY"
            name="createdBy"
            value={'admin'}
            onChange={handleInputs}
            autoComplete="new-password"
            disabled
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
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            label="updatedAt"
            type="text"
            id="updatedAt"
            name="updatedAt"
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
          { loading ? 'Submitting...' : 'Sign Up' }
        </Button>
      </Grid>
      </Grid>
      
    </Box>
    </>
  );
};

export default withRouter(AddNewAdminAccount);
