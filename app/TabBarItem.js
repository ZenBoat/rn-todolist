import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const TabBarItem = ({type, title, setType}) => {
    return (
      <View style={styles.buttonContainer}>
        <Button onPress={setType} style={styles.button} title={title}></Button>
      </View>
    );
}

export default TabBarItem

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        flex: 1
    }
})
