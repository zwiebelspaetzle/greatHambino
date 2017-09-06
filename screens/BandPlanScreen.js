import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Band from '../components/Band';
import BandDetailsScreen from '../screens/BandDetailsScreen';
import freqAlloc from '../data/freqAlloc.json';

export default class BandPlanScreen extends Component {
  static navigationOptions = {
    title: 'Band Plan'
  };

  render() {
    let bandsComponents = freqAlloc.map((band, key) => {
      return (
        <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('BandDetails')}>
          <Band
            band={band}
            currentLicense={this.props.screenProps.settings.license}
          />
        </TouchableOpacity>
      );
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
