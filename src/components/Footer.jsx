import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 4,
        py: 2,
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Twitter Clone. All Rights Reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <Link href="https://your-link.com" target="_blank" rel="noopener">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link href="https://your-link.com" target="_blank" rel="noopener">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
