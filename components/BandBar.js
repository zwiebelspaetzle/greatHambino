import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import SubBandBar from './SubBandBar';

class BandBar extends Component {
  render() {
    let subBands = this.props.band.subBands.map((sub, key) => {
      return <SubBandBar key={key} subBand={sub} currentLicense={this.props.currentLicense}></SubBandBar>;
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
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
    padding: 0
  }
});

export default BandBar;
