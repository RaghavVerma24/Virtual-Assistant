import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export default function Results() {
  return (
    <View style={styles.container}>
        <Text style={styles.results}>You chance of having have Covid-19 is (low/likely/high/very high) depending on your symptoms.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23a4e4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  results: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginVertical: 30,
    marginBottom: 60,
  },
});
