import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import Playlist from './Playlist'
import PlaylistPlayer from './PlaylistPlayer'
import NavBar from '../NavBar'
import {withRouter} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
    },
    button: {
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #ffc0cb 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
  }));

function PlaylistContainer(props) {
  const classes = useStyles();
  const [toggled, setToggled] = React.useState(false)


  const handleClick = () => {
    setToggled(!toggled)
  }

    return (
        <div>
            <Typography gutterBottom variant="h1" component="h2" align="center">
              {props.playlist.name}
            </Typography>
            <div>
            <NavBar
            history={props.history}/>
            <br></br>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
            <Button className={classes.button} variant="outlined" color="secondary" 
              onClick={handleClick}>
              Play Composition
            </Button>
            <br></br>
            <br></br>
              <div>
                {toggled ?  <PlaylistPlayer /> :  null}
              </div>
                </Box>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                <List className={classes.root} >
                {props.playlist.playlist_compositions.map((comp) => {
                const labelId = `checkbox-list-label-${comp}`;
                  return (
                    <Playlist
                      labelId={labelId}
                      comp={comp}
                      setCurrentComposition={props.setCurrentComposition}
                      setUser={props.setUser}/>
                      );
                })}
                </List>
                </Box>
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