import React, { Component, bind } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Head from './components/Head';
import Input from './components/TodoInput';
import Button from './components/TodoSubmit';
import TodoList from './components/TodoList';
import TabBar from './components/TabBar';


let todoIndex = 0;

class App extends Component {
  
  constructor() {
    super();
    
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }

    this.submitToDo = this.submitToDo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  inputChange = (inputValue) => {
    console.log(inputValue);
    this.setState({ inputValue });
  }

  submitToDo = () => {
    if (this.state.inputValue === '') {
      return
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }

    todoIndex++;

    const todoList = [...this.state.todos, todo];

    this.setState({
      todos: todoList,
      inputValue: ''
    });
  }

  deleteTodo = (todoIndex) => {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  toggleComplete = (todoIndex) => {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    });

    this.setState({ todos });
  }

  setType = (type) => {  
    this.setState({ type })
  }

  render() {
    const { todos, type, inputValue } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Head/>
          <Input
          inputValue={inputValue}
          inputChange={ (text) => this.inputChange(text) }/>
          <Button submitToDo={this.submitToDo} />
          <TodoList
          toggleComplete={this.toggleComplete} 
          deleteTodo={this.deleteTodo} 
          todos={todos}
          type={type} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2B705'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;