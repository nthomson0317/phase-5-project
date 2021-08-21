import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// REDUX CODE
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// import userReducer from './redux/userReducer';

const initialPeriodState = {
  periods: []
}

// Return value of reducer is going to become/replaces the new global state
const periodReducer = (state = initialPeriodState, action) => {
  switch (action.type) {
    case "GET_PERIODS":
    return {
      ...state,
      periods: action.payload
    }
    default:
      return state
  }
}

//CURRENT PERIOD STATE
const initialCurrentPeriodState = {
  currentPeriod: {}
}

const currentPeriodReducer = (state = initialCurrentPeriodState, action) => {
  switch (action.type) {
    case "GET_CURRENT_PERIOD":
      return {
        ...state,
        currentPeriod: action.payload
      }
      default:
        return state
  }
}

//CURRENT COMPOSITION STATE
const initialCurrentCompositionState = {
  currentComposition: {}
}

const currentCompositionReducer = (state = initialCurrentCompositionState, action) => {
  switch (action.type) {
    case "GET_CURRENT_COMPOSITION":
      return {
        ...state,
        currentComposition: action.payload
      }
      default:
        return state
  }
}

const initialUserState = {
  username: "",
  token: ""
}

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "SET_USER":
    return {
      ...state,
      ...action.payload.user,
      token: action.payload.token

    }
    default:
      return state
  }
}

//CombineReducers take in a POJO as an argument
  //The keys of that POJO become the highest keys of global state
    //The values of that POJO are the state objects being returned by the reducer
let rootReducer = combineReducers({
  periodInfo: periodReducer,
  currentPeriodInfo: currentPeriodReducer,
  currentCompositionInfo: currentCompositionReducer,
  userInfo: userReducer
})

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )



ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

