import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Box, Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ForgetPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [loading] = useState(false);
  const [error] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    history.push('/resetpassword');
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
            Forget Password
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
              id="email"
              label="User Id"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              className="btn btn-success btn-lg btn-block font-18"
            >
              {loading ? 'Loading...' : 'Verify User' }
            </Button>
            
          </Box>
          </Paper>
        </Box>
      </Container>
  );
};

export default withRouter(ForgetPassword);
