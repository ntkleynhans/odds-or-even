import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}

const SET_GAME_STARTED = 'SET_GAME_STARTED';
const SET_INSTRUCTIONS_EXPANDED = 'SET_INSTRUCTIONS_EXPANDED';

const appReducer = (state = DEFAULT_SETTINGS, action) => {

  switch(action.type) {
    case SET_GAME_STARTED:
      return { ...state, gameStarted: action.gameStarted };
    case SET_INSTRUCTIONS_EXPANDED:
      return { ...state, instructionsExpanded: action.instructionsExpanded };
    default:
      return state;
  }
}

const store = createStore(appReducer);

store.subscribe(() => console.log('Store -->', store.getState()));

const startGame = () => {
  return { type: SET_GAME_STARTED, gameStarted: true };
}

const endGame = () => {
  return { type: SET_GAME_STARTED, gameStarted: false };
}

const expandInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true };
}

const foldInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false };
}

store.dispatch(startGame());
store.dispatch(expandInstructions());
store.dispatch(endGame());
store.dispatch(foldInstructions());

ReactDOM.render(
  <App />,
   document.getElementById('root')
);
