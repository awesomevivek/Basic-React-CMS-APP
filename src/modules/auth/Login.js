import React, { useState } from "react";
import { useHistory, withRouter, NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import {Box, Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import AuthManager from '../auth/service/AuthManager';
import withAppContext from "../../containers/withAppContext";

const Login = ({logged, changeLoggedState}) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    
    e.preventDefault();
    setLoading(true);
    await fetch(`http://localhost:3000/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(res => res.json())
    .then(res => {
        if (res.statusCode === 201) {      
          AuthManager.setAccessToken(res.data.access_token)
          changeLoggedState(true);      
          history.push({ "pathname": "/" });
          return;
        } else {
          setError(res.message)
          setLoading(false);
        }
    })   
  };

  return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper style={{
            display: 'flex',
            padding: 20,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img src="assets/images/logo.png" alt="logo"/>
          <Typography component="h1" variant="h5" className="text-primary my-4">
            Sign in
          </Typography>
          {
            !!error && 
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">{error}</Alert>
            </Stack>
          }
          
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Id"
              name="username"
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              className="btn btn-success btn-lg btn-block font-18"
            >
              {loading ? 'Loading...' : 'Sign In' }
            </Button>
            <Grid container>
              <Grid item lg className="text-center">
                <NavLink to="/forgetpassword"  variant="body2">
                  Forgot password?
                </NavLink>
              </Grid>
            </Grid>
          </Box>
          </Paper>
        </Box>
      </Container>
  );
};

export default withRouter(withAppContext(Login));
