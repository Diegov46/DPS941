import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Puedes ajustar el color según tus preferencias
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    textAlign: 'center'
  },
});

export default Title;
