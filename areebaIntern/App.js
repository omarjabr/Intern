import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View } from 'react-native';
import Title from './src/Title';
import Footer from './src/Footer';
// import List from './src/List';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Title/>
        {/* <List/> */}
        <View style={styles.foot}> 
          <Footer/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  foot:{
    flex:1,
    position:'absolute',
    right:0,
    left:0,
    bottom:0,
  },
  container:{
    flex:1
  }
})