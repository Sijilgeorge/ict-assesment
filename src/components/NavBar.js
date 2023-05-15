import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog Dashboard
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button ><Link style={{color:'white'}} to='/view'>add blog</Link></Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;