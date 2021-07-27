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
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'


 function Composition(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          maxWidth: 360,
          backgroundColor: theme.palette.background.paper,
        },
      }));
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

      const handleClick = (value) => {
        console.log(value.target.innerHTML)
        console.log(value)
    
        fetch(`http://localhost:3000/compositions/${props.value.id}`, {
            })
            .then(res => res.json())
            .then((res) => props.setCurrentComposition(res.id))
            // .then return (checked.length > 2 ? 
            //     <iframe src={`https://open.spotify.com/embed/track/${res.id}`} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> : nill)

    
    

      }
      console.log(props.currentComposition)
      

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


            
        </div>
    )
}
let mapStateToProps = (globalState) => {
    return {
        currentComposition: globalState.currentCompositionInfo.currentComposition
    }
  }
  export default withRouter(connect(mapStateToProps)(Composition)) 