import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableOpacity, CheckBox, FlatList  } from 'react-native';


checkTest()
{
 this.setState({check: !this.state.check})
}

const List = () => {
 state={
   check:false,
   Name:[
     {
       id:1,
       title:'Check email'
     },
     {
      id:2,
      title:'Take shower'
    },
    {
      id:3,
      title:'Brush teeth'
    },
    {
      id:4,
      title:'Eat breakfast'
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
          <FlatList
           data={this.state.Name}
           renderItem={({ item }) => (
             <View style={styles.flist}>
             <Text style={styles.checkBoxText}>{item.title}</Text>
             <CheckBox 
             value={this.state.check} onChange={()=>this.checkTest()}/>
             </View>
           )}
          />
        </View>
    );
}
export default List;
const styles = StyleSheet.create({
    container:{
      height:428,
      flexDirection: 'column',
    },
    textInput:{
      height:50,
      fontSize: 15,
    },
    flist:{
      padding: 5,
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    checkBoxText:{
      fontFamily: 'century gothic',
      fontSize: 15,
    }

  });