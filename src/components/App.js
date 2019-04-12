import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return(
      <div></div>
    )
  }
}

const mapStateToProps = state => {
  return { gameStarted: state.gameStarted };
}

const componentConnector = connect(mapStateToProps);

export default componentConnector(App);
