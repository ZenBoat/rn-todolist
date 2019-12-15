import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import TodoButton from './TodoButton'

const Todo = ({ todo, index, id, toggleComplete, deleteTodo }) => {
    return (
      <View style={styles.todoContainer} key={id}>
        <Text style={styles.todo}>
          #{index}: {todo.title} is {todo.complete ? 'FIN.' : '^FIN.'}
        </Text>
        <TodoButton
          name='Delete'
          delete={true}
          onPress={() => {
            deleteTodo(id);
          }}
        ></TodoButton>
        <TodoButton
          name='Complete'
          complete={true}
          onPress={() => toggleComplete(id)}
        ></TodoButton>
      </View>
    );
}

export default Todo

const styles = StyleSheet.create({
  todo: {
    color: 'white',
    fontWeight: '300',
    width: '60%',
    fontSize: 20,
    fontSize: 20,
    flexShrink: 1
  },
  todoContainer: {
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: '5%',
    paddingLeft: '2%',
    borderColor: '#fff',
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    // alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 10
  }
});
