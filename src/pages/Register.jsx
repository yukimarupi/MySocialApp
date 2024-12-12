import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

const Register = ({ onRegister, toggleToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // エラーメッセージの状態

  const handleRegister = async () => {
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful:", data);
        setError(''); // エラーをリセット
        alert("Account created! Please log in.");
        toggleToLogin(); // ログイン画面に切り替え
      } else {
        setError(data.error); // サーバーからのエラーを表示
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4, maxWidth: 300, mx: 'auto' }}>
      <Typography variant="h5" textAlign="center">Create Account</Typography>
      {error && (
        <Typography color="error" variant="body2" textAlign="center">
          {error}
        </Typography>
      )}
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
      <Link
        component="button"
        variant="body2"
        onClick={toggleToLogin}
        sx={{ textAlign: 'center', mt: 2 }}
      >
        Back to Login
      </Link>
    </Box>
  );
};

export default Register;
