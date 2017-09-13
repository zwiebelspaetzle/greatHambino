import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import BandBar from './BandBar';

class Band extends Component {
  getFreqTextDetailed() {
    return (
      <View style={styles.freqContainerDetailed}>
        {
          this.props.band.subBands.map((sub, key) => {
            let last = (key == this.props.band.subBands.length-1);
            return (
              <View
                key={key}
                style={[
                  styles.freqContainerDetailedTextView,
                    {flexBasis: sub.percentOfBand+'%'},
                    (last ? {borderRightWidth: 1} : null)
                ]}>
                <Text style={styles.freqText}>{sub.bounds.lower}</Text>
                {last
                  ? <Text style={[styles.freqText, styles.freqTextDetailed]}>{sub.bounds.upper}</Text>
                  : null
                }
              </View>
            );
          })
        }
      </View>
    );
  }

  getFreqTextSimple() {
    return (
      <View style={styles.freqContainerSimple}>
        <Text style={styles.freqText}>{this.props.band.bounds.lower}</Text>
        <Text style={styles.freqText}>{this.props.band.bounds.upper} MHz</Text>
      </View>
    );
  }

  render() {
    console.log(this.props.band.subBands)
    let totalBandWidth = this.props.band.bounds.upper - this.props.band.bounds.lower;
    this.props.band.subBands.map((sub, key) => {
      let subBandWidth = sub.bounds.upper - sub.bounds.lower;
      sub.percentOfBand = (subBandWidth / totalBandWidth) * 100;
    });

    return (
      <View style={styles.container}>
        <Text>{this.props.band.bandName}</Text>
        <BandBar band={this.props.band} currentLicense={this.props.currentLicense}/>
        {(this.props.showDetails) ? this.getFreqTextDetailed() : this.getFreqTextSimple()}
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
  freqContainerDetailed: {
    display: 'flex',
    flexDirection: 'row'
  },
  freqContainerDetailedTextView: {
    alignItems: 'flex-end',
    borderLeftWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 20,
    justifyContent: 'space-between',
    paddingLeft: 2,
    paddingRight: 2
  },
  freqContainerSimple: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  freqText: {
    fontSize: 10
  },
  freqTextDetailed: {
    fontSize: 9
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
