import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import header from '../images/orchid_logo_square.jpg'
import Box from "@material-ui/core/Box";
import { ListItemText } from '@material-ui/core'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listItemText:{
    fontSize:'1em',//Insert your required size
  }
});

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

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
  <div
    className={clsx(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    })}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
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
        style={{ color: "#F9C6E8" }}>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button 
        onClick={handleRegisterClick}
        style={{ color: "#F9C6E8" }}>
          <ListItemText>Register</ListItemText>
        </ListItem>
        <ListItem button 
        onClick={handlePeriodsClick}
        style={{ color: "#F9C6E8" }}>
          <ListItemText>Periods</ListItemText>
        </ListItem>
        <ListItem button 
        onClick={handlePlaylistClick}
        style={{ color: "#F9C6E8" }}>
          <ListItemText>Playlist</ListItemText>
        </ListItem>
        <ListItem button 
        onClick={props.logout}
        style={{ color: "#F9C6E8" }}>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      
    </List>
    </Box>
  </div>
);


  return (
    <div>
      {['navbar'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
    
}
