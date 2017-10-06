import React from 'react';

export default class TodoBase extends React.Component {
    state = {
        todos: [],
        value: '',
    }

    constructor() {
        super();
    }
    
    componentDidMount() {
    }
    
    componentWillMount(){
        console.log('componentWillMount')
    }

    onChangeInput = (e) => {
        if(e.target && e.target.value) {
            console.log(e.target.value);
            this.setState({
                value: e.target.value
            });
        } else {
            this.setState({
                value: e
            });
        }
    }
  
      clearText = (fieldName) => {
          this.refs[fieldName].setNativeProps({text: ''});
      }
      
      addTodo = () => {
      let todo = this.state.todos;
      todo.push(this.state.value)
      this.setState({
          value: ''
      })
      }
  }