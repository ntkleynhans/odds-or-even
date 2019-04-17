import { CARD } from './types.js';

export const fetchCardSuccess = cardJson => {
  const { deck_id, remaining, cards } = cardJson;

  return { type: CARD.CARD_SUCCESS, deck_id, remaining, cards };
}

export const fetchCardError = error => {
  return { type: CARD.CARD_ERROR, message: error.message }
}

export const fetchNewCard = deck_id => dispatch => {
    return fetch(`https://deck-of-cards-api-wrapper.appspot.com/deck/${deck_id}/draw`)
    .then(response => {
      if(response.status !== 200) {
        throw new Error('Unsuccessful request to deckofcards.api');
      }
      return response.json()
    })
    .then(json => dispatch(fetchCardSuccess(json)))
    .catch(error => dispatch(fetchCardError(error)));
}
