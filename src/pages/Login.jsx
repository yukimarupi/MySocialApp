import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

const Login = ({ onLogin, toggleToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Both username and password are required.');
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        onLogin(username);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4, maxWidth: 300, mx: 'auto' }}>
      <Typography variant="h5" textAlign="center">Login</Typography>
      {error && <Typography color="error" variant="body2">{error}</Typography>}
      <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
      <Link component="button" variant="body2" onClick={toggleToRegister} sx={{ textAlign: 'center', mt: 2 }}>
        Create a new account
      </Link>
    </Box>
  );
};

export default Login;
