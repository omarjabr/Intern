import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View,CheckBox, FlatList } from 'react-native';
import Title from './src/Title';
import Footer from './src/Footer';

export default class App extends Component{
  state={
    Name:[
      {
        id:1,
        title:'Check email',
        check: false,
      },
      {
       id:2,
       check: false,
       title:'Take shower'
     },
     {
       id:3,
       check: false,
       title:'Brush teeth'
     },
     {
       id:4,
       check: false,
       title:'Eat breakfast'
     }
    ]
  }
  checkTest(item)  {
    alert(item.check)
   this.setState({ check: !item.check })
  }
  render(){
    return(
      <View style={styles.container}>
        <Title/>
        <View style={styles.container1}>
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
             value={item.check} onChange={ () => this.checkTest(item) }/>
             </View>
           )}
          />
        </View>
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
  },
  container1:{
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
})