import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandInstructions, foldInstructions } from '../actions/settings';


class Instructions extends Component {
  render() {
    return (
      <div>
        <h2>Instructions</h2>
        {
          this.props.instructionsExpanded ? 
          (
            <div>
              <p>Welcome to the Odds or Evens game.</p>
              <p>A deck of cards will be shuffled. Then cards will be drawn at random.</p>
              <p>You must make a guess whether the next card is odd or even.</p>
              <p>Face cards are ignored.</p>
              <button type="button" className="btn btn-warning" onClick={this.props.foldInstructions}>Show less</button>
            </div>
          ) : (
            <div>
              <p>Welcome to the Odds or Evens games. Read more ...</p>
              <button type="button" className="btn btn-info" onClick={this.props.expandInstructions}>Read more</button>
            </div>
          )
        }
      </div>
    )
  }
}

export default connect(
  state => ({ instructionsExpanded: state.instructionsExpanded }),
  {expandInstructions, foldInstructions}
)(Instructions);
