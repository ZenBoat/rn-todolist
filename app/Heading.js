import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading = ({ title }) => {
    return (
        <View style={styles.header}>
<Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    marginBottom: 20
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '100',
    fontSize: 72,
    color: '#fff',
    shadowOpacity: 0.3,
    shadowOffset: { height: 4, width: 4 },
    shadowRadius: 1
  }
});

export default Heading
