import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Band from '../components/Band';
import freqAlloc from '../data/freqAlloc.json';

export default class BandPlanPage extends Component {
  static navigationOptions = {
    title: 'Band Plan',
  };

  render() {
    let bandsComponents = freqAlloc.map((band, key) => {
      return <Band band={band} key={key} currentLicense={this.props.screenProps.settings.license} />;
    });
    return (
      <ScrollView style={styles.pageContainer}>
        {bandsComponents}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    margin: 20
  }
});
