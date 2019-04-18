import React from 'react';
import { connect } from 'react-redux';
import { fetchNewCard } from '../actions/card';
import Card from './Card';

const DrawCard = ({ deck_id, fetchNewCard }) => {
  return (
    <div>
      <button type="button" className="btn btn-info" onClick={fetchNewCard(deck_id)}>Draw a card!</button>
      <hr />
      <Card />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNewCard: deck_id => () => dispatch(fetchNewCard(deck_id))
  };
}

// export default connect({
//   state => ({ deck_id: state.deck.deck_id })
// })(DrawCard);

export default connect(
  ({ deck: { deck_id } }) => ({ deck_id }),
  mapDispatchToProps
)(DrawCard);
