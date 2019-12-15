import React from 'react'
import { View } from 'react-native'
import Todo from './app/Todo';

const TodoList = ({items, toggleComplete, deleteTodo, type}) => {
    return (
      <View>
        {items
        .filter(todo => {
            switch (type) {
                case 'All': return true;
                case 'Complete': return todo.complete == true;
                case 'Active': return todo.complete == false;
                default: throw "Bad type provided to TodoList."
            }
        })
        .map((todo, i) => {
          // refactor into TodoList.js
          return (
            <Todo
              id={todo.todoIndex}
              todo={todo}
              key={todo.todoIndex}
              index={i}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            ></Todo>
          );
        })}
      </View>
    );
}

export default TodoList
