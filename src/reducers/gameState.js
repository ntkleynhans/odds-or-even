import { GAME_STATE, SET_GAMES_STARTED, CARD } from '../actions/types';

const DEFAULT_GAME_STATE = {
  guess: null,
  correctCount: 0
}

const EVEN = ['0', '2', '4', '6', '8'];
const ODD = ['ACE', '3', '5', '7', '9'];

const gameStateReducer = (state = DEFAULT_GAME_STATE, action) => {
  switch(action.type) {
    case GAME_STATE.GUESS_EVEN:
      return { ...state, guess: action.guess };
    case GAME_STATE.GUESS_ODD:
      return { ...state, guess: action.guess };
    case SET_GAMES_STARTED:
      return DEFAULT_GAME_STATE;
    case CARD.CARD_SUCCESS:
      let correctCount = state.correctCount;
      const { value } = action.cards[0];

      if ((state.guess === 'even' && EVEN.includes(value)) || (state.guess === 'odd' && ODD.includes(value))) { 
        correctCount += 1;
      }

      return { ...state, correctCount: correctCount }
    default:
      return state;
  }
}

export default gameStateReducer;
