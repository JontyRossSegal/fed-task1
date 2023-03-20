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
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static" xs={11}>
        <Toolbar >
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
          <CustomLinkButton routeTo="/" label="Home"/>
          <CustomLinkButton routeTo="/blog" label="Blog"/>
          <CustomLinkButton routeTo="/about" label="About Us"/>
          <CustomLinkButton routeTo="/team" label="Our Team"/>
          <CustomLinkButton routeTo="/contactus" label="Contact Us"/>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

const CustomLinkButton = ({routeTo, label}) => {
  return(
    <Link className="routeLink" to={routeTo}><Button color="inherit">{label}</Button></Link>
  )
}