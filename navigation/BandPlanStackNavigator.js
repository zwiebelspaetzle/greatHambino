import React, { Component } from 'react';
import { StackNavigator} from 'react-navigation'

import BandPlanScreen from '../screens/BandPlanScreen';
import BandDetailsScreen from '../screens/BandDetailsScreen';

const BandPlanStackNavigator = StackNavigator(
  // routes
  {
    BandPlan: {
        screen: BandPlanScreen,
        navigationOptions:({navigation}) => ({
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    BandDetails: {
        screen: BandDetailsScreen,
        navigationOptions: (props) => ({
        })
    }
  },
  // config
  {
    headerMode: 'float'
  }
);

export default BandPlanStackNavigator;
