import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const TabBarItem = ({type, title, setType}) => {
  const selected = (type == title) ? selectedTab.tab : null;
  console.log(selected);

    return (
      <View style={styles.buttonContainer}>
        <Button disabled={type == title} onPress={setType} style={selected} title={title}></Button>
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

const selectedTab = StyleSheet.create({
  tab: {
    fontWeight: "500",
    color: 'white'
  }
})