import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import header from '../images/Orchid_header.jpg'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => 
  createStyles({
  root: {
      color: theme.palette.secondary.main,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
    background: "#B0B3BA"
    
  },
//   multilineColor:{
//     color:'red'
// }

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
      id="logo"
      style={{
        borderRadius: "50%",
        width: 180,
        height: 170,
        display: "block"
      }}></img>
      <br></br>
      <Divider/>
      <br></br>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={16}
        borderColor="#ffc0cb"
        border={2}
        width="75%">
        <List>
        <ListItem>
           <Button onClick={handleHomeClick}
        style={{ color: "#F9C6E8", backgroundColor: '#264ECD' }}>
          Home Page
        </Button>
        </ListItem>
        <ListItem> 
          <Button 
        onClick={handleRegisterClick}
        style={{ color: "#F9C6E8", backgroundColor: '#264ECD' }}>
          Register
          </Button>
        </ListItem>
        <ListItem> 
          <Button
        onClick={handlePeriodsClick}
        style={{ color: "#F9C6E8", backgroundColor: '#264ECD' }}>
          Periods</Button>
        </ListItem>
        <ListItem> <Button
        onClick={handlePlaylistClick}
        style={{ color: "#F9C6E8", backgroundColor: '#264ECD' }}>
          Playlist</Button>
        </ListItem>
        <ListItem> <Button
        onClick={props.logout}
        style={{ color: "#F9C6E8", backgroundColor: '#264ECD' }}>
          Logout</Button>
        </ListItem>
      
    </List>
    </Box>
    <br></br>
    <Divider/>
      <br></br>
    <form className={classes.root} noValidate autoComplete="off">
  <TextField className={classes.root} id="outlined-basic" label="Search" variant="outlined" borderRadius={16}
        color={classes.root.color}
       />
</form>
    </Drawer>

  </div>

  )
    
}
