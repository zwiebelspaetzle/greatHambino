import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

class Band extends Component {
  render() {
    let totalBandWidth = this.props.info.bounds.upper - this.props.info.bounds.lower;
    let subBandComps = this.props.info.subBands.map((sub, key) => {
      let subBandWidth = sub.bounds.upper - sub.bounds.lower;
      let basis = (subBandWidth / totalBandWidth) * 100;
      return sub.restrictions[0].modes.map((mode) => {
        return <View style={[
          styles.barSubContainer, {
            backgroundColor: modeColors[mode],
            flexBasis: basis+'%',
          }]}></View>;
      });
    });
    console.log('sbc', subBandComps);
    return (
      <View style={styles.container}>
        <Text>{this.props.info.bandName}</Text>
        <View style={styles.barContainer}>
          {subBandComps}
        </View>
        <View style={styles.freqContainer}>
          <Text style={styles.freqText}>{this.props.info.bounds.lower}</Text>
          <Text style={styles.freqText}>{this.props.info.bounds.upper}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barContainer: {
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 10,
    marginBottom: 5,
    marginTop: 5,
    padding: 0
  },
  barSubContainer: {
    backgroundColor: 'red'
  },
  container: {
    alignItems: 'stretch',
    display: 'flex',
    marginBottom: 10
  },
  freqContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  freqText: {
    fontSize: 12
  }
});

const modeColors = {
  "RTTY": "pink",
  "data": "cyan",
  "phone": "red",
  "image": "gray",
  "CW": "blue"
};

export default Band;
