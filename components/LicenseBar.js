import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import modes from '../data/modes';

export default class LicenseBar extends Component {
  render() {
    let modeComps = this.props.modes.map((mode, key) => {
      return <View key={key} style={[styles.modeBar, {backgroundColor: modes[mode].color}]}></View>
    });

    return (
      <View style={styles.licenseBar}>
        {modeComps}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  licenseBar: {
    borderColor: 'gray',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 20,
    flexGrow: 1,
  },
  modeBar: {
    flexGrow: 1,
  }
});
