import React from 'react'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({

    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
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
        console.log(props.comp.composition.spotify_id)
      }
      console.log(props)
      console.log(props.currentComposition)
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


        
    </div>
    )
}

let mapStateToProps = (globalState) => {
    return {
        currentComposition: globalState.currentCompositionInfo.currentComposition,
        userToken: globalState.userInfo.token
    }
  }

  export default withRouter(connect(mapStateToProps)(Playlist)) 