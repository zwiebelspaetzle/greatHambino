import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

class LicenseBar extends Component {
  render() {
    let modes = this.props.restriction.modes.map((mode, key) => {
      return <View key={key} style={[styles.modeBar, {backgroundColor: modeColors[mode]}]}></View>
    });

    return (
      <View style={styles.licenseBar}>
        {modes}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  licenseBar: {
    backgroundColor: 'red',
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    height: 20,
    // flexGrow: 1,
  },
  modeBar: {
    flexGrow: 1,
  }
});

const colors = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f'];
const modes = [
  "RTTY",
  "data",
  "phone",
  "image",
  "SSB",
  "USB",
  "CW"
];
var modeColors = {};
for (var i in modes) {
  modeColors[modes[i]] = colors[i];
}

export default LicenseBar;
