import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lexsynergy Limited
          </Typography>
          <Button color="inherit"><Link id="routeLink" to="/">Home</Link></Button>
          <Button color='inherit'><Link id="routeLink" to="blog">Blog</Link></Button>
          <Button color='inherit'><Link id="routeLink" to="about">About Us</Link></Button>
          <Button color='inherit'><Link id="routeLink" to="team">Our Team</Link></Button>
          <Button color='inherit'><Link id="routeLink" to="contactus">Contact Us</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}