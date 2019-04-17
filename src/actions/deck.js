import { FETCH_DECK_RESULT } from './types.js';

export const fetchDeckResult = deckJson => {
  const { remaining, deck_id } = deckJson;

  return { type: FETCH_DECK_RESULT, remaining, deck_id };
}

export const fetchNewDeck = () => dispatch => {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(json => dispatch(fetchDeckResult(json)))
    .catch(error => alert(error.message));
}