import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


// REDUX CODE
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

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

const initialComposerState = {
  composers: []
}

const composerReducer = (state = initialComposerState, action) => {
  switch (action.type) {
    case "GET_COMPOSERS":
      return {
        ...state,
        composers: action.payload
      }
      default:
        return state
  }
}

const initialCompositionState = {
  compositions: []
}

const compositionReducer = (state = initialCompositionState, action) => {
  switch (action.type) {
    case "GET_COMPOSITIONS":
      return {
        ...state,
        compositions: action.payload
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
  composerInfo: composerReducer,
  compositionInfo: compositionReducer
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

