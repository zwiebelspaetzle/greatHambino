import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import LicenseBar from './LicenseBar';

class SubBandBar extends Component {
  render() {
    console.log('SubBandBar');
    let licenses = this.props.subBand.restrictions.map((restriction, key) => {
      return <LicenseBar key={key} restriction={restriction}></LicenseBar>;
    });
    return (
      <View style={[styles.subBandBar, {flexBasis: this.props.subBand.percentOfBand+'%'}]} >
        {licenses}
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
