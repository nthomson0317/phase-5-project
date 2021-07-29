import {useState, useEffect } from 'react';
import './App.css';
//COMPONENTS
import Home from './components/Home'
import NavBar from './components/NavBar'
import PeriodsContainer from './components/Periods/PeriodsContainer'
import ComposersContainer from './components/Composers/ComposersContainer'
import Composition from './components/Compositions/Composition'
import CompositionsContainer from './components/Compositions/CompositionsContainer'
import Register from './components/Register'
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

  useEffect(() => {
    fetch("http://localhost:3000/composers")
  .then((r) => r.json())
  .then((composersArray) => {(props.setComposers(composersArray))
    });

  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/compositions")
  .then((r) => r.json())
  .then((compositionsArray) => {(props.setCompositions(compositionsArray))
    });

  }, [])

  /////STAY LOGGED IN ON REFRESH////////

  // useEffect(() => {
  //   if(localStorage.token){
  //   fetch("http://localhost:3000/me", {
  //       headers: {
  //         "authorization": localStorage.token
  //       }
  //     })
  //       .then(res => res.json())
  //       .then((res) => this.handleResponse)
  //   });

  // }, [])


  /////LOGOUT/////

  // logOut = () => {
  //   this.setState({
  //     username: "",
  //     pantries: [],
  //     token: "",
  //     id: 0
  //   })
  //   localStorage.clear()

  // }
    

      

    
  

    // console.log(props)
    

  let renderPeriods = (routerProps) => {
    return <PeriodsContainer 
    history={props.history}/>
  }

  let renderComposers = (routerProps) => {
    return <ComposersContainer
    history={props.history}/>
  }

  let renderPeriodComposers = (routerProps) => {
    let name = routerProps.match.params.period_name

    //use string to find match in global state.
    let period = props.periods.find(period => period.name == name)
    
      //if found render component
      if (period){
      return <ComposersContainer
      history={props.history}
      period={period}
      />
    }
    else {
      return <Redirect to="/" />
    } 
  }

  let renderCompositions = (routerProps) => {
    return <Composition 
    />
  }

  let renderComposerCompositions = (routerProps) => {
    console.log(routerProps)
    let composer = routerProps.match.params.composer_name

    //use string to find match in global state.
    let compositions = props.compositions.filter(composition => composition.composer.name == composer)
    // console.log(compositions)



      //if found render component
      if (compositions){
      return <CompositionsContainer
      history={props.history}
      compositions={compositions}
      composer={composer}
      setCurrentComposition={props.setCurrentComposition}/>
    }
    else {
      return <Redirect to="/" />
    } 
  }

  const renderRegistrationForm = (routerProps) => {
    return <Register />
  }

  const renderHome = (routerProps) => {
    return <Home 
    history={props.history}
    setUser={props.setUser}
    />
  }

  // console.log(props)
  return (

    <div>
    <NavBar/>
    <Switch>
      <Route path="/register" render={ renderRegistrationForm } />
      <Route exact path="/periods" render={renderPeriods} />
      <Route path="/composers" render={renderComposers} />
      <Route exact path="/periods/:period_name/composers" render={renderPeriodComposers} />
      <Route exact path="/composition" render={renderCompositions} />
      <Route exact path="/periods/:period_name/composers/:composer_name/compositions" render={renderComposerCompositions} />
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
    // currentComposition: globalState.currentComposition.composition
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
