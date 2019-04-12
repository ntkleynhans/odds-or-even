import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, endGame } from '../actions/settings';

class App extends Component {
  render() {
    return(
      <div>
        <h2>Odds or Evens</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3>The game has started</h3>
              <hr />
              <button type="button" className="btn btn-warning" onClick={this.props.endGame}>End the game</button>
            </div>
          ) : (
            <div>
              <h3>A new game awaits</h3>
              <hr />
              <button type="button" className="btn btn-info" onClick={this.props.startGame}>Start game</button>
            </div>
          )
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    endGame: () => dispatch(endGame())
  }
}

const mapStateToProps = state => {
  return { gameStarted: state.gameStarted };
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);
