import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import Playlist from './Playlist'
import PlaylistPlayer from './PlaylistPlayer'
import NavBar from '../NavBar'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function PlaylistContainer(props) {

  const classes = useStyles();
  const [toggled, setToggled] = React.useState(false)


  const handleClick = () => {
    setToggled(!toggled)
  }
    console.log(props)
    return (
        <div>
            <Typography gutterBottom variant="h1" component="h2">
              {props.username}'s {props.playlist.name}
            </Typography>
            <div>
          <NavBar
        history={props.history}/>
           <Button variant="outlined" color="secondary"
           onClick={handleClick}>
        Play Composition
      </Button>
      <div>
          {toggled ?  <PlaylistPlayer /> :  null}
          </div>
    <List className={classes.root}>
      {props.playlist.playlist_compositions.map((comp) => {
        const labelId = `checkbox-list-label-${comp}`;

        return (
          <Playlist
          labelId={labelId}
          comp={comp}
          setCurrentComposition={props.setCurrentComposition}/>

        );
      })}
    </List>
    </div>
            
        </div>
    )
}

let mapStateToProps = (globalState) => {
    let booleanOfWhetherTheyAreLoggedIn = !!globalState.userInfo.token
    return {
      token: globalState.userInfo.token,
      username: globalState.userInfo.username,
      playlist: globalState.userInfo.playlists[0]
    }
  }


  
  
  export default connect(mapStateToProps)(withRouter(PlaylistContainer))