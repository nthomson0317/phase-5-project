import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { MenuItem } from '@material-ui/core';
import header from '../images/Orchid_header.jpg'
import Box from '@material-ui/core/Box';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function NavBar(props) {
const classes = useStyles();
const [state, setState] = React.useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});

const handleHomeClick = (e) => {
    props.history.push(`/`);
  }

  const handlePeriodsClick = (e) => {
    props.history.push(`/periods`);
  }

  const handleRegisterClick = (e) => {
    props.history.push(`/register`);
  }

  const handlePlaylistClick = (e) => {
    props.history.push("/playlist")
  }




  return (
    <div className={classes.root}>
    <CssBaseline />
    {/* <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar> */}
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <br></br>
      <img src={header}
      id="logo"></img>
      <br></br>
      <Divider/>
      <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center">
        <List>
        <ListItem button 
        onClick={handleHomeClick}
        style={{ color: "#F9C6E8", backgroundColor: '#264ECD' }}>
          <MenuItem>Home</MenuItem>
        </ListItem>
        <ListItem button 
        onClick={handleRegisterClick}
        style={{ color: "#F9C6E8", backgroundColor: '#264ECD' }}>
          <MenuItem>Register</MenuItem>
        </ListItem>
        <ListItem button 
        onClick={handlePeriodsClick}
        style={{ color: "#F9C6E8", backgroundColor: '#264ECD' }}>
          <MenuItem>Periods</MenuItem>
        </ListItem>
        <ListItem button 
        onClick={handlePlaylistClick}
        style={{ color: "#F9C6E8", backgroundColor: '#264ECD' }}>
          <MenuItem>Playlist</MenuItem>
        </ListItem>
        <ListItem button 
        onClick={props.logout}
        style={{ color: "#F9C6E8", backgroundColor: '#264ECD' }}>
          <MenuItem>Logout</MenuItem>
        </ListItem>
      
    </List>
    </Box>
    </Drawer>
  </div>

  )
    
}
