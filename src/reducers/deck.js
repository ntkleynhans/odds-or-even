import {  DECK } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_DECK = {
  deck_id: null,
  remaining: null,
  fetchStates: null,
  message: null
}

const deckReducer = (state = DEFAULT_DECK, action) => {
  switch(action.type) {
    case DECK.FETCH_SUCCESS:
      const { remaining, deck_id } = action;
      return { ...state, remaining, deck_id, fetchStates: fetchStates.success};
    case DECK.FETCH_ERROR:
      return { ...state, message: action.message, fetchStates: fetchStates.error }
    default:
      return state;
  }
}

export default deckReducer;
