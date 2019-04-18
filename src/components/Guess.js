import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../actions/gameState';

const Guess = ({ guess, setGuessEven, setGuessOdd }) => {
  return (
    <div>
      <h3>What is your card guess?</h3>
      <button type="button" className={guess === 'even' ? "btn btn-success" : "btn btn-info" } onClick={setGuessEven}>Even</button>
      { ' ' }
      <button type="button" className={guess === 'odd' ? "btn btn-success" : "btn btn-info" } onClick={setGuessOdd}>Odd</button>
    </div>
  )
}

export default connect(
  ({ gameState: { guess } }) => ({ guess }),
  { setGuessEven, setGuessOdd })
(Guess);
