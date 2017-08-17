import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BandPlanPage from './components/BandPlanPage';

export default class greatHambino extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BandPlanPage></BandPlanPage>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  
});

AppRegistry.registerComponent('greatHambino', () => greatHambino);
