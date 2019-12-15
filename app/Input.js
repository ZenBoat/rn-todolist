import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';

const Input = ({ setInputValue, inputValue }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Enter a todo here'
              placeholderTextColor='#c7fce7'
              selectionColor='#ffffff'
              onChangeText={text => {
                setInputValue(text);
              }}
>{inputValue}</TextInput>

        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 20, 
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowOffset: {width:2, height:2},
        shadowRadius: 3,
    },
  textInput: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    lineHeight: 50
  }
});


export default Input
