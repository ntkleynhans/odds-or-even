import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, endGame } from '../actions/settings';

class App extends Component {
  startGame = () => {
    this.props.dispatch(startGame());
  }

  endGame = () => {
    this.props.dispatch(endGame());
  }

  render() {
    return(
      <div>
        <h2>Odds or Evens</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3>The game has started</h3>
              <hr />
              <button type="button" className="btn btn-warning" onClick={this.endGame}>End the game</button>
            </div>
          ) : (
            <div>
              <h3>A new game awaits</h3>
              <hr />
              <button type="button" className="btn btn-info" onClick={this.startGame}>Start game</button>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { gameStarted: state.gameStarted };
}

const componentConnector = connect(mapStateToProps);

export default componentConnector(App);
