import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Composition from './Composition'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import CompositionPlayer from './CompositionPlayer'
import NavBar from '../NavBar'
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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

 function CompositionsContainer(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

    const classes = useStyles();
    const [toggled, setToggled] = React.useState(false)

const handleClick = () => {
  setToggled(!toggled)
}

const handleDropdownClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleDropdownClose = () => {
  setAnchorEl(null);
};

/////DIVIDE COMPOSITIONS BY GENRE
///// MAP EACH GENRE INTO A SECTION OF THE PLAYLIST, DIVIDED BY GENRE NAME

const orchestralCompositions = props.composer.compositions.filter((compObj) => {
  return compObj.genre == 'Orchestral'
})

const keyboardCompositions = props.composer.compositions.filter((compObj) => {
  return compObj.genre == 'Keyboard'
})

const vocalCompositions = props.composer.compositions.filter((compObj) => {
  return compObj.genre == 'Vocal'
})

const chamberCompositions = props.composer.compositions.filter((compObj) => {
  return compObj.genre == 'Chamber'
})

const stageCompositions = props.composer.compositions.filter((compObj) => {
  return compObj.genre == 'Chamber'
})

console.log(props)

    return (
      <div>
              

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
                        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
          <Button className={classes.button} variant="outlined" color="secondary"
           onClick={handleClick} align="center">
           Play Composition
          </Button>
            <div>
              {toggled ?  <CompositionPlayer /> :  null}
            </div>
            </Box>
            <br></br>
            <br></br>
            <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          borderRadius={16}
          borderColor="#ffc0cb"
          border={2}
          width="75%"
          id="navbox">
        <Button aria-controls="simple-menu" aria-haspopup="true" align="center" onClick={handleDropdownClick}>
        Categories
      </Button>
      </Box>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
      >
        <MenuItem onClick={handleDropdownClose}>Profile</MenuItem>
        <MenuItem onClick={handleDropdownClose}>My account</MenuItem>
        <MenuItem onClick={handleDropdownClose}>Logout</MenuItem>
      </Menu>
            
            <Typography align="center" variant="h4">Orchestral</Typography>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            
              <List className={classes.root}>
                {orchestralCompositions.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                  return (
                    <Composition
                      labelId={labelId}
                      value={value}
                      setCurrentComposition={props.setCurrentComposition}
                      setUser={props.setUser}/>
                    );
                })}
              </List>
              <br></br>
              </Box>
              <Typography align="center" variant="h4">Keyboard</Typography>
              <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
              <List className={classes.root}>
                {keyboardCompositions.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                  return (
                    <Composition
                      labelId={labelId}
                      value={value}
                      setCurrentComposition={props.setCurrentComposition}
                      setUser={props.setUser}/>
                    );
                })}
              </List>
              </Box>
              <Typography align="center" variant="h4">Vocal</Typography>
              <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
              <List className={classes.root}>
                {vocalCompositions.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                  return (
                    <Composition
                      labelId={labelId}
                      value={value}
                      setCurrentComposition={props.setCurrentComposition}
                      setUser={props.setUser}/>
                    );
                })}
              </List>
              </Box>
              <Typography align="center" variant="h4">Chamber</Typography>
              <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
              <List className={classes.root}>
                {chamberCompositions.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                  return (
                    <Composition
                      labelId={labelId}
                      value={value}
                      setCurrentComposition={props.setCurrentComposition}
                      setUser={props.setUser}/>
                    );
                })}
              </List>
              </Box>
              <Typography align="center" variant="h4">Stage</Typography>
              <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
              <List className={classes.root}>
                {stageCompositions.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                  return (
                    <Composition
                      labelId={labelId}
                      value={value}
                      setCurrentComposition={props.setCurrentComposition}
                      setUser={props.setUser}/>
                    );
                })}
              </List>
              </Box>
      </div>
    )
}

let mapStateToProps = (globalState) => {
  return {
      currentComposition: globalState.currentCompositionInfo.currentComposition
  }
}
export default connect(mapStateToProps)(CompositionsContainer) 