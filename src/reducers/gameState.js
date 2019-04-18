import { GAME_STATE, SET_GAMES_STARTED } from '../actions/types';

const DEFAULT_GAME_STATE = {
  guess: null,
  correctCount: 0
}

const gameStateReducer = (state = DEFAULT_GAME_STATE, action) => {
  switch(action.type) {
    case GAME_STATE.GUESS_EVEN:
      return { ...state, guess: action.guess };
    case GAME_STATE.GUESS_ODD:
      return { ...state, guess: action.guess };
    case SET_GAMES_STARTED:
      return DEFAULT_GAME_STATE;
    case GAME_STATE.CORRECT_COUNT:
      let correctCount = state.correctCount;

      if (action.isCorrect) { 
        correctCount += 1;
      }

      return { ...state, correctCount }
    default:
      return state;
  }
}

export default gameStateReducer;
