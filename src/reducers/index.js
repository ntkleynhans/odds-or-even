import {
  SET_GAME_STARTED,
  SET_INSTRUCTIONS_EXPANDED,
  DECK
} from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}

const appReducer = (state = DEFAULT_SETTINGS, action) => {
  switch(action.type) {
    case SET_GAME_STARTED:
      return { ...state, gameStarted: action.gameStarted };
    case SET_INSTRUCTIONS_EXPANDED:
      return { ...state, instructionsExpanded: action.instructionsExpanded };
    case DECK.FETCH_SUCCESS:
      const { remaining, deck_id } = action;
      return { ...state, remaining, deck_id, fetchStates: fetchStates.success};
    case DECK.FETCH_ERROR:
      return { ...state, message: action.message, fetchStates: fetchStates.error }
    default:
      return state;
  }
}

export default appReducer;
