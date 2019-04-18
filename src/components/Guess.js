import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../actions/gameState';

const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_KEY';

const checkRecord = correctGuesses => {
  const record = Number(localStorage.getItem(correctGuessesRecordKey) || 0);

  if (correctGuesses > record) {
    localStorage.setItem(correctGuessesRecordKey, correctGuesses);
    return { record: correctGuesses, isNewRecord: true };
  }
  return { record: correctGuesses, isNewRecord: false };
}

const Guess = ({ guess, correctCount, setGuessEven, setGuessOdd }) => {

  const { record, isNewRecord } = checkRecord(correctCount);

  return (
    <div>
      <h3>What is your card guess?</h3>
      <button type="button" className={guess === 'even' ? "btn btn-success" : "btn btn-info" } onClick={setGuessEven}>Even</button>
      { ' ' }
      <button type="button" className={guess === 'odd' ? "btn btn-success" : "btn btn-info" } onClick={setGuessOdd}>Odd</button>
      <br />
      <p>Your correct guess count is: {correctCount} </p>
      <p>{ isNewRecord ? 'New Record' : 'Record' }: {record} </p>
    </div>
  )
}

export default connect(
  ({ gameState: { guess, correctCount } }) => ({ guess, correctCount }),
  { setGuessEven, setGuessOdd })
(Guess);
