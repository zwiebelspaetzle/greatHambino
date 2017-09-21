import React from 'react';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default class RootNavigation extends React.Component {
  state = {settings: {license: 5, showUnusableBands: false}};

  constructor() {
    super();
    this.handleSettingInput = this.handleSettingInput.bind(this);
  }

  componentWillMount() {
    this.fetchLicense();
    this.fetchShowUnusableBands();
  }

  async fetchLicense() {
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
    let settings = this.state.settings;
    settings.license = parseInt(license);
    this.setState({settings: settings});
  }

  async fetchShowUnusableBands() {
    let showUnusableBands = false;

    try {
      showUnusableBands = await AsyncStorage.getItem('GreatHambino:showUnusableBands');
      if (showUnusableBands == null) {
        showUnusableBands = false;
        console.log('defaulting showUnusableBands to false');
      }
    } catch (error) {
      console.log('error retrieving showUnusableBands', error);
    }

    let settings = this.state.settings;
    showUnusableBands = (showUnusableBands == "true" || showUnusableBands == 1) ? true : false;
    settings.showUnusableBands = showUnusableBands;
    this.setState({settings: settings});
  }

  async saveSetting(key, value) {
    // save setting
    try {
      await AsyncStorage.setItem('GreatHambino:'+key, String(value));
    } catch (error) {
      console.log("error saving data", error);
    }
  }

  handleSettingInput(key, value) {
    // update screens
    let settings = this.state.settings;
    settings[key] = value
    this.setState({settings: settings});

    this.saveSetting(key, value);
  }

  render() {
    return (
      <MainTabNavigator
        screenProps={{
          "settings": this.state.settings,
          "onSettingInput": this.handleSettingInput
        }}
      />
    )
  }
}
