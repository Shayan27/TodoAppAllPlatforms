import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity} from 'react-native';
import { capitalize } from '../../utils/helper';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Header from '../header/header';
import TodoBase from './todo.base';

export default class Todo extends TodoBase {
  render() {
    return (
      <View style={styleTodo.container}>
      <Header />
      <ScrollView style={styleTodo.todoMain} contentContainerStyle={styleTodo.todoContainer}>
        <TextInput
          style={styleTodo.textInput}
          placeholder="My Todo"
          ref="textfield"
          onChangeText={this.onChangeInput.bind(this)}
        />
        <TouchableOpacity style={styleTodo.addBtn} onPress={this.addTodo.bind(this)}>
            <Text style={styleTodo.addBtnText}>
                Add
            </Text>
          </TouchableOpacity>
        {
            this.state.todos.map((value, index) => {
                return <Text style={styleTodo.item} key={index}>
                {index + 1} -- {capitalize
                (value)}
                </Text>
            })
        }
      </ScrollView>
      </View>
    );
  }
}



const styleTodo = StyleSheet.create({
  container: {
    flex: 1
  },
  todoMain: {
    flex: 1,
  },
  todoContainer: {
    alignItems: 'center',
  },
  textInput: {
     height: 40,
     paddingLeft: 3,
     width: '80%',
     alignItems: 'center',
     marginTop: 30,
     fontSize: 15,
     marginBottom: 10,
  },
  todoAdd: {
    width: 80,
  },
  addBtn: {
    backgroundColor: '#333',
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  addBtnText: {
    fontSize: 14,
    color: '#fff',
  },
  item: {
      borderBottomWidth: 1,
      borderBottomColor: '#365899',
      paddingTop: 5,
      marginBottom: 5,
      paddingBottom: 1,
  },
});
