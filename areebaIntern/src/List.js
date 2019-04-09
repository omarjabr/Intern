import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';

const List = () => {
    return(
        <View style={styles.container}>
        <TextInput 
        style={styles.textInput}
        underlineColorAndroid="#D3D3D3"
        placeholder="Enter an item!"
        />
        <ScrollView>
        </ScrollView>
        </View>
    );
}
export default List;
const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection: 'column',
    },
    textInput:{
      height:50,
      fontSize: 15,
    }
  });