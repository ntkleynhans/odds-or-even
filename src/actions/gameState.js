import { GAME_STATE } from './types';

export const setGuessEven = () => {
  return { type: GAME_STATE.GUESS_EVEN, guess: 'even' };
}

export const setGuessOdd = () => {
  return { type: GAME_STATE.GUESS_ODD, guess: 'odd' };
}
