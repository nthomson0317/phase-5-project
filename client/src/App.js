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
//REACT ROUTER
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

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
    logout={props.logout}/>
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

    let composer = props.periods[3].composers.find(composer => composer.name == name)
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

  return (

    <div>
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

    </div>
  );
}

let setPeriods = (allPeriods) => {

  return {
    type: "GET_PERIODS",
    payload: allPeriods
  }
}

let setComposers = (allComposers) => {

  return {
    type: "GET_COMPOSERS",
    payload: allComposers
  }
}

let setCompositions = (allCompositions) => {
  return {
    type: "GET_COMPOSITIONS",
    payload: allCompositions
  }
}

let setCurrentComposition = (currentComposition) => {
  return {
    type: "GET_CURRENT_COMPOSITION",
    payload: currentComposition
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
    composers: globalState.composerInfo.composers,
    compositions: globalState.compositionInfo.compositions
  }
}


let mapDispatchToProps = {
  setPeriods,
  setComposers,
  setCompositions,
  setCurrentComposition,
  setUser,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
