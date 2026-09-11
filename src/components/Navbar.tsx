import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

export default function Navbar() {
  return (
    <AppBar 
      position="static" 
      elevation={0} 
      sx={{ 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid', 
        borderColor: 'divider' 
      }}
    >
      <Toolbar>
        <Box 
          component={RouterLink} 
          to="/" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'primary.main' 
          }}
        >
          <DirectionsBoatIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', letterSpacing: '-0.02em' }}>
            Ranthambore Safari
          </Typography>
        </Box>
        <Box>
          <Button 
            component={RouterLink} 
            to="/about"
            sx={{ 
              color: 'text.primary', 
              ml: 2, 
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } 
            }}
          >
            About Us
          </Button>
          <Button 
            component={RouterLink} 
            to="/booking"
            sx={{ 
              color: 'text.primary', 
              ml: 2, 
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } 
            }}
          >
            Safari Booking
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
