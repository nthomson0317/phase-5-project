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
import Card from '@material-ui/core/Card';
import header from '../../images/Orchid_header.jpg'

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
          <Card>
            <img src={header}/>
          </Card>
            <Typography gutterBottom variant="h1" component="h2" align="center">
              {props.username}'s {props.playlist.name}
            </Typography>
            <div>
          <NavBar
            history={props.history}/>
            <br></br>
           <Button variant="outlined" color="secondary"
              onClick={handleClick}>
              Play Composition
            </Button>
      <br></br>
      <br></br>
      <div>
          {toggled ?  <PlaylistPlayer /> :  null}
          </div>
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