import React from 'react';
import { Platform, Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Colors from '../constants/Colors';

import SettingsScreen from '../screens/SettingsScreen';
import BandPlanStackNavigator from './BandPlanStackNavigator';

export default TabNavigator(
  {
    BandPlan: { screen: BandPlanStackNavigator },
    Settings: { screen: SettingsScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Settings':
            iconName = 'gears';
            break;
          case 'BandPlan':
            iconName = 'list';
            break;
        }
        return (
          <FontAwesome
            style={{ fontSize: 20, marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          >{Icons[iconName]}</FontAwesome>
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
