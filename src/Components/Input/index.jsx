import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


export function Input({ placeholder, returnKeyType, onSubmitEditing, onChangeText, value }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      onChangeText={onChangeText}
      value={value}
    />
  )
}

const styles = StyleSheet.create({

  input: {
    width: '100%',
    height: 48,
    borderColor: '#517BF9',
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    fontSize: 18,
  }
})