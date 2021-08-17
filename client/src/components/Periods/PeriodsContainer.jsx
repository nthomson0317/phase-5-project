import React from 'react'
import Period from './Period'
//material-ui
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import header from '../../images/Orchid_header.jpg'
import NavBar from '../NavBar'

//REDUX
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      display: 'flex'
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



 function PeriodsContainer(props) {
    const classes = useStyles();

    
    return (
        <div >
        <Card>
        <img src={header}/>
        </Card>
        <NavBar
        className={classes.root}
        history={props.history}/>
      <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Periods
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Classical music can largely be categorized by six main periods, each with their own stylistic characteristics, innovations, offshoot movements and stars. 
            As with all categorizations, these are merely approximations, and thus are only intended to ease the newcomer's navigation of the genre. 
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {props.periods.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                 <Period 
                 key={card.id}
                 period={card}
                 history={props.history}
                 setCurrentPeriod={props.setCurrentPeriod}
                 />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>

        </div>
    )
}

//connect is a function that returns a function definition
    // connect also takes in a function definition (callbacks)

    // Return value of MSTP is a POJO that'll be merged into props
    let mapStateToProps = (globalState) => {
        return {
            periods: globalState.periodInfo.periods
        }
    }
export default connect(mapStateToProps)(PeriodsContainer) 