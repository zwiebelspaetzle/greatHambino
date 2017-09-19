import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Band from '../components/Band';
import Key from '../components/Key';

export default class BandDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.band.bandName}`,
  });

  getSubBandNotes() {
    return this.props.navigation.state.params.band.subBands.map((sub, skey) => {
      return sub.restrictions.map((res, rkey) => {
        if (res.notes) {
          return (
            <View>
              <Text style={{fontStyle: 'italic'}}>{sub.bounds.lower}-{sub.bounds.upper}MHz:</Text>
              <Text>{res.notes}</Text>
            </View>
          );
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
        <Key band={band}/>
        <ScrollView style={styles.notesContainer}>
          <Text style={styles.bold}>Notes</Text>
          {(band.notes.length > 0) ? <Text>{band.notes}</Text> : null}
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
