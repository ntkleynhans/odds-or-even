import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, endGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import Instructions from './Instructions';
import fetchStates from '../reducers/fetchStates';

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }

  render() {

    if (this.props.fetchStates === fetchStates.error) {
      return(
        <div>
          <p>There was an error:</p>
          <p>{ this.props.message }</p>
        </div>
      )
    }

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

/*const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    endGame: () => dispatch(endGame()),
    fetchNewDeck: () => fetchNewDeck(dispatch)
  }
}*/

const mapStateToProps = state => {
  const { gameStarted, fetchStates, message } = state
  return { gameStarted, fetchStates, message };
}

const componentConnector = connect(mapStateToProps, { startGame, endGame, fetchNewDeck });

export default componentConnector(App);
