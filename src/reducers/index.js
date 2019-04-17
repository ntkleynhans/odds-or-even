import { combineReducers } from 'redux';
import settingsReducer from './settings';
import deckReducer from './deck';
import cardReducer from './card';

export default combineReducers({ settings: settingsReducer, deck: deckReducer, card: cardReducer });
