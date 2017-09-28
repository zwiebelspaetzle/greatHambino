import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import BandBar from './BandBar';

class Band extends Component {
  calculateBandwidthChannelized() {
    let totalBandWidth = this.props.band.bounds.upper - this.props.band.bounds.lower;
    let subsWithSpaces = [];
    let lastLowerFreq = this.props.band.bounds.lower;
    this.props.band.subBands.map((sub, key, subBands) => {
      // ignore pre-existing spacers
      if (!sub.spacer) {
        // create empty subband as spacer
        let bandWidth = sub.bounds.channel.center - lastLowerFreq;
        let percentOfBand = ((bandWidth / totalBandWidth) * 100) - 2.1;

        let spacer = {
          spacer: true,
          bounds: {},
          restrictions:[
            {minClass: 10}
          ],
          percentOfBand: percentOfBand
        };

        // set width for channel
        sub.percentOfBand = 2;

        subsWithSpaces.push(spacer, sub);
        lastLowerFreq = sub.bounds.channel.center;
      }
    });
    this.props.band.subBands = subsWithSpaces;
  }

  getFreqTextChannelized() {
    let channels = this.props.band.subBands.map((sub, key) => {
      if (sub.spacer) {
        return;
      }
      let modes = [];
      let licenses = sub.restrictions.map((restriction, key) => {
        if (restriction.minClass <= this.props.currentLicense) {
          modes = modes.concat(restriction.modes);
        }
      });
      return (
        <View key={key} style={styles.freqContainerChannelized}>
          <View style={{flexBasis: 50}}>
            <Text style={[styles.freqText, styles.freqTextDetailed]}>{sub.bounds.channel.center.toFixed(4)}</Text>
          </View>
          <Text style={[styles.freqText, styles.freqTextDetailed]}>{modes.join(', ')}</Text>
        </View>
      );
    })
    return (
      <View>
        <Text>Channels</Text>
        {channels}
      </View>
    );
  }

  getFreqTextDetailed() {
    if (this.props.band.channelized) {
      return this.getFreqTextChannelized();
    }

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
    if (this.props.band.channelized) {
      this.calculateBandwidthChannelized();
    } else {
      let totalBandWidth = this.props.band.bounds.upper - this.props.band.bounds.lower;
      this.props.band.subBands.map((sub, key) => {
        let subBandWidth = sub.bounds.upper - sub.bounds.lower;
        sub.percentOfBand = (subBandWidth / totalBandWidth) * 100;
      });
    }

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
  freqContainerChannelized: {
    flexDirection: 'row'
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
