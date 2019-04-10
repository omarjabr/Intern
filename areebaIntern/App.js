import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View,CheckBox, FlatList } from 'react-native';
import Title from './src/Title';
import Footer from './src/Footer';

export default class App extends Component{
  state={
    checked: [],
    data :[
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
  componentWillMount() {
    let { data, checked } = this.state;
    let intialCheck = data.map(x => true);
    this.setState({ checked: intialCheck })
  }
  handleChange = (index) => {
    let { checked } = this.state;
    checked[index] = !checked[index];
    this.setState({ checked });
  }
  render(){
    let { data, checked } = this.state;
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
           data={data}
           renderItem={({ item, index }) => (
             <View style={styles.flist}>
             <Text style={styles.checkBoxText}>{item.title}</Text>
             <CheckBox 
             onPress={() => this.handleChange(index)}
             check={checked[index]}
             />
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