import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
  render() {
    if (this.props.cards.length < 1) {
      return(
        <div></div>
      )
    }
    const { image, suit, value } = this.props.cards[0];
    return (
      <div>
        <h3>{value} of {suit}</h3>
        <img src={image } alt='card' />
        <p>Remaining draws: {this.props.remaining}</p>
      </div>
    )
  }
}

export default connect(
  ({ card: { cards }, deck: { remaining } }) => ({ remaining, cards })
)(Card);
