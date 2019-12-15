import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

const TodoButton = ({complete, onPress, name}) => {
    return (
        <TouchableHighlight style={styles.button} onPress={onPress}>
            <Text style={[styles.text, complete ? styles.complete : null, name === 'Delete' ? styles.delete : null]}>
                {name}
            </Text>
        </TouchableHighlight>
    )
}

export default TodoButton

const styles = StyleSheet.create({
    button: {
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        margin: 5,
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    delete: {
        color: 'rgba(175, 47, 47, 1)'
    }
})