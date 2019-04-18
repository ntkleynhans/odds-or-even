import { CARD } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_CARD = {
  fetchStates: null,
  message: null,
  cards: [],
}

const cardReducer = (state = DEFAULT_CARD, action) => {
  switch(action.type) {
    case CARD.CARD_SUCCESS:
      const { remaining, cards } = action;
      return { ...state, cards, fetchStates: fetchStates.success};
    case CARD.CARD_ERROR:
      return { ...state, message: action.message, fetchStates: fetchStates.error }
    default:
      return state;
  }
}

export default cardReducer;
