'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  IconButton, 
  InputAdornment, 
  CircularProgress, 
  Divider, 
  Paper 
} from '@mui/material';
import { Visibility, VisibilityOff, Google, Apple } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginMobile = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f9f9fb',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          maxWidth: 400,
          borderRadius: 3,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: 80, height: 80, position: 'relative' }}>
            <Image src="/logo.jpg" alt="Logo" fill style={{ borderRadius: '50%', objectFit: 'cover' }} />
          </Box>
        </Box>

        <Typography variant="h5" textAlign="center" fontWeight={600}>
          AhiaGlobal Vendor Login
        </Typography>
        <Typography variant="body2" textAlign="center" color="text.secondary">
          Type your email address to log in or create an AhiaGlobal account
        </Typography>

        {error && (
          <Typography 
            variant="body2" 
            sx={{ color: 'error.main', textAlign: 'center', bgcolor: '#ffe5e7', borderRadius: 1, p: 1 }}
          >
            {error}
          </Typography>
        )}

        {/* Email Input */}
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChanged}
          variant="outlined"
        />

        {/* Password Input */}
        <TextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChanged}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Submit Button */}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{ borderRadius: 2, py: 1.2, mt: 1 }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
        </Button>

        {/* Links */}
        <Box sx={{ textAlign: 'center', mt: 1 }}>
          <Typography variant="body2">
            Are you new?{' '}
            <Link href="/signup" style={{ color: '#1976d2', textDecoration: 'none' }}>
              Create Account
            </Link>
          </Typography>
          <Typography variant="body2" mt={1}>
            <Link href="/forget-password" style={{ color: '#1976d2', textDecoration: 'none' }}>
              Forgot Password?
            </Link>
          </Typography>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 2 }}>or</Divider>

        {/* Third Party Buttons */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Google />}
          sx={{ borderRadius: 2, textTransform: 'none' }}
        >
          Continue with Google
        </Button>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<Apple />}
          sx={{ borderRadius: 2, textTransform: 'none' }}
        >
          Continue with Apple
        </Button>
      </Paper>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        © 2025 AhiaGlobal Limited. All rights reserved.
      </Typography>
    </Box>
  );
};

export default LoginMobile;
