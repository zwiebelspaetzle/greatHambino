import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {

  constructor() {
    super();
    this.handleLicenseInput = this.handleLicenseInput.bind(this);
    this.state = {"settings": {"license": 5}};
  }

  handleLicenseInput(license) {
    this.setState({
      "settings": {"license": license}
    });
  }

  render() {
    return (
      <RootStackNavigator
        screenProps={{
          "settings": this.state.settings,
          "onLicenseInput": this.handleLicenseInput
        }}
      />
    )
  }
}
