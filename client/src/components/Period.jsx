import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {useState, useEffect } from 'react';

//REDUX
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
        height: 0,
      paddingTop: '56.25%', // 16:9
      marginTop:'30'
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));




 function Period(props) {
    const classes = useStyles();

    const [state, setState] = useState({
        raised:false,
        shadow:1,
      })
    
    console.log(props)
    console.log(props.period)
    console.log(props.card)

    return (
        <Card className={classes.card}
        classes={{root: state.raised ? classes.cardHovered : ""}}
        onMouseOver={()=>setState({ raised: true, shadow:3})} 
        onMouseOut={()=>setState({ raised:false, shadow:1 })} 
        raised={state.raised} zdepth={state.shadow}
                
        >
            
          <CardMedia
            className={classes.cardMedia}
            image={props.period.image_src}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.period.name}
            </Typography>
            <Typography>
              {props.period.era}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
          </CardActions>
          </Card>
  );

}

let mapStateToProps = (globalState) => {
    return {
        periods: globalState.periodInfo.periods
    }
}

export default connect(mapStateToProps)(Period) 
