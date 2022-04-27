import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { selectedAdmin } from "../../redux/actions/adminAction";
import BreadCrumbs from "../../components/Breadcrumbs";

const AddNewAdminAccount = ({afterSubmit, formLabel}) => {
  const [loading, setLoading] = useState(false);
  const admin = useSelector((state) => state.adminList.selectedAdmin);
  const dispatch = useDispatch();
  const history = useHistory();

  const initUser = {
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  };

  const [user, setUser] = useState(initUser);

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
        username: admin.username,
        email: admin.email,
        password: admin.password,
        cpassword: admin.password
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = !!admin && !!admin.id ? 
    await fetch(`http://localhost:3000/api/v1/auth/register/${selectedAdmin.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }) : 
    await fetch(`http://localhost:3000/api/v1/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
    <BreadCrumbs title="Add New Admin Account" />
    <div className="card m-b-30 p-4">
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
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
            label="Confirm Password"
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
          onClick={() => setUser(initUser)}
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
          { loading ? 'Submitting...' : 'Save' }
        </Button>
      </Grid>
      </Grid>
      
    </Box>
    </div>
    </>
  );
};

export default withRouter(AddNewAdminAccount);
