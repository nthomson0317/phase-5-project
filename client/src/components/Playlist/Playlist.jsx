import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
    },
      button: {
        margin: theme.spacing(2),
      },
  }));

 function Playlist(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
      }

      const handleClick = () => {
          props.setCurrentComposition(props.comp.composition.spotify_id)
          console.log(props.comp)

      }

      ////DELETE FROM PLAYLIST/////
      const handleDeleteCompositionFromPlaylist = () => {
      fetch(`http://localhost:3000/playlist_compositions/${props.comp.id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              "authorization": props.userToken
            },
            })
            .then(res => res.json())
            .then((res) => deleteCompositionFromPlaylistState(res))
        }


        const deleteCompositionFromPlaylistState = (res) => {
          let copyOfPlaylistComps = props.playlist.playlist_compositions.filter((compObj) => {
            return compObj.id !== res.id
          })
          let playlists = [{...props.playlist, playlist_compositions: copyOfPlaylistComps}]
          props.setUser({user:{
            username: props.currentUser.username,
            id: props.currentUser.id,
            playlists: playlists
          },
          token: props.currentUser.token})
        }

    return (
      <div>
        <ListItem key={props.comp.id} role={undefined} dense button onClick={handleToggle(props.comp)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(props.comp) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': props.labelId }}
          />
        </ListItemIcon>
        <ListItemText 
         id={props.labelId}
         primary={`${props.comp.composition.name}`}
         onClick={handleClick}/>
        <ListItemSecondaryAction>
        <ListItemText id={props.labelId} primary={`${props.comp.composition.genre}`} />
        </ListItemSecondaryAction>
        </ListItem>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={handleDeleteCompositionFromPlaylist}
        startIcon={<DeleteIcon />}
        >
        Delete
        </Button>

    </div>
    )
}

let mapStateToProps = (globalState) => {
    return {
        currentComposition: globalState.currentCompositionInfo.currentComposition,
        userToken: globalState.userInfo.token,
        playlist: globalState.userInfo.playlists[0],
        currentUser: globalState.userInfo
    }
  }

  export default withRouter(connect(mapStateToProps)(Playlist)) 