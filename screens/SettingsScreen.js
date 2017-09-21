import React from 'react';
import { Picker, Switch, StyleSheet, Text, View } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
    this.handleLicenseInputChange = this.handleLicenseInputChange.bind(this);
    this.handleShowInputChange = this.handleShowInputChange.bind(this);
  }

  handleLicenseInputChange(itemValue, itemIndex) {
    this.props.screenProps.onSettingInput('license', itemValue);
  }

  handleShowInputChange(itemValue) {
    this.props.screenProps.onSettingInput('showUnusableBands', itemValue);
  }

  render() {
    console.log(this.props.screenProps.settings);
    return (
      <View style={styles.pageContainer}>
        <Text>License: </Text>
        <Picker
          selectedValue={this.props.screenProps.settings.license}
          onValueChange={this.handleLicenseInputChange}
        >
          {
            licenses.map((l, key) => {
              return <Picker.Item label={l.name} value={l.value} key={key} />;
            })
          }
        </Picker>

        <Text>Show bands without privileges for current class</Text>
        <Switch
          value={this.props.screenProps.settings.showUnusableBands}
          onValueChange={this.handleShowInputChange}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    flexShrink: 1,
    margin: 20,
    marginBottom: 10,
  }
});

const licenses = [
  {
    "name": "Amateur Extra",
    "value": 5
  },
  {
    "name": "Advanced",
    "value": 4
  },
  {
    "name": "General",
    "value": 3
  },
  {
    "name": "Technician",
    "value": 2
  },
  {
    "name": "Novice",
    "value": 1
  }
]
