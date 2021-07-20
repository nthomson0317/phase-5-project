import {useState, useEffect } from 'react';
import './App.css';
//COMPONENTS
import Home from './components/Home'
import NavBar from './components/NavBar'
import PeriodsContainer from './components/PeriodsContainer'
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

    console.log(props)
    

  let renderPeriods = (routerProps) => {
    return <PeriodsContainer />
  }

  return (



    <div>
    <NavBar/>
    <Switch>
      <Route path="/periods" render={ renderPeriods} />
      <Route path="/" exact component={Home} />
    </Switch>
    <div className="App">
        Home
    </div>
    </div>
  );
}

let setPeriods = (allPeriods) => {

  return {
    type: "GET_PERIODS",
    payload: allPeriods
  }
}

let mapDispatchToProps = {
  setPeriods,
}

export default connect(null, mapDispatchToProps)(withRouter(App))
