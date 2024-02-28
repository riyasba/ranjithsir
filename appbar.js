import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'grey', // Adjust color as needed
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // Adjust if the status bar height changes
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppBar;