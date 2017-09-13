import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Band from '../components/Band';
import BandDetailsScreen from '../screens/BandDetailsScreen';
import freqAlloc from '../data/freqAlloc.json';

export default class BandPlanScreen extends Component {
  static navigationOptions = {
    title: 'All Bands'
  };

  render() {
    let license = this.props.screenProps.settings.license;

    freqAlloc.map((band) => {
      let prevSub = {licenseModes: null, bounds: null};
      band.subBands.map((sub, key) => {

        sub.licenseModes = [];
        sub.restrictions.map((restriction) => {
          if (restriction.minClass <= license) {
            sub.licenseModes = sub.licenseModes.concat(restriction.modes);
          }
        });
        sub.licenseModes.sort();

        if (license) {
          // if this sub has the same privs as the previous, merge the two
          if (JSON.stringify(sub.licenseModes) == JSON.stringify(prevSub.licenseModes)) {
            sub.bounds.lower = prevSub.bounds.lower;
            delete(band.subBands[key-1]);
          }
        }
        prevSub = sub;
      });
    });

    let bandsComponents = freqAlloc.map((band, key) => {
      return (
        <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('BandDetails', {band: band})}>
          <Band
            band={band}
            currentLicense={license}
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
