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
import NavBar from '../NavBar'
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



    //use string to find match in global state.
    // let composer = props.period.composers.find(composer => composer.name == name)
console.log(props)


// props.period.composer.compositions

const handleClick = () => {
  setToggled(!toggled)
}



    return (
        <div>
                      <Card>
<img src={header}/>
</Card>
            <Typography gutterBottom variant="h1" component="h2" align="center">
              {props.composer.name}
            </Typography>
            <Typography variant="body1" align="center">
            Schumann was born in June of 1810 in Zwickau, Germany (part of Saxony). He began musical study around 7. When he was 16, he lost his father and sister. 
            As part of his inheritance, he was required to attend university for three years, so he began law school in Leipzig.
            He suffered from mental illness (possibly depression and bipolar disorder), which severely limited (and at times increased) his musical output.

            </Typography>
          <NavBar
        history={props.history}/>
           <Button variant="outlined" color="secondary"
           onClick={handleClick}>
        Play Composition
      </Button>
      <div>
          {toggled ?  <CompositionPlayer /> :  null}
          </div>
    <List className={classes.root}>
      {props.composer.compositions.map((value) => {
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