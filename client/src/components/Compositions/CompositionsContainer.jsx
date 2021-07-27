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
import Composition from './Composition'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import CompositionPlayer from './CompositionPlayer'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

 function CompositionsContainer(props) {

    const classes = useStyles();
    const [toggled, setToggled] = React.useState(false)
  // const [checked, setChecked] = React.useState([0]);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

// console.log(props.currentComposition.composition)
console.log(props.currentComposition)
console.log(toggled)

const handleClick = () => {
  setToggled(!toggled)
}

const renderPlayer = () => {
   
  
  
  
 
  }


    return (
        <div>
           <Button variant="outlined" color="secondary"
           onClick={handleClick}>
        Play Composition
      </Button>
      <div>
          {toggled ?  <CompositionPlayer /> :  null}
          </div>
    <List className={classes.root}>
      {props.compositions.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <Composition
          labelId={labelId}
          value={value}
          setCurrentComposition={props.setCurrentComposition}/>

        );
      })}
    </List>
    </div>
    )
}

let mapStateToProps = (globalState) => {
  return {
      currentComposition: globalState.currentCompositionInfo.currentComposition
  }
}
export default connect(mapStateToProps)(CompositionsContainer) 