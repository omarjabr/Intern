import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity  } from 'react-native';
import SelectMultiple from 'react-native-select-multiple'

export default class Index extends Component{

  state = { 
    selectedTodo: [],
    txt:'',
    refreshing: false,
    TodoList:[]
  }

  onSelectionsChange = (selectedTodo) => {
    this.setState({ selectedTodo })
  }
  addTodoList(){
    this.state.TodoList.push({label: this.state.txt.toString(), value: this.state.txt.toString()})
    this.setState({refreshing: true});
  }
  removeItem(){
    var array = [...this.state.TodoList];
    array.map((element1) => {
      this.state.selectedTodo.map((element) => {
        if(element1.label==element.label){
        const index = array.findIndex((element) => element.label === element1.label);
        array.splice(index,1)
        this.setState({TodoList: array})
        }
      })
    })
    this.setState({refreshing: true});
    }

  render(){
    return(
      <View style={styles.container}>

        <TouchableOpacity onPress={()=>this.addTodoList()}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
        </View>
        </TouchableOpacity>

        <View style={styles.container1}>
        <TextInput 
        onChangeText={TextInputValue=>this.setState({txt:TextInputValue})}
        style={styles.textInput}
        underlineColorAndroid="#D3D3D3"
        placeholder="Enter an item!"
        />
          <View>
        <SelectMultiple
          items={this.state.TodoList}
          selectedItems={this.state.selectedTodo}
          onSelectionsChange={this.onSelectionsChange} />
      </View>
        </View>

        
        <View style={styles.foot}> 
        <TouchableOpacity onPress={()=>this.removeItem()}>
        <View style={styles.container3}>
                <Text style={styles.removeButton}>
                    Remove completed items
                </Text>
            </View>
            </TouchableOpacity>
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
    backgroundColor:'white',
    height:450,
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
  },
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
  container3:{
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#D3D3D3',
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
},
removeButton:{
    position: 'absolute',
    bottom:0,
    color:'red',
    textAlign: 'center',
    paddingBottom: 15,
}
})