import React, { Component } from "react";
import { StyleSheet,TextInput, Text, View, TouchableHighlight, Alert } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class WriteScreen extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'flex-end',
    //justifyContent: 'center',
  }

});
