import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Band from './Band';
import freqAlloc from '../data/freqAlloc.json';

class BandPlanPage extends Component {
  render() {
    let bandsComponents = freqAlloc.map((band, key) => {
      return <Band band={band} key={key}/>;
    });
    return (
      <View style={styles.pageContainer}>
        {bandsComponents}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    margin: 20
  }
});

export default BandPlanPage;
