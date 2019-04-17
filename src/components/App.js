import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, endGame } from '../actions/settings';
import { fetchDeckResult } from '../actions/deck';
import Instructions from './Instructions';

class App extends Component {
  startGame = () => {
    this.props.startGame();

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(json => this.props.fetchDeckResult(json))
    .catch(error => alert(error.message));
  }

  render() {
    return(
      <div>
        <h2>Odds or Evens</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3>The game has started</h3>
              <br />
              <button type="button" className="btn btn-warning" onClick={this.props.endGame}>End the game</button>
            </div>
          ) : (
            <div>
              <h3>A new game awaits</h3>
              <br />
              <button type="button" className="btn btn-info" onClick={this.startGame}>Start game</button>
            </div>
          )
        }
        <hr />
        <Instructions />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    endGame: () => dispatch(endGame()),
    fetchDeckResult: deckJson => dispatch(fetchDeckResult(deckJson))
  }
}

const mapStateToProps = state => {
  return { gameStarted: state.gameStarted };
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);
