import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import header from '../images/orchid_logo_square.jpg'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
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
    <List>
        <ListItem button 
        onClick={handleHomeClick}>Home
        </ListItem>
        <ListItem button 
        onClick={handleRegisterClick}>Register
        </ListItem>
        <ListItem button 
        onClick={handlePlaylistClick}>Playlist
        </ListItem>
        <ListItem button 
        onClick={props.logout}>Logout
        </ListItem>
      
    </List>

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
