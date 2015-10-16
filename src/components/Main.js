'use strict';

import React from 'react-native';

const { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
} = React;

const Main = React.createClass({
  render () {
    return (
      <Navigator
        initialRoute={this.props.screen}
        renderScene={this.renderScene}
      />
    );
  },

  renderScene (route, navigator) {
    const { screen, actions } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {route.name}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>

        <TouchableOpacity onPress={()=>this.gotoScreen(`screen ${route.index}`, navigator)}>
          <Text>
            NEXT
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.goBack(navigator)}>
          <Text>
            BACK
          </Text>
        </TouchableOpacity>
      </View>
    );
  },

  gotoScreen(name, navigator) {
    const { screen, actions } = this.props;
    actions.pushScreen(name, navigator);
  },

  goBack(navigator) {
    const { screen, actions } = this.props;
    actions.popScreen(navigator);
  }
});

Main.propTypes = {
  screen: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Main;