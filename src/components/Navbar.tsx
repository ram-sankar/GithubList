// navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Typography>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>
          Users
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
