import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import appReducer from './reducers';
import './index.css';

const store = createStore(appReducer);

store.subscribe(() => console.log('Store -->', store.getState()));
//store.dispatch(startGame());
//store.dispatch(expandInstructions());
//store.dispatch(endGame());
//store.dispatch(foldInstructions());

ReactDOM.render(
  <App />,
   document.getElementById('root')
);
