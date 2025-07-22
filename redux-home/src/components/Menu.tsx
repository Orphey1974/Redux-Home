import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  marginRight: 8,
};

const getActiveStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? { ...linkStyle, fontWeight: 'bold', borderBottom: '2px solid #fff' }
    : linkStyle;

const Menu: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={getActiveStyle} end>
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/login" style={getActiveStyle}>
            <Button color="inherit">Login</Button>
          </NavLink>
          <NavLink to="/register" style={getActiveStyle}>
            <Button color="inherit">Register</Button>
          </NavLink>
          <NavLink to="/404" style={getActiveStyle}>
            <Button color="inherit">404</Button>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;