import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableOpacity, CheckBox } from 'react-native';

const List = () => {
    state = {
        Name:[
            {
                id:1,
                title:'Check Email'  
            },
            {
                id:2,
                title:'Take a shower'
            },
            {
                id:3,
                title:'Brush teeth'
            },
            {
                id:4,
                title:'eat breakfast'
            }
        ]
    }
    return(
        <View style={styles.container}>
        <TextInput 
        style={styles.textInput}
        underlineColorAndroid="#D3D3D3"
        placeholder="Enter an item!"
        />
        <ScrollView>
            {
                this.state.Name.map((item) => (
                    <TouchableOpacity
                    key={item.id}>
                            <CheckBox
                            title="name"/>
                    </TouchableOpacity>
                ))
            }
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