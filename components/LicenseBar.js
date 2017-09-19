import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

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

const colors = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f', "pink"];
export const modes = {
  "RTTY": {
    "color": colors[0]
  },
  "data": {
    "color": colors[1]
  },
  "phone": {
    "color": colors[2]
  },
  "image": {
    "color": colors[3]
  },
  "SSB": {
    "color": colors[4]
  },
  "USB": {
    "color": colors[5]
  },
  "CW": {
    "color": colors[6]
  },
  "forwarding": {
    "color": colors[7]
  }
};
