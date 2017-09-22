import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import modes from '../data/modes';

class Key extends Component {
  getSwatch(mode) {
    return <View key={mode+'swatch'} style={[styles.swatch, {backgroundColor: modes[mode].color}]}></View>;
  }

  getModesInBand() {
    if (this.props.band) {
      // key for a specific band
      let modesInBand = [];
      this.props.band.subBands.map((sub) => {
        sub.licenseModes.map((mode) => {
          if (!modesInBand.includes(mode)) {
            modesInBand.push(mode);
          }
        });
      });
      return modesInBand;
    } else {
      // key for all bands
      return Object.keys(modes);
    }


  }

  render() {
    let modesInBand = this.getModesInBand();
    return (
      <View style={styles.keyContainer}>
        {modesInBand.map((mode) => {
          return (
            <View key={mode+'view'} style={styles.keyItemContainer}>
              {this.getSwatch(mode)}
              <Text key={mode+'text'}>{mode}</Text>
            </View>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyContainer: {
    borderWidth: 1,
    borderColor: '#666',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    padding: 10,
  },
  keyItemContainer: {
    alignItems: 'center',
    display: 'flex',
    flexBasis: 104,
    flexDirection: 'row',
  },
  swatch: {
    borderWidth: 1,
    height: 12,
    marginRight: 8,
    marginTop: 2,
    marginBottom: 2,
    width: 20,
  }
});

export default Key;
