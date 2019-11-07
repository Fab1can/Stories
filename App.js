import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import StoryViewScreen from './components/StoryViewScreen';
import WriteScreen from './components/WriteScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  StoryView: {
    screen: StoryViewScreen
  },
  Write: {
    screen: WriteScreen
  }
},{
    initialRouteName: "StoryView"
});

const AppContainer = createAppContainer(AppNavigator);
