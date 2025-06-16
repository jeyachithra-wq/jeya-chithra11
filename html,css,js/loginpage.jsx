import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import file from '../../my-vue-app/src/4957136.jpg';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Grid container sx={{ height: '100vh' }}>
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            bgcolor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: 4,
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, width: '100%' }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Hello, <br /> Welcome Back
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Hey, welcome back to your special place
            </Typography>

            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Link href="#" underline="hover" variant="body2">
                Forgot Password?
              </Link>
            </Box>

            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#7B2EFF',
                '&:hover': { bgcolor: '#6824d6' },
              }}
            >
              Log in
            </Button>

            <Typography variant="body2" align="center">
              Don’t have an account?{' '}
              <Link href="#" underline="hover">
                Sign up
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={false}
          md={6}
          sx={{
            background: 'linear-gradient(to right, #9B66FF, #8454FF)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
          }}
        >
          <img
            src={file}
            alt="Login Illustration"
            style={{ width: '70%', height: '70%', maxWidth: 400, objectFit: 'contain' }}
          />
        </Grid>
      </Grid>

      {/* Success Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Login Successful</DialogTitle>
        <DialogContent>
          <Typography>you are logged in successfully!!</Typography>
        </DialogContent>
        <DialogActions>
          <Button
  onClick={handleDialogClose}
  autoFocus
  variant="contained"
  color="primary"
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  close
</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}