import React from 'react';
import { connect } from 'react-redux';


const DrawCard = props => {
  return (
    <div>
      <button type="button" className="btn btn-info">Draw a card!</button>
    </div>
  )
}

// export default connect({
//   state => ({ deck_id: state.deck.deck_id })
// })(DrawCard);

export default connect(
  ({ deck: { deck_id } }) => ({ deck_id })
)(DrawCard);
