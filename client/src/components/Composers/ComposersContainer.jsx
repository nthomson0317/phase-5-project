import React from 'react'
import Composer from './Composer'
//material-ui
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from '../NavBar'

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

function ComposersContainer(props) {
    const classes = useStyles();

    console.log(props)

    // let filteredComposers = props.composers.filter((composer)=> {
    //    return (composer.period.id == props.period.id)
    // })
    // console.log(filteredComposers)

    let filteredComposers = props.period.composers
    // console.log(props.composers)

    
    return (
        <div>
        <NavBar
        history={props.history}/>
        <React.Fragment>
        <CssBaseline />
        {/* <AppBar position="relative"> */}
          {/* <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
          </Toolbar> */}
        {/* </AppBar> */}
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {props.period.name} Composers
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
              </Typography>
              {/* <div className={classes.heroButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div> */}
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {filteredComposers.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                   <Composer 
                   composer={card}
                   />
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
          
        </footer>
        {/* End footer */}
      </React.Fragment>
              
          </div>
    )
}

//connect is a function that returns a function definition
    // connect also takes in a function definition (callbacks)

    // Return value of MSTP is a POJO that'll be merged into props
    let mapStateToProps = (globalState) => {
        return {
            composers: globalState.composerInfo.composers
        }
    }
export default connect(mapStateToProps)(ComposersContainer) 