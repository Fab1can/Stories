import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight, Alert } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class StoryViewScreen extends Component {
  prova = ()=>{
    Alert.alert("Io sono una prova!");
  };

  constructor(){
    super();
    this.names=['alberto', 'giorgio', 'luca'];
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.map}>
        {
          this.names.map(function(name, index){
            return <Text key={index}>{name}</Text>;
          })
        }
        </View>
        <View style={styles.bottombar}>
          <TouchableHighlight style={styles.btn_new} onPress={() => this.props.navigation.navigate('Write')}>
            <Text style={styles.text_new}>
              Nuovo
            </Text>
          </TouchableHighlight>
        </View>
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
    backgroundColor: '#aaa',
    flex: 0.7,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text_new: {
    color:'black',
    fontSize : 50,
  }

});
