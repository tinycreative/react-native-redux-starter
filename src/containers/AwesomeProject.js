'use strict';

import React, { Component, View, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import Main from '../components/Main';
import * as actions from '../actions';
import { connect } from 'react-redux/native';

class App extends Component {
  render() {
    const { screen, actions } = this.props;

    return (
      <View style={styles.container}>
        <Main
          screen={screen}
          actions={actions}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})


function mapStateToProps(state) {
  return {
    screen: state.screen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);