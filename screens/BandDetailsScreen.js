import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Band from '../components/Band';

export default class BandDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.band.bandName}`,
  });

  getSubBandNotes() {
    return this.props.navigation.state.params.band.subBands.map((sub, skey) => {
      return sub.restrictions.map((res, rkey) => {
        if (res.notes) {
          return <Text>{sub.bounds.lower}-{sub.bounds.upper}MHz: {res.notes}</Text>;
        }
      });
    });
  }

  render() {
    const band = this.props.navigation.state.params.band;
    return (
      <View style={styles.pageContainer}>
        <Band
          band={band}
          currentLicense={this.props.screenProps.settings.license}
          showDetails={true}
        />
        <ScrollView style={styles.notesContainer}>
          <Text style={styles.bold}>Notes</Text>
          <Text>{band.notes}</Text>
          {this.getSubBandNotes()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  pageContainer: {
    margin: 20
  },
  notesContainer: {
    marginTop: 10
  }
});
