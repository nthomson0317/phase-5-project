import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Composition from './Composition'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import CompositionPlayer from './CompositionPlayer'
import NavBar from '../NavBar'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import header from '../../images/Orchid_header.jpg'
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
    },
  }));

 function CompositionsContainer(props) {

    const classes = useStyles();
    const [toggled, setToggled] = React.useState(false)

const handleClick = () => {
  setToggled(!toggled)
}

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