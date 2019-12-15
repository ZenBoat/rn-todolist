import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({ type, setType }) => {
  return (
    <View style={styles.container}>
      <TabBarItem
        style={styles.barItem}
        type={type}
        title='All'
        setType={() => setType('All')}
      ></TabBarItem>
      <TabBarItem
        style={styles.barItem}
        type={type}
        title='Active'
        setType={() => setType('Active')}
      ></TabBarItem>
      <TabBarItem
        style={styles.barItem}
        type={type}
        title='Complete'
        setType={() => setType('Complete')}
      ></TabBarItem>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
      height: 70,
      flexDirection: 'row',
      borderTopWidth: 1,
      borderTopColor: '#dddddd',
      width: '100%',
  },
  barItem: {
  }

});
