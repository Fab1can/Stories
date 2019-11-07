import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableHighlight, Alert } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class WriteScreen extends Component {
  prova = ()=>{
    Alert.alert("Io sono una prova!");
  };

  constructor(){
    super();
    this.names=['alberto', 'giorgio', 'luca'];
  }

  render() {
    return (
      <View>
        <Text>
          Write
        </Text>
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
  },
  bottombar: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  map: {
    flex : 5,
  },
  btn_new: {
    backgroundColor: 'grey',
    flex: 0.7,
  },
  text_new: {
    color:'black'
  }

});
