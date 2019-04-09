import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Footer from './Footer'

const Title = () => {

      return (
        <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
        </View>
      );
    
  }
export default Title;
const styles = StyleSheet.create({
    header:{
      height: 50,
      backgroundColor: 'skyblue',
      alignItems: 'center',
      textAlign:'center',
    },
    headerText:{
      marginTop: 15,
      fontFamily: 'century gothic',
      fontSize: 15,
      color: 'white'
    },
  });