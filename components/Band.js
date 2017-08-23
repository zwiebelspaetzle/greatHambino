import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import BandBar from './BandBar';

class Band extends Component {
  render() {
    let totalBandWidth = this.props.band.bounds.upper - this.props.band.bounds.lower;
    let subBandComps = this.props.band.subBands.map((sub, key) => {
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
    return (
      <View style={styles.container}>
        <Text>{this.props.band.bandName}</Text>
        <BandBar band={this.props.band} currentLicense={this.props.currentLicense}/>
        <View style={styles.freqContainer}>
          <Text style={styles.freqText}>{this.props.band.bounds.lower}</Text>
          <Text style={styles.freqText}>{this.props.band.bounds.upper}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bandBar: {
    borderWidth: 1,
    display: 'flex',
    height: 20,
    marginBottom: 5,
    marginTop: 5,
    padding: 0
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
