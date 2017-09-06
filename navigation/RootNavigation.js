import React from 'react';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

// const RootStackNavigator = StackNavigator(
//   {
//     Main: {
//       screen: MainTabNavigator,
//     },
//   }
// );

export default class RootNavigation extends React.Component {
  state = {settings: {}};

  constructor() {
    super();
    this.handleLicenseInput = this.handleLicenseInput.bind(this);
  }

  componentDidMount() {
    this.fetchLicense();
  }

  async fetchLicense() {
    console.log('fetchLicense');
    let license = 5;

    try {
      license = await AsyncStorage.getItem('GreatHambino:license');
      if (license == null) {
        license = 5;
        console.log('defaulting license to 5');
      }
    } catch (error) {
      console.log('error retrieving saved license', error);
    }
    console.log(license);
    this.setState({"settings": {"license": parseInt(license)}});
  }

  async getSetting() {
    let license = 5;

    try {
      license = await AsyncStorage.getItem('GreatHambino:license');
      if (license == null) {
        license = 5;
        console.log('defaulting license to 5');
      }
    } catch (error) {
      console.log('error retrieving saved license', error);
    }

    return license;
  }

  async saveSetting(license) {
    // save setting
    try {
      await AsyncStorage.setItem('GreatHambino:license', String(license));
    } catch (error) {
      console.log("error saving data", error);
    }
  }

  handleLicenseInput(license) {
    // update screens
    this.setState({
      "settings": {"license": license}
    });

    this.saveSetting(license);
  }

  render() {
    return (
      <MainTabNavigator
        screenProps={{
          "settings": this.state.settings,
          "onLicenseInput": this.handleLicenseInput
        }}
      />
    )
  }
}
