import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import LicenseBar from './LicenseBar';

class SubBandBar extends Component {
  render() {
    let modes = [];
    let licenses = this.props.subBand.restrictions.map((restriction, key) => {
      if (restriction.minClass <= this.props.currentLicense) {
        modes = modes.concat(restriction.modes);
      }
    });
    return (
      <View style={[
          (this.props.subBand.bounds.channel) ? styles.rounded : null,
          styles.subBandBar,
          {flexBasis: this.props.subBand.percentOfBand+'%'},
        ]} >
        <LicenseBar modes={modes}></LicenseBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rounded: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  subBandBar: {
    display: 'flex',
    flexDirection: 'column',
  }
});

export default SubBandBar;
