import React from 'react';
import { Picker, Text, View } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
    this.handleLicenseInputChange = this.handleLicenseInputChange.bind(this);
  }

  handleLicenseInputChange(itemValue, itemIndex) {
    this.props.screenProps.onLicenseInput(itemValue);
  }

  render() {
    return (
      <View>
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

      </View>
    );
  }
}

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
