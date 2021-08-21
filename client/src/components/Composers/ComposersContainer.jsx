import React from 'react'
import Composer from './Composer'
//material-ui
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from '../NavBar'
import Card from '@material-ui/core/Card';
import header from '../../images/Orchid_header.jpg'

//REDUX
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.tertiary.main,
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

    let filteredComposers = props.period.composers
    
    return (
        <div>

      <NavBar history={props.history}/>
        <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {props.period.name} Composers
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Passions ran high in the Romantic era; drama, expression, poetry and tall tales were the order of the day. 
              The shining marble columns of the Classical era began to dull, crack even, as composers just wanted to loosen their collars.
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
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
      </React.Fragment>
          </div>
    )
}


    let mapStateToProps = (globalState) => {
        return {
            composers: globalState.currentPeriodInfo.currentPeriod.composers
        }
    }
export default connect(mapStateToProps)(ComposersContainer) 