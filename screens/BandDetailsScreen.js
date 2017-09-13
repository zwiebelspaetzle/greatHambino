import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Band from '../components/Band';

export default class BandDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.band.bandName}`,
  });

  render() {
    const band = this.props.navigation.state.params.band;
    return (
      <View style={styles.pageContainer}>
        <Band
          band={band}
          currentLicense={this.props.screenProps.settings.license}
          showDetails={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    margin: 20
  }
});
