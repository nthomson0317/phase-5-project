import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

////////////////////////////////////////////////////////////////FUNCTION/////////////////////////////////////

 function Composition(props) {


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
      };

      const handleClick = () => {
        console.log(props.value)
        fetch(`http://localhost:3000/compositions/${props.value.id}`, {
            })
            .then(res => res.json())
            .then((res) => props.setCurrentComposition(res.id))
      }

      const handleAddToPlaylist = (value) => {
        fetch("http://localhost:3000/playlist_compositions", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "authorization": props.userToken
            },
                body: JSON.stringify({
                playlist_id: 1,
                composition_id: props.value.id,

              })
              })
      .then(res => res.json())
      // .then((res) => console.log(res))
      .then((res) => addCompositionToPlaylistState(res))
      }

      const addCompositionToPlaylistState = (res) => {
        let copyOfPlaylistCompositions= [...props.playlist.playlist_compositions, res]
        let playlists = [{...props.playlist, playlist_compositions: copyOfPlaylistCompositions}]
        props.setUser({user:{
          username: props.currentUser.username,
          id: props.currentUser.id,
          playlists: playlists
        },
        token: props.currentUser.token})
      }
      
      
    return (
        <div>
            <ListItem key={props.value.id} role={undefined} dense button onClick={handleToggle(props.value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(props.value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': props.labelId }}
                
              />
            </ListItemIcon>
            <ListItemText id={props.labelId} primary={`${props.value.name}`} 
            onClick={handleClick}/>
            <ListItemSecondaryAction>
            <ListItemText id={props.labelId} primary={`${props.value.genre}`} />
            </ListItemSecondaryAction>
          </ListItem>
          <Button variant="outlined" 
          color="primary"
          onClick={handleAddToPlaylist}>
        Add to Playlist
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
  export default withRouter(connect(mapStateToProps)(Composition)) 