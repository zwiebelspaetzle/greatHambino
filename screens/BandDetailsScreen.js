import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

export default class BandDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Band Details',
  };

  render() {
    return <Text>Band Details Screen</Text>
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    margin: 20
  }
});
