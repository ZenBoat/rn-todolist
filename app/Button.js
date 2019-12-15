import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from "react-native"


export default Button = ({ submitTodo }) => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button} onPress={submitTodo} underlayColor="#fff"> 
          <Text style={styles.submit}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    height: 50,
    width:200,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#aaaaaa',
    borderRadius: 50,
    borderColor: '#ffffff',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20
  }
});