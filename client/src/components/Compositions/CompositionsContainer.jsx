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

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function CompositionsContainer(props) {

    const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

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


    return (
        <div>
          <iframe src="https://open.spotify.com/embed/track/5hIAxKRvXEEi8gRnWzrWPT" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    <List className={classes.root}>
      {props.compositions.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <Composition
          labelId={labelId}
          value={value}/>

        );
      })}
    </List>
    </div>
    )
}
