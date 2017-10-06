import React from 'react'
import TodoBase from './todo.base'
import { capitalize } from '../../utils/helper';

export default class TodoApp extends TodoBase {
    render() {
        return(
            <div>
                <input type="text" id="text" placeholder="My Todo" onChange={this.onChangeInput.bind(this.state.text)}  />
                <input type="submit" value="Submit" onClick={this.addTodo} />

                {
                    this.state.todos.map((value, index) => {
                        return <span key={index}>
                        {index + 1} -- {capitalize
                        (value)} <br/>
                        </span>
                    })
                }
            </div>
        )
    }
}