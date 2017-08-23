import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import LicenseBar from './LicenseBar';

class SubBandBar extends Component {
  render() {
    let modes = [];
    let licenses = this.props.subBand.restrictions.map((restriction, key) => {
      console.log("minclass", restriction.minClass);
      console.log("currentLinces", this.props.currentLicense);
      if (restriction.minClass <= this.props.currentLicense) {
        modes = modes.concat(restriction.modes);
      }
      console.log('modes', modes);
    });
    return (
      <View style={[styles.subBandBar, {flexBasis: this.props.subBand.percentOfBand+'%'}]} >
        <LicenseBar modes={modes}></LicenseBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subBandBar: {
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
  }
});

const modeColors = {
  "RTTY": "green",
  "data": "yellow",
  "phone": "red",
  "image": "black",
  "CW": "blue"
};

export default SubBandBar;
