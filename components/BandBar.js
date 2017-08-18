import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import SubBandBar from './SubBandBar';

class BandBar extends Component {
  render() {
    let totalBandWidth = this.props.band.bounds.upper - this.props.band.bounds.lower;
    let subBands = this.props.band.subBands.map((sub, key) => {
      let subBandWidth = sub.bounds.upper - sub.bounds.lower;
      sub.percentOfBand = (subBandWidth / totalBandWidth) * 100;

      return <SubBandBar key={key} subBand={sub}></SubBandBar>;
    });

    return (
      <View style={styles.bandBar}>
        {subBands}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bandBar: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
    padding: 0
  }
});

export default BandBar;
