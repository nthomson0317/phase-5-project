import {useEffect } from 'react';
import './App.css';
//COMPONENTS
import Home from './components/Home'
import PeriodsContainer from './components/Periods/PeriodsContainer'
import ComposersContainer from './components/Composers/ComposersContainer'
import Composition from './components/Compositions/Composition'
import CompositionsContainer from './components/Compositions/CompositionsContainer'
import Register from './components/Register'
import PlaylistContainer from './components/Playlist/PlaylistContainer'
import NavBar from './components/NavBar'
import header from './images/Orchid_header.jpg'
//REACT ROUTER
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
//////THEME/////
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#4f3fff",
    },
    secondary: {
      main: "#ffc0cb",
    },
    tertiary: {
      main: "#b8b4b7"
    }
  },
});

function App(props) {

  useEffect(() => {
    fetch("http://localhost:3000/periods")
  .then((r) => r.json())
  .then((periodsArray) => {(props.setPeriods(periodsArray))
    });
  }, [])

  let renderPeriods = (routerProps) => {
    return <PeriodsContainer 
    history={props.history}
    logout={props.logout}
    setCurrentPeriod={props.setCurrentPeriod}/>
  }

  let renderComposers = (routerProps) => {
    return <ComposersContainer
    history={props.history}
    logout={props.logout}/>
  }

  let renderPeriodComposers = (routerProps) => {
    let name = routerProps.match.params.period_name
    console.log(routerProps)

    //use string to find match in global state.
    let period = props.periods.find(period => period.name == name)
    
      //if found render component
      if (period){
      return <ComposersContainer
      composer={routerProps.match.params.composer_name}
      history={props.history}
      period={period}
      logout={props.logout}
      />
    }
    else {
      return <Redirect to="/" />
    } 
  }

  let renderCompositions = (routerProps) => {
    return <Composition 
    logout={props.logout}
    setUser={props.setUser}
    />
  }

  let renderComposerCompositions = (routerProps) => {
    let name = routerProps.match.params.composer_name

    let composer = props.currentPeriod.composers.find(composer => composer.name == name)
    console.log(composer)
    
      return <CompositionsContainer
      history={props.history}
      composer={composer}
      setCurrentComposition={props.setCurrentComposition}
      setUser={props.setUser}/>
    }

  const renderRegistrationForm = (routerProps) => {
    return <Register />
  }

  const renderPlaylist = (routerProps) => {
    return <PlaylistContainer 
    history={props.history}
    setCurrentComposition={props.setCurrentComposition}
    setUser={props.setUser}/>
  }

  const renderHome = (routerProps) => {
    return <Home 
    history={props.history}
    setUser={props.setUser}
    logOut={props.logOut}
    />
  }

  console.log(props)

  return (

    <div style={{backgroundColor: theme.palette.tertiary.main}}>
      <ThemeProvider theme={theme}>
      <img src={header} />
      <NavBar style={{backgroundColor: theme.palette.tertiary.main}}
        history={props.history}/>
        <Switch>
          <Route path="/register" render={ renderRegistrationForm } />
          <Route exact path="/periods" render={renderPeriods} />
          <Route path="/composers" render={renderComposers} />
          <Route exact path="/periods/:period_name/composers" render={renderPeriodComposers} />
          <Route exact path="/composition" render={renderCompositions} />
          <Route exact path="/periods/:period_name/composers/:composer_name/compositions" render={renderComposerCompositions} />
          <Route path = "/playlist" render={renderPlaylist}/>
          <Route exact path="/" render={renderHome} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

let setPeriods = (allPeriods) => {
  return {
    type: "GET_PERIODS",
    payload: allPeriods
  }
}

let setCurrentComposition = (currentComposition) => {
  return {
    type: "GET_CURRENT_COMPOSITION",
    payload: currentComposition
  }
}

let setCurrentPeriod = (currentPeriod) => {
  return {
    type: "GET_CURRENT_PERIOD",
    payload: currentPeriod
  }
}

let setUser = (responseFromServer) => {
  return {
    type: "SET_USER",
    payload: responseFromServer
  }
}

let logout = () => {
  return {
    type: "LOGOUT_USER"
  }
}

let mapStateToProps = (globalState) => {
  // let booleanOfWhetherTheyAreLoggedIn = !!globalState.userInfo.token
  return {
    periods: globalState.periodInfo.periods,
    currentPeriod: globalState.currentPeriodInfo.currentPeriod,
  }
}

let mapDispatchToProps = {
  setPeriods,
  setCurrentComposition,
  setCurrentPeriod,
  setUser,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
